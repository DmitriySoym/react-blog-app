import { css } from "styled-components";
import { Color } from "./colors";

export const lightTheme = css`
  html[theme="light"] {
    --background-color: ${Color.GRAY};
    --text-color: ${Color.SECONDARY};
    --header-color: ${Color.WHITE};
    --footer-text: ${Color.MEDIUM};
    --slider-bg: ${Color.EXTRA_LIGHT};
    --switch-hover: ${Color.MEDIUM};
    --sort-button: ${Color.EXTRA_LIGHT};
    --disabled: ${Color.LIGHT};
  }
`;

export const darkTheme = css`
  html[theme="dark"] {
    --background-color: ${Color.SECONDARY};
    --text-color: ${Color.WHITE};
    --header-color: rgba(255, 255, 255, 0.1);
    --footer-text: ${Color.GRAY_DARK};
    --slider-bg: ${Color.PRIMARY};
    --switch-hover: ${Color.PRIMARY_TWO};
    --sort-button: rgba(255, 255, 255, 0.1);
    --disabled: rgba(255, 255, 255, 0.3);
  }
`;
