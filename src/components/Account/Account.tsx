import { StyledAccount, Button } from "./styles";
import { LogoOutIcon } from "assets";
import { toggleAuth, useAppSelector, useAppDispatch } from "store";

export const Account = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.account);
  const handleClick = () => {
    dispatch(toggleAuth());
  };
  return (
    <StyledAccount>
      {isAuth ? (
        <>
          <div>Authorized user</div>
        </>
      ) : (
        <>
          <LogoOutIcon /> <Button onClick={handleClick}>Sign In</Button>
        </>
      )}
    </StyledAccount>
  );
};
