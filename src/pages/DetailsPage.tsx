import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, fetchDetailArticle, useAppSelector, getDetailArticle } from "store";
import { DetailArticle } from "components";
import { StyledDetailPage, Button, Navigation, Post } from "./styles";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

  const [details] = useState(`${id}`);
  const { detailArticle, isLoading } = useAppSelector(getDetailArticle);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDetailArticle(details));
  }, [details]);

  return (
    <StyledDetailPage>
      <Navigation>
        <Button onClick={handleBack}>Home</Button>
        <Post> / Post {detailArticle.id}</Post>
      </Navigation>
      <DetailArticle article={detailArticle} />
    </StyledDetailPage>
  );
};
