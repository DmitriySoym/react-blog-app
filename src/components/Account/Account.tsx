import { StyledAccount, Button } from "./styles";
import { LogoOutIcon } from "assets";
import { toggleAuth, InitialState } from "store";
import { useDispatch, useSelector } from "react-redux";

export const Account = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: InitialState) => state.account);
  const handleClick = () => {
    dispatch(toggleAuth());
  };
  return (
    <StyledAccount>
      {!isAuth ? (
        <>
          <LogoOutIcon /> <Button onClick={handleClick}>Sign In</Button>
        </>
      ) : (
        <>
          <div>Authorized user</div>
        </>
      )}
    </StyledAccount>
  );
};
