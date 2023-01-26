import styled from "styled-components";
import { Indents, Media, Typography } from "ui";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  padding-bottom: ${Indents.XL};
  padding-top: ${Indents.XL};

  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearcValue = styled.div`
  ${Typography.H3}
`;

const SerchValueWrapper = styled.span`
  font-size: 22px;
`;

export { Wrapper, SearcValue, SerchValueWrapper };
