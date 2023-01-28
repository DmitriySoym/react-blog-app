import { ReactNode } from "react";
import { Button, Navigation } from "./styles";

interface IProps {
  children?: ReactNode;
  onclick: () => void;
}

export const NavigateButton = ({ children, onclick }: IProps) => {
  return (
    <Navigation>
      <Button onClick={onclick}>Home</Button>
      {children}
    </Navigation>
  );
};
