import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost, TabOne } from "types";
import { spaceBlogApi } from "services";

interface ISearchParams {
  searchQuery: string | null;
}

interface IPostState {
  posts: {
    results: IPost[];
    count: number;
  };
  page: number;
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
  endPoint: TabOne;
}

export const fetchAllPosts = createAsyncThunk<
  { results: IPost[]; count: number },
  { endpoint: string; page: number; query: string; sortParams: string; publicationDate: Date },
  { rejectValue: string }
>("post/fetchAllPosts", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPostsStartPage(
      params.page,
      params.query,
      params.sortParams,
      params.endpoint,
      params.publicationDate,
    );
  } catch (error) {
    return rejectWithValue("error");
  }
});

const initialState: IPostState = {
  posts: {
    results: [],
    count: 0,
  },
  page: 0,
  isLoading: false,
  error: null,
  searchParams: {
    searchQuery: null,
  },
  endPoint: TabOne.ARTICLE,
};

const articlesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchParams.searchQuery = payload.searchQuery;
    },
    setEndPoint: (state, { payload }) => {
      state.endPoint = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default articlesSlice.reducer;

export const { setSearchQuery, setEndPoint, setPage } = articlesSlice.actions;
