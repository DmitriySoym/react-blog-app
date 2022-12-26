import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, Search } from "components";
import { ROUTE } from "router/routes";
import { useInput } from "hooks";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <LogoIcon />
      </LogoLink>
      <Search {...search} />
      <Account />
    </StyledHeader>
  );
};
