import { MainTemplate } from "components";
import { ArticlesPage, NotFoundPage, News } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
