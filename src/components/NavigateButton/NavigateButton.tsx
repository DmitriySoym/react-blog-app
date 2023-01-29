import { ReactNode, memo } from "react";
import { Button, Navigation } from "./styles";

interface IProps {
  children?: ReactNode;
  onclick: () => void;
}

export const NavigateButton = memo(({ children, onclick }: IProps) => {
  return (
    <Navigation>
      <Button onClick={onclick}>Home</Button>
      {children}
    </Navigation>
  );
});
