import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "types";
import { spaceBlogApi } from "services";

interface IDetailPostState {
  post: IPost;
  isLoading: boolean;
  error: null | string;
}

export const fetchDetailPost = createAsyncThunk<
  IPost,
  { id: string; endPoint: string },
  { rejectValue: string }
>("detailNews/fetchDetailNews", async ({ id, endPoint }, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getNewsById(id, endPoint);
  } catch (error) {
    return rejectWithValue("Error");
  }
});

const initialState: IDetailPostState = {
  post: {} as IPost,
  isLoading: false,
  error: null,
};

const detailPostSlelice = createSlice({
  name: "detailNews",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchDetailPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetailPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(fetchDetailPost.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailPostSlelice.reducer;
