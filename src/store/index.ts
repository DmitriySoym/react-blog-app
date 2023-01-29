import { store } from "./store";
import { setUser, userLogout } from "./slices/accountSlice/accountSlice";
import { setTheme } from "./slices/themeSlice/themeSlice";
import { RootState } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { useAppDispatch } from "./hooks/hooks";
import { AppDispatch } from "./store";
import { getTheme } from "./selectors/themeSelectors";
import { getAccountInfo } from "./selectors/accauntSelectors";
import { fetchAllPosts } from "./slices/postsSlice/postsSlice";
import { getAllposts } from "./selectors/postsSelectors";
import { fetchDetailPost } from "./slices/detailPostSlice/detailPostlelice";
import { getDetailPost } from "./selectors/detailPostSelector";
import { toggleFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { getFavorites } from "./selectors/favoriteSelector";
import {
  setSearchQuery,
  optionDate,
  buttons,
  optionSortByTitle,
  setEndPoint,
  setPage,
} from "./slices/postsSlice/postsSlice";
import { getMenuBurgerStatus } from "./selectors/menuBurgerSelector";
import { setIsMenuOpen } from "./slices/menuBurgerSlice/menuBurgerSclice";
import { setPortalState } from "./slices/portalSlice/portalSlice";
import { getPortalState } from "./selectors/portalSelectors";
import { setCurrentPageValue } from "./slices/paginationSlice/paginationSlice";
import { getCurrentPage } from "./selectors/paginationSelector";

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
  fetchDetailPost,
  getDetailPost,
  toggleFavorite,
  getFavorites,
  setSearchQuery,
  getMenuBurgerStatus,
  setIsMenuOpen,
  optionDate,
  buttons,
  optionSortByTitle,
  fetchAllPosts,
  setEndPoint,
  setPage,
  setPortalState,
  getPortalState,
  setCurrentPageValue,
  getCurrentPage,
};
export type { RootState, AppDispatch };
