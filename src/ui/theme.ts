import { css } from "styled-components";

export const darkTheme = css`
  html[theme="dark"] {
    --background-color: #313037;
    --text-color: #ffffff;
  }
`;

export const lightTheme = css`
  html[theme="light"] {
    --background-color: #f3f3f3;
    --text-color: #313037;
  }
`;
