import { store } from "./store";
import { setUser, userLogout } from "./slices/account/accountSlice";
import { setTheme } from "./slices/theme/themeSlice";
import { RootState } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { useAppDispatch } from "./hooks/hooks";
import { AppDispatch } from "./store";
import { getTheme } from "./selectors/themeSelectors";
import { getAccountInfo } from "./selectors/accauntSelectors";
import { fetchArticles, fetchNews } from "./slices/postsSlice/postsSlice";
import { getAllposts } from "./selectors/postsSelectors";
// import { getAllNews } from "./selectors/newsSelector";
import { fetchDetailArticle } from "./slices/detailArticle/detailArticleSlice";
import { getDetailArticle } from "./selectors/detailArticleSelector";
import { fetchDetailNews } from "./slices/detailNews/detailNewsSlice";
import { getDetailNews } from "./selectors/detailNewsSelector";
import { toggleFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { getFavorites } from "./selectors/favoriteSelector";
import { setSearchQuery } from "./slices/postsSlice/postsSlice";

export {
  store,
  setUser,
  userLogout,
  useAppSelector,
  useAppDispatch,
  setTheme,
  getTheme,
  getAccountInfo,
  fetchArticles,
  getAllposts,
  // getAllNews,
  fetchNews,
  fetchDetailArticle,
  fetchDetailNews,
  getDetailArticle,
  getDetailNews,
  toggleFavorite,
  getFavorites,
  setSearchQuery,
};
export type { RootState, AppDispatch };
