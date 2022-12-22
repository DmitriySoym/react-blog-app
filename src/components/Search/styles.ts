import { CancelIcon, SearchIcon } from "assets";
import styled from "styled-components";
import { Color, Typography } from "ui";

const Input = styled.input`
  width: 100%;
  height: 96px;
  padding-left: 32px;
  background-color: ${Color.EXTRA_LIGHT};
  ${Typography.BODY_TWO};
  font-weight: 400;
  color: ${Color.TEXT};
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  &::placeholder {
    color: ${Color.TEXT_FOOTER};
  }
`;

const StyledCancelIcon = styled(CancelIcon)`
  & path {
    stroke: ${Color.TEXT_FOOTER};
  }
  cursor: "pointer";
  position: "fixed";
  right: "24%";
`;

const StyledSerch = styled(SearchIcon)`
  & path {
    stroke: ${Color.TEXT};
  }
  cursor: pointer;
`;
export { Input, StyledCancelIcon, StyledSerch };
