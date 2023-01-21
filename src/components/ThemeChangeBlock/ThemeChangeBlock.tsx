import { useState } from "react";
import { Text, Wrapper, SwitchThemeButton, StyledSwitchWrapper, Switch } from "./styles";
import { getTheme, setTheme, useAppDispatch, useAppSelector } from "store";

type Theme = "light" | "dark";

export const ThemeChangeBlock = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  const handleTheme = () => {
    dispatch(setTheme(theme));
    setCurrentTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <Wrapper>
      <Text>{currentTheme === "light" ? "Light theme" : "Dark theme"}</Text>
      <StyledSwitchWrapper>
        <SwitchThemeButton>
          <input type="checkbox" onClick={handleTheme} />
          <Switch></Switch>
        </SwitchThemeButton>
      </StyledSwitchWrapper>
    </Wrapper>
  );
};
