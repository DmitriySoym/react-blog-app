import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setEndPoint, useAppDispatch } from "store";
import { Button, Navigation } from "./styles";

interface IProps {
  children?: ReactNode;
}

export const NavigateButton = ({ children }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(ROUTE.HOME);
    dispatch(setEndPoint("articles"));
  };
  return (
    <Navigation>
      <Button onClick={handleBack}>Home</Button>
      {children}
    </Navigation>
  );
};
