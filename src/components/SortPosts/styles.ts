import styled from "styled-components";
import { Color, Typography, Indents, Media } from "ui";

const StyledSortPosts = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${Indents.LG} 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 535px;

  ${Media.LG} {
    display: none;
  }
`;

const TimeSort = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & .sortByDateSelect {
    display: none;
    max-width: 328px;
    width: 100%;
    ${Typography.Subline};

    ${Media.LG} {
      display: block;
    }

    ${Media.SM} {
      max-width: 272px;
    }
  }

  & .sortByTitle {
    max-width: 328px;
    width: 100%;
    ${Typography.Subline};

    ${Media.MD} {
      display: block;
    }

    ${Media.SM} {
      max-width: 272px;
    }
  }
`;

const Period = styled.button<{ isActive: boolean }>`
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
export { StyledSortPosts, TimeSort, Period, ButtonWrapper };
