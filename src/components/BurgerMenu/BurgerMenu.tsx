import { Burger } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface BurgerMenuProps {
  isMobile: boolean;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <Burger onClick={toggleMenu}>{isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Burger>
  );
};
