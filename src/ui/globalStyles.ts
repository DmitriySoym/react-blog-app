import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./";

export const GlobalStyle = createGlobalStyle`
html[theme="light"]{
${lightTheme}
}

html[theme="dark"]{
${darkTheme}
}
`;
