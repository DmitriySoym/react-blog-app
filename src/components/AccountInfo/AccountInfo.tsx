import { Portal, PortalTarget } from "components";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { removeUser, useAppDispatch } from "store";
import { StyledAccountInfo, Text, Button } from "./styles";

export const AccountInfo = () => {
  const { name, isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(removeUser());
    navigate(ROUTE.HOME);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledAccountInfo>
        <Text>Your account:</Text>
        {name}
        <Button onClick={handleClick}>Exit</Button>
      </StyledAccountInfo>
    </Portal>
  );
};
