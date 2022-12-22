import { StyledAccount, Button } from "./styles";
import { LogoOutIcon } from "assets";
import { useToggle } from "hooks";

export const Account = () => {
  const [isLoged, toggleIsLoged] = useToggle();
  return (
    <StyledAccount>
      {!isLoged ? (
        <>
          <LogoOutIcon /> <Button>Sign In</Button>
        </>
      ) : (
        <>
          <div>Sign In Form</div>
        </>
      )}
    </StyledAccount>
  );
};
