import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "types";
import { spaceBlogApi } from "services";

interface ISearchParams {
  searchQuery: string | null;
}

interface IPostState {
  articles: IPost[];
  news: IPost[];
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
}

export const fetchArticles = createAsyncThunk<
  IPost[],
  { page: number; query: string },
  { rejectValue: string }
>("post/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPosts(params.page, params.query, "articles");
  } catch (error) {
    return rejectWithValue("error");
  }
});

export const fetchNews = createAsyncThunk<
  IPost[],
  { page: number; query: string },
  { rejectValue: string }
>("post/fetchNews", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPosts(params.page, params.query, "blogs");
  } catch (error) {
    return rejectWithValue("error");
  }
});

const initialState: IPostState = {
  articles: [],
  news: [],
  isLoading: false,
  error: null,
  searchParams: {
    searchQuery: null,
  },
};

const articlesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchParams.searchQuery = payload.searchQuery;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });

    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default articlesSlice.reducer;

export const { setSearchQuery } = articlesSlice.actions;
