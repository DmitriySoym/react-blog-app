import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Typography, Color } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  display: block;
  width: 141px;
  height: 48px;
  ${Typography.Subline}
  text-align: center;
  border-bottom: ${({ $isActive }) =>
    $isActive ? `1px solid ${Color.TEXT}` : "1px solid transparent"};

  &:hover {
    color: ${Color.PRIMARY};
  }

  &:disabled {
    color: ${Color.LIGHT};
  }
`;

export { StyledNavLink };
