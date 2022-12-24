import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, nullStyle } from "./";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inter';
  font-style: normal;
}
#root{
  height: 100%;
}
${nullStyle}
${lightTheme}
${darkTheme}
`;
