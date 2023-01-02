import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, nullStyle, Media } from "./";

export const GlobalStyle = createGlobalStyle`
HTML{
  --first-level: 72px;
  --second-level: 64px;
  --third-level: 48px;
  --fourth-level: 40px;
  --fifth-level : 32px;
  --sixth-level: 24px;

  ${Media.LG}{
    --second-level: 56px;
  }

  ${Media.MD}{
    --first-level: 56px;
    --second-level: 48px;
    --third-level: 36px;
    --fourth-level: 32px;
    --fifth-level : 28px;
}
}
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
