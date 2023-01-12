import styled from "styled-components";
import { Media, Indents } from "ui";

const StyledArticles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  /* padding-top: ${Indents.LG}; */
  padding-bottom: ${Indents.XL};

  ${Media.LG} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledArticles };
