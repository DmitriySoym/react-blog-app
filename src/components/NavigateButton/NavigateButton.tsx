import { ReactNode, memo } from "react";
import { Button, Navigation } from "./styles";

interface IProps {
  children?: ReactNode;
  onclick: () => void;
  text?: string;
}

export const NavigateButton = memo(({ children, onclick, text }: IProps) => {
  return (
    <Navigation>
      <Button onClick={onclick}>{text || "Home"}</Button>
      {children}
    </Navigation>
  );
});
