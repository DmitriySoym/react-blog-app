import { Portal } from "components";
import { useAppSelector, getAccountInfo } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { removeUser, useAppDispatch } from "store";
import { PortalTarget } from "types";
import { StyledAccountInfo, Text, Button, Name } from "./styles";

export const AccountInfo = () => {
  const { name } = useAppSelector(getAccountInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOff = () => {
    dispatch(removeUser());
    navigate(ROUTE.HOME);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledAccountInfo id="my_modal">
        <Text>Your account:</Text>
        <Name>{name}</Name>
        <Button onClick={handleLogOff} id="log-off">
          Exit
        </Button>
      </StyledAccountInfo>
    </Portal>
  );
};
