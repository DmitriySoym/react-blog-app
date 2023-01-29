import { useNavigate } from "react-router-dom";
import { StyledSignUp, Title } from "./styles";
import { SignUpForm } from "components/SignUpForm/SignUpForm";
import { ROUTE } from "router";
import { NavigateButton } from "components";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledSignUp>
      <NavigateButton onclick={handleBack} />
      <Title>Sign Up</Title>
      <SignUpForm />
    </StyledSignUp>
  );
};
