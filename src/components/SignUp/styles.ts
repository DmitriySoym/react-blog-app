import styled from "styled-components";
import { Typography, Indents, Color, Media } from "ui";

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  padding-top: ${Indents.LG};
  margin: 0 auto;

  ${Media.LG} {
    padding: 0 ${Indents.SM};
  }

  ${Media.MD} {
    padding: 0 ${Indents.XXS};
  }
`;

const HomeButton = styled.button`
  display: contents;
  ${Typography.Subline};
  border: none;
  background: inherit;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }
`;

const Title = styled.h1`
  ${Typography.H1}
`;

export { StyledSignUp, HomeButton, Title };
