import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/account/accountSlice";
import themeReduser from "./slices/theme/themeSlice";
import postReduser from "./slices/postsSlice/postsSlice";
import detailArticleReducer from "./slices/detailArticle/detailArticleSlice";
import detailNewsReducer from "./slices/detailNews/detailNewsSlice";
import favoriteReducer from "./slices/favoritesSlice/favoritesSlice";
import menuBurgerReduser from "./slices/menuBurgerSlice/menuBurgerSclice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    theme: themeReduser,
    posts: postReduser,
    detailArticle: detailArticleReducer,
    detailNews: detailNewsReducer,
    favorites: favoriteReducer,
    menuBurger: menuBurgerReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
