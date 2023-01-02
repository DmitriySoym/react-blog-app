import { StyledAccount, Button } from "./styles";
import { LogoOutIcon } from "assets";
import { toggleAuth, useAppSelector, useAppDispatch, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

export const Account = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getAccountInfo);
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
          <LogoOutIcon />{" "}
          <Link to={ROUTE.AUTH}>
            <Button>Sign In</Button>
          </Link>
        </>
      )}
    </StyledAccount>
  );
};
