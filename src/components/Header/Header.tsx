import { LogoIcon } from "assets";
import { StyledHeader, LogoLink } from "./styles";
import { Account, BurgerMenu } from "components";
import { ROUTE } from "router";
import { useScrollPosition, useToggle, useWindowSize } from "hooks";
import {
  getMenuBurgerStatus,
  setEndPoint,
  useAppDispatch,
  useAppSelector,
  setIsMenuOpen,
} from "store";
import { memo } from "react";

export const Header = memo(() => {
  // const [isMenuOpen, toggleMenu] = useToggle();
  const { isMenuOpen } = useAppSelector(getMenuBurgerStatus);
  const { width = 0 } = useWindowSize();
  const { scrollPos } = useScrollPosition();
  const isMobile = width < 767.98;
  const dispatch = useAppDispatch();

  const handleHome = () => {
    dispatch(setEndPoint("articles"));
  };

  const toggleMenu = () => {
    dispatch(setIsMenuOpen());
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
});
