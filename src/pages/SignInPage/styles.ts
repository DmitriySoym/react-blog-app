import styled from "styled-components";
import { Typography, Indents, Color, Media } from "ui";

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  padding-top: ${Indents.LG};
  padding-bottom: ${Indents.LG};
  margin: 0 auto;

  ${Media.XL} {
    padding: ${Indents.LG} ${Indents.SM};
  }

  ${Media.MD} {
    padding: ${Indents.LG} ${Indents.XXS};
  }
`;

const HomeButton = styled.button`
  display: block;
  width: fit-content;
  ${Typography.Subline};
  border: none;
  background: inherit;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }
`;

const Title = styled.h1`
  padding-bottom: ${Indents.XL};
  ${Typography.H1}
`;

export { StyledSignIn, HomeButton, Title };
