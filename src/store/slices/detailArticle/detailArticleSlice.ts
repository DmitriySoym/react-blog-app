import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "types";
import { spaceBlogApi } from "services";
import { AxiosError } from "axios";

interface IDetailArticleState {
  article: IArticle;
  isLoading: boolean;
  error: null | string;
}

export const fetchDetailArticle = createAsyncThunk<IArticle, string, { rejectValue: string }>(
  "detailArticle/fetchDetailArticle",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceBlogApi.getArticleById(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: IDetailArticleState = {
  article: {} as IArticle,
  isLoading: false,
  error: null,
};

const detailArticleSlice = createSlice({
  name: "detailArticle",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchDetailArticle.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetailArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    });
    builder.addCase(fetchDetailArticle.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailArticleSlice.reducer;
