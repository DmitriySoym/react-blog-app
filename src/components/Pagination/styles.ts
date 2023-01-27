import styled from "styled-components";
import { Color, Typography, Indents, Media } from "ui";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: ${Indents.XL};
`;

const ButtonPrev = styled.button`
  background-color: ${Color.BACKGROUND};
  ${Typography.BODY};

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:active {
    color: ${Color.PRIMARY};
  }

  &:disabled {
    color: ${Color.DISABLED};
  }

  ${Media.MD} {
    & :nth-child(2) {
      display: none;
    }
  }
`;
const ButtonNext = styled.button`
  background-color: ${Color.BACKGROUND};
  ${Typography.BODY};

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:active {
    color: ${Color.PRIMARY};
  }

  &:disabled {
    color: ${Color.DISABLED};
  }

  ${Media.MD} {
    & :first-child {
      display: none;
    }
  }
`;

const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;
const Page = styled.button`
  ${Typography.Subline};
  background-color: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;
const CurentPage = styled.button<{ disableColor: boolean }>`
  ${Typography.Subline};
  color: ${({ disableColor }) => (disableColor ? Color.DISABLED : Color.TEXT)};
  background-color: inherit;
  font-weight: 600;

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;

const LastPage = styled.button`
  ${Typography.Subline};
  background-color: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:disabled {
    color: ${Color.DISABLED};
  }
`;

const Dots = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: end;
  ${Typography.Subline};
  background-color: inherit;
  font-weight: 600;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;

const FirstPage = styled.button<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  ${Typography.Subline};
  background-color: inherit;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;

export {
  StyledPagination,
  ButtonPrev,
  ButtonNext,
  Pages,
  Page,
  LastPage,
  CurentPage,
  Dots,
  FirstPage,
};
