import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, fetchDetailArticle, useAppSelector, getDetailArticle } from "store";
import { IArticle } from "types";

export const DetailsPage = () => {
  const [article, setArticle] = useState({} as IArticle);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((response) => response.json())
      .then(setArticle);
  }, [id]);

  //--------
  // const params = useParams();
  // const [details] = useState(`${params.id}`);
  // const { detailArticle, isLoading } = useAppSelector(getDetailArticle);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchDetailArticle(details));
  // }, [dispatch, details]);

  //------

  return (
    <>
      <span>{id}</span>
      <span>{article.summary}</span>
    </>
  );
};
