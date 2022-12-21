import { Link, Outlet } from "react-router-dom";
import { StyledMain, Title } from "./styles";
import { ROUT } from "router/routes";

export const Main = () => {
  return (
    <StyledMain>
      <Title>Blog</Title>
      <Link to={ROUT.ARTICLES}>Articles</Link>
      <Link to={ROUT.NEWS}>News</Link>
      <Outlet />
    </StyledMain>
  );
};
