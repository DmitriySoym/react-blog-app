import { Logo, SearchIcon } from "assets";
import { StyledHeader, StyledLogo } from "./styles";
import { Account } from "components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#">
        <Logo />
      </StyledLogo>
      <SearchIcon />
      <Account />
    </StyledHeader>
  );
};
