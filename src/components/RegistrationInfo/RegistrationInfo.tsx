import { ROUTE } from "router";
import { PortalTarget } from "types";
import { Portal } from "components";
import { StyledPortalAuth, Text, Button, ButtonClose } from "./styles";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { setPortalState, useAppDispatch } from "store";

interface IProps {
  onClick?: () => void;
  label: string;
}

export const RegistrationInfo = memo(({ onClick, label }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Portal target={PortalTarget.AUTH}>
      <StyledPortalAuth
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <ButtonClose onClick={onClick}>X</ButtonClose>
        <Text>{label}</Text>

        <Button
          onClick={() => {
            navigate(ROUTE.AUTH);
            dispatch(setPortalState());
          }}
        >
          Sign In
        </Button>
      </StyledPortalAuth>
    </Portal>
  );
});
