import { Link } from "react-router-dom";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      <Link to="/articles">Articles</Link>
      <Link to="/news">News</Link>
    </StyledMain>
  );
};
