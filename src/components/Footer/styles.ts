import styled from "styled-components";
import { Color, Indents, Media, Typography } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  width: 100%;
  height: 92px;
  margin: 0 auto;
  border-top: 1px solid ${Color.TEXT_FOOTER};

  ${Media.LG} {
    padding: 0 ${Indents.XS};
  }

  ${Media.MD} {
    padding: 0 ${Indents.XXS};
  }

  ${Media.SM} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Text = styled.p`
  ${Typography.BODY_TWO}

  color: ${Color.TEXT_FOOTER};
`;

export { StyledFooter, Text };
