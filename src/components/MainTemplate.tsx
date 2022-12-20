import { Footer, Header, Main } from "./";
import { StyledApp } from "styles";

export const MainTemplate = () => {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Footer />
    </StyledApp>
  );
};
