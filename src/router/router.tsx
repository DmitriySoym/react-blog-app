import { MainTemplate } from "templates";
import {
  ArticlesPage,
  NotFoundPage,
  NewsPage,
  HomePage,
  FavoritesPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { RequareAuth } from "components";
import { DetailsPage } from "pages/DetailsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.ARTICLES} element={<ArticlesPage />} />
      <Route path={ROUTE.NEWS} element={<NewsPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.AUTH} element={<SignInPage />} />
      <Route path={ROUTE.REG} element={<SignUpPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORIRES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
