import { useEffect, useState } from "react";
import { StyledApp } from "styles";

export const App = () => {
  type Theme = "dark" | "light";
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledApp className="App">
      Hello Blog! <br />
      <button onClick={handleTheme}>change theme</button>
    </StyledApp>
  );
};
