import { Footer, Header, Main } from "../../components";
import { StyledApp } from "styles";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <StyledApp>
      <Header />
      <Outlet />
      <Footer />
    </StyledApp>
  );
};
