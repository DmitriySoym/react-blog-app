import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/accountSlice/accountSlice";
import themeReduser from "./slices/themeSlice/themeSlice";
import postReduser from "./slices/postsSlice/postsSlice";
import detailPostReducer from "./slices/detailPostSlice/detailPostlelice";
import favoriteReducer from "./slices/favoritesSlice/favoritesSlice";
import menuBurgerReduser from "./slices/menuBurgerSlice/menuBurgerSclice";
import portalReduser from "./slices/portalSlice/portalSlice";
import paginationReduser from "./slices/paginationSlice/paginationSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    theme: themeReduser,
    posts: postReduser,
    detailPost: detailPostReducer,
    favorites: favoriteReducer,
    menuBurger: menuBurgerReduser,
    portal: portalReduser,
    pagination: paginationReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
