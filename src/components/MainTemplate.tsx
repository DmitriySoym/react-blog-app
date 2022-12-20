import { Footer, Header, Main } from "./";
import { StyledApp } from "styles";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </StyledApp>
  );
};
