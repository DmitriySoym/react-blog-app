import { useNavigate } from "react-router-dom";
import { StyledResrtForm, Title } from "./styles";
import { NavigateButton, RegistrationInfo, ResetPassForm } from "components";
import { ROUTE } from "router";
import { getPortalState, useAppSelector } from "store";

export const ResetPasswordPage = () => {
  const { isPortalOpen } = useAppSelector(getPortalState);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledResrtForm>
      {isPortalOpen && <RegistrationInfo label="User not found. Try again." />}
      <NavigateButton onclick={handleBack} />
      <Title>Reset password</Title>
      <ResetPassForm />
    </StyledResrtForm>
  );
};
