import { MainTemplate } from "templates";
import {
  HomePage,
  FavoritesPage,
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  SearchPage,
  NotFoundPage,
  DetailsPostlePage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { RequareAuth } from "components";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.DETAIL_POST} element={<DetailsPostlePage />} />
      <Route path={ROUTE.AUTH} element={<SignInPage />} />
      <Route path={ROUTE.REG} element={<SignUpPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORIRES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
