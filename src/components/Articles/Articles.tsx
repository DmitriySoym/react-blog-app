import { Article, Spinner } from "components";
import { useEffect } from "react";
import { fetchArticles, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { IArticle } from "types";
import { StyledArticles } from "./styles";

export const Articles = () => {
  const { articles, isLoading, error } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ page: 1, query: "" }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <span>{error}</span>;
  }

  return (
    <StyledArticles>
      {/* {isLoading && <StyledSpinner />}
      {error && <span>{error}</span>} */}
      {articles &&
        articles.length > 0 &&
        articles.map((article: IArticle) => {
          return <Article article={article} key={article.id} />;
        })}
    </StyledArticles>
  );
};
