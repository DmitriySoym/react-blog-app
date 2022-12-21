import { useEffect, useState } from "react";
import { Input, Text, Wrapper } from "./styles";

type Theme = "dark" | "light";

export const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <Text>Dark theme</Text>
      <Input
        id="switch"
        type="range"
        min="1"
        max="2"
        onClick={handleTheme}
        onTouchStart={handleTheme}
        defaultValue="1"
      />
    </Wrapper>
  );
};
