import { Article } from "components/Article/Article";
import { useEffect } from "react";
import { fetchArticles, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { IArticle } from "types";
import { StyledArticles } from "./styles";

export const Articles = () => {
  const { articles, isLoading } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
    <StyledArticles>
      {isLoading && <span>Loading...</span>}
      {articles &&
        articles.length > 0 &&
        articles.map((article: IArticle) => {
          return <Article article={article} key={article.id} />;
        })}
    </StyledArticles>
  );
};
