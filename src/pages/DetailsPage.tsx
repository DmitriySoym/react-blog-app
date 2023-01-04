import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, fetchDetailArticle, useAppSelector, getDetailArticle } from "store";

export const DetailsPage = () => {
  const { id } = useParams();

  const [details] = useState(`${id}`);
  const { detailArticle, isLoading } = useAppSelector(getDetailArticle);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDetailArticle(details));
  }, [details]);
  console.log(detailArticle.newSite);

  return <div>{detailArticle.title} </div>;
};
