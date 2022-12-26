import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IArticlesState {
  articles: any[];
  isLoading: boolean;
}

const initialState: IArticlesState = {
  articles: [],
  isLoading: false,
};

export const fetchArticles = createAsyncThunk<any[]>("articles/fetchArticles", async () => {
  return await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=12").then((response) =>
    response.json(),
  );
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, () => {});
  },
});

export default articlesSlice.reducer;
