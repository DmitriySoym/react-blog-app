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
  border-radius: 5px;
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  &::placeholder {
    color: ${Color.TEXT_FOOTER};
  }

  &:hover,
  &:focus {
    border: 1px solid ${Color.PRIMARY};
    border-radius: 10px;
    color: ${Color.SECONDARY};
    background-color: ${Color.WHITE};
  }

  &:invalid {
    border: 1px solid ${Color.ERROR};
    border-radius: 5px;
  }
`;

const StyledCancelIcon = styled(CancelIcon)`
  position: fixed;
  right: 15%;
  & path {
    stroke: ${Color.TEXT};
  }
  cursor: pointer;
`;

const StyledSerch = styled(SearchIcon)`
  & path {
    stroke: ${Color.TEXT};
  }
  cursor: pointer;
`;
export { Input, StyledCancelIcon, StyledSerch };
