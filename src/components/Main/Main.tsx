import { Outlet } from "react-router-dom";
import { StyledMain, Title, NavWrapper } from "./styles";
import { ROUTE } from "router/routes";
import { CustomNavLink } from "components";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Main = ({ children }: IProps) => {
  return (
    <StyledMain>
      <Title>Blog</Title>
      <NavWrapper>
        <CustomNavLink to={ROUTE.ARTICLES}>Articles</CustomNavLink>
        <CustomNavLink to={ROUTE.NEWS}>News</CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORIRES}>Favorites</CustomNavLink>
      </NavWrapper>

      {children}
    </StyledMain>
  );
};
