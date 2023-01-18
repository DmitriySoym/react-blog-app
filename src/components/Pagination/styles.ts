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
const FirstPage = styled.button`
  ${Typography.Subline};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;
const SecondPage = styled.button`
  ${Typography.Subline};
  font-weight: 600;

  &:disabled {
    color: ${Color.PRIMARY};
  }
`;

const LastPage = styled.button`
  ${Typography.BODY};
`;

export { StyledPagination, ButtonPrev, ButtonNext, Pages, FirstPage, LastPage, SecondPage };
