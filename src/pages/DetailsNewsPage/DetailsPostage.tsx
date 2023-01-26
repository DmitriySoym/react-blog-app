import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, getDetailPost, fetchDetailPost } from "store";
import { DetailNews, Spinner, NavigateButton } from "components";
import { StyledDetailPage, Post } from "./styles";

export const DetailsNewsPage = () => {
  const { id = "" } = useParams();
  const [details] = useState(id);
  const { post, isLoading } = useAppSelector(getDetailPost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailPost({ id: details, endPoint: "blogs" }));
  }, [details, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDetailPage>
      <NavigateButton>
        <Post> / Post {post.id}</Post>
      </NavigateButton>
      <DetailNews post={post} />
      {/* <DetailNews post={news} /> */}
      {/* <Row>
        <Article article={article} />
        <Article article={article} />
        <Article article={article} />
      </Row> */}
    </StyledDetailPage>
  );
};
