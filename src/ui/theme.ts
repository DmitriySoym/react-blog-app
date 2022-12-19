import { css } from "styled-components";
import { Color } from "./colors";

export const darkTheme = css`
  html[theme="dark"] {
    --background-color: ${Color.SECONDARY};
    --text-color: ${Color.WHITE};
    --header-color: rgba(255, 255, 255, 0.1);
    --footer-text: rgba(255, 255, 255, 0.5);
  }
`;

export const lightTheme = css`
  html[theme="light"] {
    --background-color: ${Color.GRAY};
    --text-color: ${Color.SECONDARY};
    --header-color: ${Color.WHITE};
    --footer-text: ${Color.MEDIUM};
  }
`;
