import styled from "styled-components";
import { Color, Typography } from "ui";

const Input = styled.input`
  width: 100%;
  height: 96px;
  padding-left: 32px;
  background-color: ${Color.EXTRA_LIGHT};
  ${Typography.BODY_TWO};
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;

const StyledClose = styled.a`
  position: "fixed";
  right: "24%";
`;

export { Input, StyledClose };
