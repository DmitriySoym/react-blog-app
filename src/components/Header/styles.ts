import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  justify-items: end;
  align-items: center;
  padding: 0 30px;
  height: 96px;
`;

const StyledLogo = styled.a`
  justify-self: flex-start;
  width: 167px;
  height: 56px;
  cursor: pointer;
`;

export { StyledHeader, StyledLogo };
