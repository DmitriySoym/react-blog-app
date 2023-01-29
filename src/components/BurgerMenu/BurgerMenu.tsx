import { Burger } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { memo } from "react";

interface BurgerMenuProps {
  isMobile: boolean;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = memo(({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <Burger onClick={toggleMenu}>{isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Burger>
  );
});
