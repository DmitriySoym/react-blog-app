import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/account/accountSlice";
import themeReduser from "./slices/theme/themeSlice";
import articlesReduser from "./slices/articles/articlesSlice";
import newsReduser from "./slices/news/newsSlice";
import detailArticleReducer from "./slices/detailArticle/detailArticleSlice";
import detailNewsReducer from "./slices/detailNews/detailNewsSlice";
import favoriteReducer from "./slices/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    theme: themeReduser,
    articles: articlesReduser,
    news: newsReduser,
    detailArticle: detailArticleReducer,
    detailNews: detailNewsReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
