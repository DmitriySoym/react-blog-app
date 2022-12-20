import { Link } from "react-router-dom";
import { StyledMain } from "./styles";
import { ROUT } from "router/routes";

export const Main = () => {
  return (
    <StyledMain>
      <Link to={ROUT.ARTICLES}>Articles</Link>
      <Link to={ROUT.NEWS}>News</Link>
    </StyledMain>
  );
};
