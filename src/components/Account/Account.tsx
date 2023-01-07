import { StyledAccount, Button, UserLogo, Name } from "./styles";
import { LogoOutIcon } from "assets";
import { useAppSelector, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

export const Account = () => {
  const { isAuth, name } = useAppSelector(getAccountInfo);

  return (
    <StyledAccount>
      {isAuth ? (
        <>
          <UserLogo>{name[0]}</UserLogo>
          <Name>{name}</Name>
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
