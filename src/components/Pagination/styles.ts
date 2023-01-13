import styled from "styled-components";
import { Color, Typography, Indents } from "ui";

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
`;

const Pages = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;
const FirstPage = styled.li`
  ${Typography.BODY};
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY_TWO};
  }

  &:active,
  &:focus {
    color: ${Color.PRIMARY};
  }
`;
const SecondPage = styled.li`
  ${Typography.BODY};
`;

const LastPage = styled.li`
  ${Typography.BODY};
`;

export { StyledPagination, ButtonPrev, ButtonNext, Pages, FirstPage, LastPage, SecondPage };
