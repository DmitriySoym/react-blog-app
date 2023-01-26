import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, fetchDetailPost, getDetailPost, getAllposts } from "store";
import { DetailArticle, Spinner, NavigateButton } from "components";
import { StyledDetailPage, Post, ErrorWrapper } from "./styles";
import errorImg from "../../assets/img/error.gif";

export const DetailsPostlePage = () => {
  const { id = "" } = useParams();
  const { post, isLoading, error } = useAppSelector(getDetailPost);
  const postsInfo = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailPost({ endPoint: postsInfo.endPoint, id: id }));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <ErrorWrapper>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }

  return (
    <StyledDetailPage>
      <NavigateButton>
        <Post> / Post {id}</Post>
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
