import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 200px auto 200px;
  justify-items: end;
  align-items: center;
  padding: 0 30px;
  height: 96px;
  background-color: ${Color.HEADER_BACKGROUND};
`;

const StyledLogo = styled.div`
  justify-self: flex-start;
`;
const LogoLink = styled(Link)`
  display: grid;
  justify-self: flex-start;
`;

export { StyledHeader, StyledLogo, LogoLink };
