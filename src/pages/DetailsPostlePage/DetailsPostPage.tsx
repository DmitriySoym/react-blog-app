import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, fetchDetailPost, getDetailPost, getAllposts } from "store";
import { DetailPost, Spinner, NavigateButton, Slider } from "components";
import { StyledDetailPage, Post, ErrorWrapper, Row, ErrorMessage } from "./styles";
import errorImg from "../../assets/img/error.gif";

export const DetailsPostlePage = () => {
  const { id = "" } = useParams();
  const { post, isLoading, error } = useAppSelector(getDetailPost);
  const { endPoint } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailPost({ endPoint: endPoint, id: id }));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <ErrorWrapper>
        <ErrorMessage>Sorry, something went wrong... The page could not be loaded.</ErrorMessage>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }

  return (
    <StyledDetailPage>
      <NavigateButton>
        <Post> / Post {id}</Post>
      </NavigateButton>
      <DetailPost post={post} />
      <Row>
        <Slider />
      </Row>
    </StyledDetailPage>
  );
};
