import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IButton, IOptionDateSort, IPost, ISelectOption, SortByDate, SortPost } from "types";
import { spaceBlogApi } from "services";

interface ISearchParams {
  searchQuery: string | null;
}

interface ISortParams {
  sortQuery: string | null;
}

interface IPostState {
  articles: IPost[];
  news: IPost[];
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
  sortParams: ISortParams;
}

export enum PostsCategory {
  ARTICLES = "articles",
  NEWS = "news",
}

export const optionDate: IOptionDateSort[] = [
  { value: SortByDate.DAY, label: "Day" },
  { value: SortByDate.WEEK, label: "Week" },
  { value: SortByDate.MONTH, label: "Month" },
  { value: SortByDate.YEAR, label: "Year" },
];

export const buttons: IButton[] = [
  { id: "0", title: "Day" },
  { id: "1", title: "Week" },
  { id: "2", title: "Month" },
  { id: "3", title: "Year" },
];

export const optionSortByTitle: ISelectOption[] = [
  { value: SortPost.AZ, label: "Title (A-Z)" },
  { value: SortPost.ZA, label: "Title (Z-A)" },
];

export const fetchArticles = createAsyncThunk<
  IPost[],
  { page: number; query: string; sortParams: string },
  { rejectValue: string }
>("post/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPosts(params.page, params.query, params.sortParams, "articles");
  } catch (error) {
    return rejectWithValue("error");
  }
});

export const fetchNews = createAsyncThunk<
  IPost[],
  { page: number; query: string; sortParams: string },
  { rejectValue: string }
>("post/fetchNews", async (params, { rejectWithValue }) => {
  try {
    return await spaceBlogApi.getAllPosts(params.page, params.query, params.sortParams, "blogs");
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
  sortParams: {
    sortQuery: null,
  },
};

const articlesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchParams.searchQuery = payload.searchQuery;
    },
    setSortQuery: (state, { payload }) => {
      state.sortParams.sortQuery = payload.sortQuery;
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

export const { setSearchQuery, setSortQuery } = articlesSlice.actions;
