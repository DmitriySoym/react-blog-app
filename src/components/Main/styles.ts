import styled from "styled-components";
import { Indents, Typography, Media } from "ui";

const StyledMain = styled.main`
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${Media.LG} {
    padding: 0 ${Indents.XS};
  }

  ${Media.MD} {
    padding: 0 ${Indents.XXS};
  }
`;

const Title = styled.h1`
  ${Typography.H1}
`;

const NavWrapper = styled.div`
  display: flex;
`;

export { StyledMain, Title, NavWrapper };
