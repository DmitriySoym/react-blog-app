import { useNavigate } from "react-router-dom";
import { StyledResrtForm, HomeButton, Title } from "./styles";
import { ResetPassForm } from "components";
import { ROUTE } from "router";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledResrtForm>
      <HomeButton onClick={handleBack}>Back to home</HomeButton>
      <Title>Reset password</Title>
      <ResetPassForm />
    </StyledResrtForm>
  );
};
