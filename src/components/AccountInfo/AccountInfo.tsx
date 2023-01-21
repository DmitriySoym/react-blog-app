import { Portal } from "components";
import { useAppSelector, getAccountInfo, userLogout } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { PortalTarget } from "types";
import { StyledAccountInfo, Text, Button, Name } from "./styles";

export const AccountInfo = () => {
  const { name } = useAppSelector(getAccountInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(userLogout());
    navigate(ROUTE.HOME);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledAccountInfo>
        <Text>Your account:</Text>
        <Name>{name}</Name>
        <Button onClick={handleLogOut}>Exit</Button>
      </StyledAccountInfo>
    </Portal>
  );
};
