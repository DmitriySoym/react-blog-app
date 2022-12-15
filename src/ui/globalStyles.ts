import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, nullStyle } from "./";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inter';
  font-style: normal;
}
${nullStyle}
${lightTheme}
${darkTheme}
`;
