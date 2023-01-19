import styled from "styled-components";
import { Color, Typography } from "ui";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 535px;
`;

const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 56px;
  ${Typography.BODY_TWO};
  background-color: ${({ isActive }) => (isActive ? `${Color.PRIMARY}` : `${Color.SORT_BTN}`)};
  color: ${({ isActive }) => (isActive ? `${Color.WHITE}` : `${Color.TEXT}`)};
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${Color.PRIMARY_TWO};
    color: ${Color.WHITE};
  }
`;

export { ButtonWrapper, Button };
