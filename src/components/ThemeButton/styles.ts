import styled from "styled-components";
import { Color, Typography } from "ui";

const Input = styled.input`
  width: 32px;
  height: 20px;
`;

const Text = styled.label`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  ${Typography.BODY2}
  font-weight: 400;
`;

export { Input, Text, Wrapper };
