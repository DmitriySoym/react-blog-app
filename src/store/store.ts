import { configureStore } from "@reduxjs/toolkit";
import accountReduser from "./slices/account/accountSlice";
import themeReduser from "./slices/theme/themeSlice";
import articlesReduser from "./slices/articles/articlesSlice";
import newsReduser from "./slices/news/newsSlice";

export const store = configureStore({
  reducer: {
    account: accountReduser,
    theme: themeReduser,
    articles: articlesReduser,
    news: newsReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
