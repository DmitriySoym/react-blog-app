import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, BurgerMenu } from "components";
import { ROUTE } from "router/routes";
import { useDebounce, useInput, useToggle, useWindowSize } from "hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 767.98;

  return (
    <StyledHeader>
      <LogoLink to={ROUTE.HOME}>
        <LogoIcon />
      </LogoLink>

      <Account isMobile={isMobile} isMenuOpen={isMenuOpen} handleClose={toggleMenu} />
      {isMobile && (
        <BurgerMenu isMobile={isMobile} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </StyledHeader>
  );
};
