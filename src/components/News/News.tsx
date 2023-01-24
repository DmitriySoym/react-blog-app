import { Spinner, PostNews } from "components";
import { useEffect } from "react";
import { fetchNews, getAllposts, useAppDispatch, useAppSelector } from "store";
import { StyledNews, ErrorWrapper } from "./styles";
import errorImg from "../../assets/img/error.gif";

import { IPost } from "types/types";

interface IProps {
  news: IPost[];
}

export const News = ({ news }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews({ page: 0, query: "" }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <ErrorWrapper>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }

  return (
    <StyledNews>
      {news &&
        news.length > 0 &&
        news.map((news: IPost) => {
          return <PostNews post={news} key={news.id} />;
        })}
    </StyledNews>
  );
};
