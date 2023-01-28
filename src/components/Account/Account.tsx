import { StyledAccount, Button, UserLogo, Name, Wrapper } from "./styles";
import { LogoOutIcon } from "assets";
import { useAppSelector, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { AccountInfo, Search } from "components";
import { useState } from "react";

interface MenuProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.4, x: "-100%" },
};

const start = {};

export const Account = ({ isMenuOpen, isMobile }: MenuProps) => {
  const currentVariant = isMobile ? (isMenuOpen ? "open" : "closed") : start;
  const { isAuth, name } = useAppSelector(getAccountInfo);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((isOpen) => (isOpen === false ? true : false));
  };

  return (
    <Wrapper transition={{ duration: 0.5 }} animate={currentVariant} variants={menuVariants}>
      <Search />
      <StyledAccount onClick={handleModal}>
        {isAuth ? (
          <>
            <UserLogo>{name[0].toUpperCase() + name.split(" ")[1][0].toUpperCase()}</UserLogo>
            <Name>{name}</Name>
            {isOpen && <AccountInfo />}
          </>
        ) : (
          <>
            <LogoOutIcon />{" "}
            <Link to={ROUTE.AUTH}>
              <Button>Sign In</Button>
            </Link>
          </>
        )}
      </StyledAccount>
    </Wrapper>
  );
};
