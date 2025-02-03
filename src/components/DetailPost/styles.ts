import styled from "styled-components";
import { Typography, Indents, Color } from "ui";

const Title = styled.h1`
  ${Typography.H1};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 550px;
  padding-top: ${Indents.MD};
  object-fit: cover;
  object-position: 50% 20%;
  ${Typography.Subline};
`;

const Text = styled.p`
  padding-top: ${Indents.MD};
  ${Typography.BODY};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const OriginArticle = styled.a`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 10px;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
  ${Typography.H3};
  color: ${Color.WHITE};
  font-weight: 400;
  line-height: 24px;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${Indents.MD};
  padding-bottom: ${Indents.MD};
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
    width: 28px;
    height: 28px;
  }
`;

export { Title, Image, Text, OriginArticle, Wrapper, ButtonFavorite, ButtonsRow };
