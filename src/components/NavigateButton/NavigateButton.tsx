import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navigation } from "./styles";

interface IProps {
  children?: ReactNode;
}

export const NavigateButton = ({ children }: IProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Navigation>
      <Button onClick={handleBack}>Home</Button>
      {children}
    </Navigation>
  );
};
