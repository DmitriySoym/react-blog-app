import { useNavigate } from "react-router-dom";
import { StyledResrtForm, Title } from "./styles";
import { NavigateButton, ResetPassForm } from "components";
import { ROUTE } from "router";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledResrtForm>
      <NavigateButton onclick={handleBack} />
      <Title>Reset password</Title>
      <ResetPassForm />
    </StyledResrtForm>
  );
};
