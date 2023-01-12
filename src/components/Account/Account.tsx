import { StyledAccount, Button, UserLogo, Name } from "./styles";
import { LogoOutIcon } from "assets";
import { useAppSelector, getAccountInfo } from "store";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { AccountInfo } from "components/AccountInfo/AccountInfo";
import { useState } from "react";
import { useToggle } from "hooks";

export const Account = () => {
  const { isAuth, name } = useAppSelector(getAccountInfo);
  // const [isOpen = false, setIsOpen] = useToggle();
  const [isOpen, toggleModal] = useState(false);
  const handleModal = () => {
    toggleModal((isOpen) => (isOpen === false ? true : false));
  };

  return (
    <StyledAccount>
      {isAuth ? (
        <>
          <UserLogo onClick={handleModal}>
            {name[0].toUpperCase() + name.split(" ")[1][0].toUpperCase()}
          </UserLogo>
          <Name>{name}</Name>
          <div>{isOpen && <AccountInfo />}</div>
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
