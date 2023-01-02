import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { getAccountInfo, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getAccountInfo);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.AUTH} />;
};
