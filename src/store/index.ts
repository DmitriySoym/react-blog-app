import { store } from "./store";
import { setUser, removeUser } from "./slices/account/accountSlice";
import { setTheme } from "./slices/theme/themeSlice";
import { RootState } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { useAppDispatch } from "./hooks/hooks";
import { AppDispatch } from "./store";
import { getTheme } from "./selectors/themeSelectors";
import { getAccountInfo } from "./selectors/accauntSelectors";
import { fetchArticles } from "./slices/articles/articlesSlice";
import { getAllArticles } from "./selectors/articlesSelectors";
import { getAllNews } from "./selectors/newsSelector";
import { fetchNews } from "./slices/news/newsSlice";
import { fetchDetailArticle } from "./slices/detailArticle/detailArticleSlice";
import { getDetailArticle } from "./selectors/detailArticleSelector";
import { fetchDetailNews } from "./slices/detailNews/detailNewsSlice";
import { getDetailNews } from "./selectors/detailNewsSelector";
import { toggleFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { getFavorites } from "./selectors/favoriteSelector";

export {
  store,
  setUser,
  removeUser,
  useAppSelector,
  useAppDispatch,
  setTheme,
  getTheme,
  getAccountInfo,
  fetchArticles,
  getAllArticles,
  getAllNews,
  fetchNews,
  fetchDetailArticle,
  fetchDetailNews,
  getDetailArticle,
  getDetailNews,
  toggleFavorite,
  getFavorites,
};
export type { RootState, AppDispatch };
