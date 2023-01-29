import { useNavigate } from "react-router-dom";
import { StyledSignIn, Title } from "./styles";
import { SignInForm, NavigateButton } from "components";
import { ROUTE } from "router";

export const SignInPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledSignIn>
      <NavigateButton onclick={handleBack} />
      <Title>Sign In</Title>
      <SignInForm />
    </StyledSignIn>
  );
};
