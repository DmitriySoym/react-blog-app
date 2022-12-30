import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const params = useParams();

  return <>{params.id}</>;
};
