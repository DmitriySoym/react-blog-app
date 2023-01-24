import { PostArticle, Spinner } from "components";
import { useEffect } from "react";
import { fetchArticles, getAllposts, useAppDispatch, useAppSelector } from "store";
import { IPost } from "types";
import { StyledArticles, ErrorWrapper } from "./styles";
import errorImg from "../../assets/img/error.gif";

interface IProps {
  articles: IPost[];
}

export const Articles = ({ articles }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, query: "" }));
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
    <StyledArticles>
      {articles &&
        articles.length > 0 &&
        articles.map((post: IPost) => {
          return <PostArticle post={post} key={post.id} />;
        })}
    </StyledArticles>
  );
};

/* {Array.isArray(posts) && */
