import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 232px;
  width: 100%;
  padding: 0 32px;
  ${Typography.Subline}
  line-height: 34px;

  ${Media.MD} {
    display: none;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  border: none;
  ${Typography.BODY_TWO}
  line-height: 34px;
  color: ${Color.TEXT};
  background-color: inherit;
  &:hover {
    cursor: pointer;
    color: ${Color.PRIMARY_TWO};
  }
`;

export { StyledAccount, Button };
