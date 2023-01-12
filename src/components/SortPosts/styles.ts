import styled from "styled-components";
import { Color, Typography, Indents } from "ui";

const StyledSortPosts = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${Indents.LG} 0;
`;

const TimeSort = styled.div`
  display: flex;
  justify-content: space-between;
  width: 535px;
`;

const Period = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 56px;
  background: ${Color.SORT_BTN};
  ${Typography.BODY_TWO};
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${Color.PRIMARY};
    color: ${Color.WHITE};
  }

  &:active {
    background-color: ${Color.PRIMARY};
    color: ${Color.WHITE};
  }
`;
export { StyledSortPosts, TimeSort, Period };
