import { NewsItem } from "components/NewsItem/NewsItem";
import { useEffect } from "react";
import { fetchNews, getAllNews, useAppDispatch, useAppSelector } from "store";
import { StyledNews } from "./styles";

import { INews } from "types/types";

export const News = () => {
  const { news, isLoading, error } = useAppSelector(getAllNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>{error}</span>;
  }

  return (
    <StyledNews>
      {news &&
        news.length > 0 &&
        news.map((news: INews) => {
          return <NewsItem news={news} key={news.id} />;
        })}
    </StyledNews>
  );
};
