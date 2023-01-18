import { StyledMain } from "./styles";
import { ReactNode } from "react";
import { Title } from "components";

interface IProps {
  children: ReactNode;
}

export const Main = ({ children }: IProps) => {
  return <StyledMain>{children}</StyledMain>;
};
