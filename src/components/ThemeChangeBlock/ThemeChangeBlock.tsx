import { useState } from "react";
import { Text, Wrapper } from "./styles";
import { SwitchInput } from "components";
import { useInput } from "hooks";
import { getTheme, setTheme, useAppDispatch, useAppSelector } from "store";

type InputValue = "1" | "2";

export const ThemeChangeBlock = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(setTheme(theme));
    setCurrentValue((currentValue) => (currentValue === "1" ? "2" : "1"));
  };

  const themeValue = useInput();
  const [currentValue, setCurrentValue] = useState<InputValue>("1");

  return (
    <Wrapper>
      <Text>{currentValue === "1" ? "Light theme" : "Dark theme"}</Text>
      <SwitchInput
        onClick={handleTheme}
        onTouchStart={handleTheme}
        value={currentValue}
        onChange={themeValue.onChange}
      />
    </Wrapper>
  );
};
