import { StyledApp } from "styles";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";
import { useEffect } from "react";
import { getTheme, useAppSelector } from "store";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledApp>
      <Header />
      <Outlet />
      <Footer />
    </StyledApp>
  );
};
