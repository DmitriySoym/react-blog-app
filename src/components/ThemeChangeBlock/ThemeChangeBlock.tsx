import { useEffect, useState } from "react";
import { Text, Wrapper } from "./styles";
import { SwitchInput } from "components";
import { useInput } from "hooks";

type Theme = "dark" | "light";
type InputValue = "1" | "2";

export const ThemeChangeBlock = () => {
  const themeValue = useInput();
  const [currentValue, setCurrentValue] = useState<InputValue>("1");
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    setCurrentValue((currentValue) => (currentValue === "1" ? "2" : "1"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <Text>Dark theme</Text>
      <SwitchInput
        onClick={handleTheme}
        onTouchStart={handleTheme}
        value={currentValue}
        onChange={themeValue.onChange}
      />
    </Wrapper>
  );
};
