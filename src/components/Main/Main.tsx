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

      {children}
    </StyledMain>
  );
};
