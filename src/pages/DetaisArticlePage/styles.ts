import styled from "styled-components";
import { Indents, Typography, Color, Media } from "ui";

const StyledDetailPage = styled.div`
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: ${Indents.XL};
  padding-bottom: ${Indents.XL};

  ${Media.XL} {
    padding-left: ${Indents.SM};
    padding-right: ${Indents.SM};
  }

  ${Media.MD} {
    padding-left: ${Indents.XXS};
    padding-right: ${Indents.XXS};
  }
`;

const Button = styled.button`
  background-color: inherit;
  ${Typography.Subline};
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

export { StyledDetailPage, Button, Navigation, Post, Row };
