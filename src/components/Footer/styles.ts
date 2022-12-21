import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  width: 100%;
  height: 92px;
  margin: 0 auto;
  border-top: 1px solid ${Color.TEXT_FOOTER};
`;

const Text = styled.p`
  ${Typography.BODY2}
  font-weight: 400;
  color: ${Color.TEXT_FOOTER};
`;

export { StyledFooter, Text };
