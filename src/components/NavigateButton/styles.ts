import styled from "styled-components";
import { Indents, Typography, Color, Media } from "ui";

const Button = styled.button`
  height: 40px;
  width: 100px;
  padding: 5px;
  background: linear-gradient(133.87deg, #4d0ac7 -10.18%, #912ef2 108.59%);
  border-radius: 4px;
  ${Typography.H3};
  color: ${Color.WHITE};
  font-weight: 400;
  line-height: 24px;

  &:hover {
    background-color: ${Color.PRIMARY_TWO};
  }
`;

const Post = styled.span`
  ${Typography.Subline};
  color: ${Color.TEXT_FOOTER};
`;

const Navigation = styled.div`
  padding-bottom: ${Indents.XS};
`;

const Row = styled.ul`
  display: flex;
  column-gap: 33px;

  padding-top: ${Indents.XL};
  border-top: 1px solid ${Color.TEXT_FOOTER};

  ${Media.XL} {
    overflow: hidden;
    & li {
      width: 328px;
      flex-shrink: 0;
    }
  }

  ${Media.MD} {
    & li {
      width: 273px;
    }
  }
`;

export { Button, Navigation, Post, Row };
