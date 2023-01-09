import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INews } from "types";
import { spaceBlogApi } from "services";

interface IDetailPostState {
  news: INews;
  isLoading: boolean;
  error: null | string;
}

export const fetchDetailNews = createAsyncThunk<INews, string, { rejectValue: string }>(
  "detailNews/fetchDetailNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceBlogApi.getNewsById(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IDetailPostState = {
  news: {} as INews,
  isLoading: false,
  error: null,
};

const detailNewslelice = createSlice({
  name: "detailNews",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchDetailNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetailNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchDetailNews.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailNewslelice.reducer;
