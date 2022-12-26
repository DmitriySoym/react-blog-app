import { useEffect } from "react";
import { fetchArticles, useAppDispatch } from "store";

export const Articles = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return <div>Articles</div>;
};
