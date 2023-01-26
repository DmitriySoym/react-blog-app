import styled from "styled-components";
import { Typography, Color } from "ui";

const StyledArticle = styled.li<{ bg: string }>`
  justify-self: center;
  max-width: 352px;
  width: 100%;
  height: 388px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${Color.HEADER_BACKGROUND};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  }

  &:hover div:nth-child(1) {
    background-image: url(${({ bg }) => bg});
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
    url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledDate = styled.span`
  ${Typography.BODY_TWO};
  color: ${Color.TEXT_FOOTER};
  padding-bottom: 5px;
`;

const ButtonFavorite = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  path {
    fill: red;
  }

  &:disabled {
    transform: none;
    path {
      fill: ${Color.DISABLED};
    }
  }

  & svg {
    width: 24px;
    height: 18px;
  }
`;

const TextInfo = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.p`
  ${Typography.H3}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export { Image, StyledDate, Summary, StyledArticle, TextWrapper, TextInfo, ButtonFavorite };
