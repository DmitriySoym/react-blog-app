import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, BurgerMenu } from "components";
import { ROUTE } from "router";
import { useScrollPosition, useToggle, useWindowSize } from "hooks";
import { getAllposts, setEndPoint, useAppDispatch, useAppSelector } from "store";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const { scrollPos } = useScrollPosition();
  const isMobile = width < 767.98;
  const dispatch = useAppDispatch();

  const handleHome = () => {
    dispatch(setEndPoint("articles"));
  };

  return (
    <StyledHeader menuPosition={scrollPos}>
      <LogoLink to={ROUTE.HOME} onClick={handleHome}>
        <LogoIcon />
      </LogoLink>

      <Account isMobile={isMobile} isMenuOpen={isMenuOpen} handleClose={toggleMenu} />
      {isMobile && (
        <BurgerMenu isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </StyledHeader>
  );
};
