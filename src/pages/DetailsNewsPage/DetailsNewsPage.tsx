import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, getDetailNews, fetchDetailNews } from "store";
import { DetailNews, Spinner, NavigateButton } from "components";
import { StyledDetailPage, Post } from "./styles";

export const DetailsNewsPage = () => {
  const { id = "" } = useParams();
  const [details] = useState(id);
  const { news, isLoading } = useAppSelector(getDetailNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailNews(details));
  }, [details, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDetailPage>
      <NavigateButton>
        <Post> / Post {news.id}</Post>
      </NavigateButton>
      <DetailNews post={news} />
      {/* <DetailNews post={news} /> */}
      {/* <Row>
        <Article article={article} />
        <Article article={article} />
        <Article article={article} />
      </Row> */}
    </StyledDetailPage>
  );
};
