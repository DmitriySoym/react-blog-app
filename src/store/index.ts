import { store } from "./store";
import { setUser, userLogout } from "./slices/account/accountSlice";
import { setTheme } from "./slices/theme/themeSlice";
import { RootState } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { useAppDispatch } from "./hooks/hooks";
import { AppDispatch } from "./store";
import { getTheme } from "./selectors/themeSelectors";
import { getAccountInfo } from "./selectors/accauntSelectors";

import { fetchAllPosts } from "./slices/postsSlice/postsSlice";
import { getAllposts } from "./selectors/postsSelectors";
import { fetchDetailArticle } from "./slices/detailArticle/detailArticleSlice";
import { getDetailArticle } from "./selectors/detailArticleSelector";
import { fetchDetailPost } from "./slices/detailPost/detailPostlelice";
import { getDetailPost } from "./selectors/detailPostSelector";
import { toggleFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { getFavorites } from "./selectors/favoriteSelector";
import {
  setSearchQuery,
  setSortQuery,
  optionDate,
  buttons,
  optionSortByTitle,
  setEndPoint,
} from "./slices/postsSlice/postsSlice";
import { getMenuBurgerStatus } from "./selectors/menuBurgerSelector";
import { setIsMenuOpen } from "./slices/menuBurgerSlice/menuBurgerSclice";

export {
  store,
  setUser,
  userLogout,
  useAppSelector,
  useAppDispatch,
  setTheme,
  getTheme,
  getAccountInfo,
  getAllposts,
  fetchDetailArticle,
  fetchDetailPost,
  getDetailArticle,
  getDetailPost,
  toggleFavorite,
  getFavorites,
  setSearchQuery,
  getMenuBurgerStatus,
  setIsMenuOpen,
  setSortQuery,
  optionDate,
  buttons,
  optionSortByTitle,
  fetchAllPosts,
  setEndPoint,
};
export type { RootState, AppDispatch };
