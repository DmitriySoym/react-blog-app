import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, getDetailNews, fetchDetailNews } from "store";
import { DetailNews, Spinner } from "components";
import { StyledDetailPage, Button, Navigation, Post, Row } from "./styles";

export const DetailsNewsPage = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const [details] = useState(id);
  const { news, isLoading } = useAppSelector(getDetailNews);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchDetailNews(details));
  }, [details, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDetailPage>
      <Navigation>
        <Button onClick={handleBack}>Home</Button>
        <Post> / Post {news.id}</Post>
      </Navigation>
      <DetailNews news={news} />
      {/* <Row>
        <Article article={article} />
        <Article article={article} />
        <Article article={article} />
      </Row> */}
    </StyledDetailPage>
  );
};