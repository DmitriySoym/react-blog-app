import styled from "styled-components";
import { Typography, Color } from "ui";

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 352px;
  height: 208px;
`;

const StyledDate = styled.span`
  ${Typography.BODY_TWO};
  color: ${Color.TEXT_FOOTER};
`;

const Summary = styled.p`
  ${Typography.H3}
`;

const StyledArticle = styled.li`
  width: 352px;
  height: 388px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${Color.HEADER_BACKGROUND};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export { Image, StyledDate, Summary, StyledArticle, TextWrapper };
