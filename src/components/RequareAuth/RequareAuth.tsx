import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { useAuth } from "hooks";

export const RequareAuth = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.AUTH} />;
};
