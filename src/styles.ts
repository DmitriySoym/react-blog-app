import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${Color.BACKGROUND};
  ${Typography.H1};
`;
export { StyledApp };
