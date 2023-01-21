import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, fetchDetailArticle, useAppSelector, getDetailArticle } from "store";
import { DetailArticle, Spinner, NavigateButton } from "components";
import { StyledDetailPage, Post } from "./styles";

export const DetailsArticlePage = () => {
  const { id = "" } = useParams();
  const [details] = useState(id);
  const { post, isLoading } = useAppSelector(getDetailArticle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailArticle(details));
  }, [details, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDetailPage>
      <NavigateButton>
        <Post> / Post {post.id}</Post>
      </NavigateButton>
      <DetailArticle post={post} />
      {/* <Row>
        <Article article={article} />
        <Article article={article} />
        <Article article={article} />
      </Row> */}
    </StyledDetailPage>
  );
};
