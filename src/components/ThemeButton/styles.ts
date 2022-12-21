import styled from "styled-components";
import { Color, Typography } from "ui";

const Input = styled.input`
  width: 32px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

const Text = styled.p`
  ${Typography.BODY2}
  font-weight: 400;
  color: ${Color.TEXT_FOOTER};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export { Input, Text, Wrapper };
