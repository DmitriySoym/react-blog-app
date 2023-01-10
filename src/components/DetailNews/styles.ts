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
  object-position: 50%;
`;

const Text = styled.p`
  padding-top: ${Indents.MD};
  ${Typography.BODY};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const OriginNews = styled.a`
  height: 56px;
  padding: 10px;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
  ${Typography.H3};
  color: ${Color.WHITE};
  font-weight: 400;
  line-height: 24px;
`;

export { Title, Image, Text, Wrapper, OriginNews };
