import { useNavigate } from "react-router-dom";
import { StyledSignIn, HomeButton, Title } from "./styles";

export const SignIn = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/React-blog-app");
  };

  return (
    <StyledSignIn>
      <HomeButton onClick={handleBack}>Back to home</HomeButton>
      <Title>Sign In</Title>
    </StyledSignIn>
  );
};
