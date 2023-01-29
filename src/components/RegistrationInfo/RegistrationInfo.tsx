import { ROUTE } from "router";
import { PortalTarget } from "types";
import { Portal } from "components";
import { StyledPortalAuth, Text, Button, ButtonClose } from "./styles";
import { useNavigate } from "react-router-dom";

interface IProps {
  onClick: () => void;
}

export const RegistrationInfo = ({ onClick }: IProps) => {
  const navigate = useNavigate();

  return (
    <Portal target={PortalTarget.AUTH}>
      <StyledPortalAuth>
        <ButtonClose onClick={onClick}>X</ButtonClose>
        <Text>To add post in Favorites you need to Sign in.</Text>

        <Button
          onClick={() => {
            navigate(ROUTE.AUTH);
          }}
        >
          Sign In
        </Button>
      </StyledPortalAuth>
    </Portal>
  );
};
