import { Main, NavigateButton, PostArticle } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles, getAllposts, useAppDispatch, useAppSelector } from "store";
import { IPost } from "types";
import { Wrapper } from "./styles";

export const SearchPage = () => {
  const { serchValue = "" } = useParams();
  const { articles } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    serchValue &&
      dispatch(
        fetchArticles({
          page: 0,
          query: serchValue,
          sortParams: "",
        }),
      );
  }, [dispatch, serchValue]);

  return (
    <Main>
      <NavigateButton />
      <Wrapper>
        {articles &&
          articles.length > 0 &&
          articles.map((post: IPost) => {
            return <PostArticle post={post} key={post.id} />;
          })}
      </Wrapper>
    </Main>
  );
};
