import styled from "styled-components";
import { Indents, Typography, Color } from "ui";

const NavWrapper = styled.div`
  display: flex;
  padding-top: ${Indents.SM};
`;

const Tab = styled.a<{ isActive: boolean }>`
  display: block;
  width: 141px;
  height: 48px;
  ${Typography.Subline}
  font-weight: 600;
  text-align: center;
  transition: 0.3s;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${Color.TEXT}` : "1px solid transparent"};
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY};
  }

  &:disabled {
    color: ${Color.LIGHT};
  }
`;

export { NavWrapper, Tab };
