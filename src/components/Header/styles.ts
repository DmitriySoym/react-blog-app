import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 13.5% 73% 13.5%;
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
`;

export { StyledHeader, StyledLogo, LogoLink };
