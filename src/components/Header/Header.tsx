import { LogoIcon } from "assets";
import { StyledHeader, StyledLogo, LogoLink } from "./styles";
import { Account, Search } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "router/routes";
import { useInput } from "hooks";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <StyledLogo>
        <LogoLink to={ROUTE.HOME}>
          <LogoIcon />
        </LogoLink>
      </StyledLogo>
      <Search {...search} />
      <Account />
    </StyledHeader>
  );
};
