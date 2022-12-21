import { Outlet } from "react-router-dom";
import { StyledMain, Title, NavWrapper } from "./styles";
import { ROUT } from "router/routes";
import { CustomNavLink } from "components";

export const Main = () => {
  return (
    <StyledMain>
      <Title>Blog</Title>
      <NavWrapper>
        <CustomNavLink to={ROUT.ARTICLES}>Articles</CustomNavLink>
        <CustomNavLink to={ROUT.NEWS}>News</CustomNavLink>
      </NavWrapper>
      <Outlet />
    </StyledMain>
  );
};
