import { Spinner, Post } from "components";
import { useEffect } from "react";
import { fetchNews, getAllNews, useAppDispatch, useAppSelector } from "store";
import { StyledNews } from "./styles";

import { IPost } from "types/types";

export const News = () => {
  const { news, isLoading, error } = useAppSelector(getAllNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews({ page: 1 }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <span>{error}</span>;
  }

  return (
    <StyledNews>
      {news &&
        news.length > 0 &&
        news.map((news: IPost) => {
          return <Post post={news} key={news.id} />;
        })}
    </StyledNews>
  );
};
