import { StyledAccount, Button, UserLogo, Name } from "./styles";
import { LogoOutIcon } from "assets";
import { useAppSelector, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { AccountInfo } from "components/AccountInfo/AccountInfo";
import { useEffect, useState } from "react";

export const Account = () => {
  const { isAuth, name } = useAppSelector(getAccountInfo);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((isOpen) => (isOpen === false ? true : false));
  };

  return (
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
  );
};
