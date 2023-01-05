import styled from "styled-components";
import { Indents, Typography, Color } from "ui";

const StyledDetailPage = styled.div`
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: ${Indents.XL};
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

export { StyledDetailPage, Button, Navigation, Post };
