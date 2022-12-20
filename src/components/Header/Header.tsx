import { Logo, SearchIcon } from "assets";
import { StyledHeader, StyledLogo } from "./styles";
import { Account } from "components";
import { Link } from "react-router-dom";
import { ROUT } from "router/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUT.HOME}>
        <StyledLogo>
          <Logo />
        </StyledLogo>
      </Link>
      <SearchIcon />
      <Account />
    </StyledHeader>
  );
};
