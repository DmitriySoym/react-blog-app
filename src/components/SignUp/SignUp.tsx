import { useNavigate } from "react-router-dom";
import { StyledSignUp, HomeButton, Title } from "./styles";
import { SignUpForm } from "components/SignUpForm/SignUpForm";
import { ROUTE } from "router";

export const SignUp = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledSignUp>
      <HomeButton onClick={handleBack}>Back to home</HomeButton>
      <Title>Sign Up</Title>
      <SignUpForm />
    </StyledSignUp>
  );
};
