import { StyledAccount, Button, UserLogo, Name, Wrapper } from "./styles";
import { LogoOutIcon } from "assets";
import { useAppSelector, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { AccountInfo, Search } from "components";
import { useState } from "react";
import { useInput } from "hooks";

interface MenuProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const Account = ({ isMenuOpen, isMobile, handleClose }: MenuProps) => {
  const currentVariant = isMobile ? (isMenuOpen ? "open" : "closed") : "idle";
  const { isAuth, name } = useAppSelector(getAccountInfo);
  const [isOpen, setIsOpen] = useState(false);
  const search = useInput();

  const handleModal = () => {
    setIsOpen((isOpen) => (isOpen === false ? true : false));
  };

  return (
    <Wrapper animate={currentVariant} variants={menuVariants} initial="idle">
      <Search value={search.value} onChange={search.onChange} />
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
              <Button onClick={handleClose}>Sign In</Button>
            </Link>
          </>
        )}
      </StyledAccount>
    </Wrapper>
  );
};
