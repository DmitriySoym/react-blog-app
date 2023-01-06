import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, fetchDetailArticle, useAppSelector, getDetailArticle } from "store";
import { DetailArticle, Article } from "components";
import { StyledDetailPage, Button, Navigation, Post, Row } from "./styles";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details] = useState(`${id}`);
  const { article, isLoading } = useAppSelector(getDetailArticle);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchDetailArticle(details));
  }, [details, dispatch]);

  return (
    <StyledDetailPage>
      <Navigation>
        <Button onClick={handleBack}>Home</Button>
        <Post> / Post {article.id}</Post>
      </Navigation>
      <DetailArticle article={article} />
      {/* <Row>
        <Article article={article} />
        <Article article={article} />
        <Article article={article} />
      </Row> */}
    </StyledDetailPage>
  );
};
