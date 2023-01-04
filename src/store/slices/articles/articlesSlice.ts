import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "types";
import { spaceBlogApi } from "services";

interface IArticlesState {
  articles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

export const fetchArticles = createAsyncThunk<IArticle[], undefined, { rejectValue: string }>(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceBlogApi.getAllArticles(12);
    } catch (error) {
      return rejectWithValue("error");
    }
  },
);

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
