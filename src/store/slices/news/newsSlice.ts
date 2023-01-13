import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INews } from "types/types";
import { spaceBlogApi } from "services";

interface INewsState {
  news: INews[];
  isLoading: boolean;
  error: null | string;
}

export const fetchNews = createAsyncThunk<INews[], { page: number }, { rejectValue: string }>(
  "news/fetchNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceBlogApi.getAllNews(params.page);
    } catch (error) {
      return rejectWithValue("error");
    }
  },
);

const initialState: INewsState = {
  news: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
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

export default newsSlice.reducer;
