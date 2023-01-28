import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/account/accountSlice";
import themeReduser from "./slices/theme/themeSlice";
import postReduser from "./slices/postsSlice/postsSlice";
import detailPostReducer from "./slices/detailPost/detailPostlelice";
import favoriteReducer from "./slices/favoritesSlice/favoritesSlice";
import menuBurgerReduser from "./slices/menuBurgerSlice/menuBurgerSclice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    theme: themeReduser,
    posts: postReduser,
    detailPost: detailPostReducer,
    favorites: favoriteReducer,
    menuBurger: menuBurgerReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
