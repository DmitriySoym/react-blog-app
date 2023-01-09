import { MainTemplate } from "templates";
import {
  ArticlesPage,
  NotFoundPage,
  NewsPage,
  HomePage,
  FavoritesPage,
  SignInPage,
  SignUpPage,
  DetailsArticlePage,
  DetailsNewsPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { RequareAuth } from "components";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.ARTICLES} element={<ArticlesPage />} />
      <Route path={ROUTE.NEWS} element={<NewsPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.DETAIL_POST} element={<DetailsArticlePage />} />
      <Route path={ROUTE.DETAIL_NEWS} element={<DetailsNewsPage />} />
      <Route path={ROUTE.AUTH} element={<SignInPage />} />
      <Route path={ROUTE.REG} element={<SignUpPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORIRES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
