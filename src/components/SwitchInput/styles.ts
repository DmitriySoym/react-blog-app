import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input`
  width: 32px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;

  [type="range"]:focus {
    outline: none;
  }

  &[type="range"] {
    -webkit-appearance: none !important;
    background-color: ${Color.SLIDER_BG};
    border: 2px solid;
    border-radius: 10px;
    border-color: transparent;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${Color.WHITE};
    border: none;
  }

  &[type="range"]::-moz-range-thumb {
    -webkit-appearance: none !important;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${Color.WHITE};
    border: none;
  }
`;

export { StyledInput };
