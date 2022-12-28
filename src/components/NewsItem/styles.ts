import styled from "styled-components";
import { Typography, Color } from "ui";

const StyledNewsItem = styled.li<{ bg: string }>`
  justify-self: center;
  width: 352px;
  height: 388px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${Color.HEADER_BACKGROUND};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  }

  &:hover div:first-of-type {
    background-image: url(${(props) => props.bg});
  }
`;

const Image = styled.div<{ bg: string }>`
  display: block;
  width: 100%;
  height: 208px;
  background-blend-mode: multiply;
  background-image: linear-gradient(
      133.87deg,
      rgba(77, 10, 199, 0.6) -10.18%,
      rgba(145, 46, 242, 0.6) 108.59%
    ),
    url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledDate = styled.span`
  ${Typography.BODY_TWO};
  color: ${Color.TEXT_FOOTER};
`;

const Summary = styled.p`
  ${Typography.H3}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export { Image, StyledDate, Summary, StyledNewsItem, TextWrapper };
