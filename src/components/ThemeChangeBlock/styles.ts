import styled from "styled-components";
import { Color, Typography } from "ui";

const Text = styled.p`
  ${Typography.BODY_TWO}
  font-weight: 400;
  color: ${Color.TEXT_FOOTER};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export { Text, Wrapper };
