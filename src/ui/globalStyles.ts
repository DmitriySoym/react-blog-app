import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, nullStyle } from "./";

export const GlobalStyle = createGlobalStyle`
${nullStyle}

html[theme="light"]{
${lightTheme}
}

html[theme="dark"]{
${darkTheme}
}
`;
