import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "types";

interface IDetailArticleState {
  detailArticle: IArticle;
  isLoading: boolean;
  error: null | string;
}

export const fetchDetailArticle = createAsyncThunk<any, { id: string }, { rejectValue: string }>(
  "detailArticle/fetchDetailArticle",
  async (params, { rejectWithValue }) => {
    try {
      return await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`).then(
        (response) => response.json(),
      );
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IDetailArticleState = {
  detailArticle: {} as IArticle,
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
      state.detailArticle = action.payload;
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
