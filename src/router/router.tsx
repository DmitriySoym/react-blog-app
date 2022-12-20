import { MainTemplate, Header } from "components";
import { ArticlesPage, NotFoundPage, News, HomePage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUT } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUT.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUT.ARTICLES} element={<ArticlesPage />} />
      <Route path={ROUT.NEWS} element={<News />} />
      <Route path={ROUT.NOT_FOUND} element={<NotFoundPage />} />
    </Route>,
  ),
);
