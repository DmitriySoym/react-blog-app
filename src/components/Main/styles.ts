import styled from "styled-components";
import { Typography } from "ui";

const StyledMain = styled.main`
  flex: 1 1 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${Typography.H1}
`;

const NavWrapper = styled.div`
  display: flex;
`;

export { StyledMain, Title, NavWrapper };
