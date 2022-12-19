import { css } from "styled-components";
import { Color } from "./colors";

export const darkTheme = css`
  html[theme="dark"] {
    --background-color: #313037;
    --text-color: #ffffff;
    --button-background: ${Color.PRIMARY};
  }
`;

export const lightTheme = css`
  html[theme="light"] {
    --background-color: #f3f3f3;
    --text-color: #313037;
    --button-background: ${Color.MEDIUM};
  }
`;
