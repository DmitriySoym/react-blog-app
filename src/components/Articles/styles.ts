import styled from "styled-components";
import { Media } from "ui";

const StyledArticles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;

  ${Media.LG} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledArticles };
