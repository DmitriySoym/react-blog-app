import styled from "styled-components";
import { Typography, Color } from "ui";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    133.87deg,
    rgba(77, 10, 199, 0.4) -10.18%,
    rgba(145, 46, 242, 0.4) 108.59%
  );
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

const StyledArticle = styled.li`
  justify-self: center;
  max-width: 352px;
  width: 100%;
  height: 388px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${Color.HEADER_BACKGROUND};
  box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  & a {
    position: relative;
  }

  &:hover ${Overlay} {
    opacity: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 208px;
  object-fit: cover;
  ${Typography.Subline};
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

export {
  Image,
  StyledDate,
  Summary,
  StyledArticle,
  TextWrapper,
  TextInfo,
  ButtonFavorite,
  Overlay,
};
