import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Indents, Media } from "ui";

interface HeightProps {
  menuPosition: boolean;
}

const StyledHeader = styled.header<HeightProps>`
  position: ${({ menuPosition }) => (menuPosition ? "fixed" : "relative")};
  top: 0;
  display: grid;
  grid-template-columns: 200px auto;
  justify-items: end;
  align-items: center;
  padding: 0 ${Indents.XS};
  width: 100%;
  height: 96px;
  background-color: ${({ menuPosition }) =>
    menuPosition ? Color.BACKGROUND : Color.HEADER_BACKGROUND};
  z-index: 10;

  ${Media.XL} {
    padding: 0 ${Indents.XS};
  }

  ${Media.MD} {
    display: flex;
    justify-content: space-between;
    padding: 0 ${Indents.XXS};
  }
`;

const StyledLogo = styled.div`
  justify-self: flex-start;
`;
const LogoLink = styled(Link)`
  display: grid;
  justify-self: flex-start;
`;

export { StyledHeader, StyledLogo, LogoLink };
