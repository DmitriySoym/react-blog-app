import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, Search } from "components";
import { ROUTE } from "router/routes";
import { useDebounce, useInput } from "hooks";

export const Header = () => {
  const search = useInput();


  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <LogoIcon />
      </LogoLink>
      <Search value={search.value} onChange={search.onChange} />
      <Account />
    </StyledHeader>
  );
};
