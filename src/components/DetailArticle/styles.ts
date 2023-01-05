import styled from "styled-components";
import { Typography, Indents } from "ui";

const Title = styled.h1`
  ${Typography.H1};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 550px;
  padding-top: ${Indents.MD};
  object-fit: contain;
`;

const Text = styled.p`
  padding-top: ${Indents.MD};
  ${Typography.BODY};
`;

export { Title, Image, Text };
