import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "types";
import { spaceBlogApi } from "services";

interface IArticlesState {
  articles: IPost[];
  isLoading: boolean;
  error: null | string;
}

export const fetchArticles = createAsyncThunk<
  IPost[],
  { page: number; query: string },
  { rejectValue: string }
>("articles/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllArticles(params.page, params.query);
  } catch (error) {
    return rejectWithValue("error");
  }
});

const initialState: IArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
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
  },
});

export default articlesSlice.reducer;
