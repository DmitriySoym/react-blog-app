import { useEffect, useState } from "react";
import { StyledApp } from "styles";
import { Header } from "components";

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
      <Header />
    </StyledApp>
  );
};
