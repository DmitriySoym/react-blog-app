import { Burger } from "./styles";
import { useToggle } from "hooks";

interface BurgerMenuProps {
  isMobile: boolean;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const burgerVariants = {
  open: { opacity: 0.5 },
  closed: {},
  idle: {},
};

export const BurgerMenu = ({ toggleMenu, isMobile, isMenuOpen }: BurgerMenuProps) => {
  const currentVariant = isMobile ? (isMenuOpen ? "open" : "closed") : "idle";

  return (
    <Burger
      animate={currentVariant}
      variants={burgerVariants}
      onClick={toggleMenu}
      initial="idle"
    ></Burger>
  );
};
