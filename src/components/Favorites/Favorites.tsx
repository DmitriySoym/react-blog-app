import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { Spinner } from "components/Spinner/Spinner";

export const Favorites = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTE.FAVORIRES);
  });
  return <Spinner />;
};
