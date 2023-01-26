import styled from "styled-components";
import { Typography, Indents, Media } from "ui";

const StyledSortPosts = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${Indents.LG} 0;
`;

const TimeSort = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${Media.MD} {
    flex-direction: column;
    align-items: center;
  }

  & .sortByDateSelect {
    max-width: 328px;
    width: 100%;
    ${Typography.Subline};

    ${Media.LG} {
      display: block;
    }

    ${Media.MD} {
      margin-bottom: ${Indents.SM};
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

const StyledPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  padding-bottom: ${Indents.XL};

  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledSortPosts, TimeSort, StyledPostsList };
