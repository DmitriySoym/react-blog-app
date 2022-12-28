import { store } from "./store";
import { toggleAuth } from "./slices/account/accountSlice";
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

export {
  store,
  toggleAuth,
  useAppSelector,
  useAppDispatch,
  setTheme,
  getTheme,
  getAccountInfo,
  fetchArticles,
  getAllArticles,
  getAllNews,
  fetchNews,
};
export type { RootState };
export type { AppDispatch };
