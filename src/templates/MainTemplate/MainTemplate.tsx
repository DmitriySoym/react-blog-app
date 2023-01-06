import { StyledApp } from "styles";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";

export const MainTemplate = () => {
  return (
    <StyledApp>
      <Header />
      <Outlet />
      <Footer />
    </StyledApp>
  );
};
