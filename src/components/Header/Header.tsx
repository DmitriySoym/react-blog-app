import { LogoIcon } from "assets";
import { StyledHeader, StyledLogo } from "./styles";
import { Account, Search } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "router/routes";
import { useInput } from "hooks";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to={ROUTE.HOME}>
          <LogoIcon />
        </Link>
      </StyledLogo>
      <Search type={"search"} placeholder={"Search..."} {...search} />
      <Account />
    </StyledHeader>
  );
};
