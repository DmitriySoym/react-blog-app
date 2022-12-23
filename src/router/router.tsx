import { MainTemplate } from "templates";
import { ArticlesPage, NotFoundPage, News, HomePage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.ARTICLES} element={<ArticlesPage />} />
      <Route path={ROUTE.NEWS} element={<News />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </Route>,
  ),
);
