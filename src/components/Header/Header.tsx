import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, BurgerMenu } from "components";
import { ROUTE } from "router";
import { useScrollPosition, useToggle, useWindowSize } from "hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const { scrollPos } = useScrollPosition();
  const isMobile = width < 767.98;

  return (
    <StyledHeader menuPosition={scrollPos}>
      <LogoLink to={ROUTE.HOME}>
        <LogoIcon />
      </LogoLink>

      <Account isMobile={isMobile} isMenuOpen={isMenuOpen} handleClose={toggleMenu} />
      {isMobile && (
        <BurgerMenu isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </StyledHeader>
  );
};
