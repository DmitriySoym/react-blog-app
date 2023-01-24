import styled from "styled-components";
import { Indents } from "ui";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: ${Indents.XL};
`;

const Picture = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export { Picture, Wrapper };
