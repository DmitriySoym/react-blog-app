import { Outlet } from "react-router-dom";
import { StyledMain, Title, NavWrapper } from "./styles";
import { ROUTE } from "router/routes";
import { CustomNavLink } from "components";

export const Main = () => {
  return (
    <StyledMain>
      <Title>Blog</Title>
      <NavWrapper>
        <CustomNavLink to={ROUTE.ARTICLES}>Articles</CustomNavLink>
        <CustomNavLink to={ROUTE.NEWS}>News</CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORIRES}>Favorites</CustomNavLink>
      </NavWrapper>
      <Outlet />
    </StyledMain>
  );
};
