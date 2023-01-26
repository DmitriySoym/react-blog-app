import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAppDispatch,
  // fetchDetailArticle,
  useAppSelector,
  getDetailArticle,
  fetchDetailPost,
  getDetailPost,
  getAllposts,
} from "store";
import { DetailArticle, Spinner, NavigateButton } from "components";
import { StyledDetailPage, Post } from "./styles";

export const DetailsPostlePage = () => {
  const { id = "" } = useParams();
  // const [details] = useState(id);
  const { post, isLoading } = useAppSelector(getDetailPost);
  const postsInfo = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailPost({ endPoint: postsInfo.endPoint, id: id }));
  }, []);

  if (isLoading) {
    return <Spinner />;
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
