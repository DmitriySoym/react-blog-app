import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IArticle } from "types";

export const DetailsPage = () => {
  const [article, setArticle] = useState({} as IArticle);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((response) => response.json())
      .then(setArticle);
  }, [id]);

  return (
    <>
      <span>{id}</span>
      {article.title} <img src={article.imageUrl} />
    </>
  );
};
