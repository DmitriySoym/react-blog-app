import { MainTemplate } from "components";
import { Homepage, NotFoundPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
