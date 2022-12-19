import { css } from "styled-components";
import { Color, Media, FontSize } from "./";

const H1 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: ${FontSize.LARGER};
  line-height: 80px;
  color: ${Color.TEXT};

  ${Media.SM} {
    font-size: ${FontSize.LARGE};
    line-height: 48px;
  }
`;

const H2 = css`
  font-weight: 700;
  font-size: ${FontSize.LARGE};
  line-height: 44px;
  color: ${Color.TEXT};

  ${Media.SM} {
    font-size: ${FontSize.MEDIUM};
    line-height: 36px;
  }
`;

const H3 = css`
  font-weight: 600;
  font-size: ${FontSize.SMALL};
  line-height: 28px;
  color: ${Color.TEXT};
`;

const Subline = css`
  font-weight: 600;
  font-size: ${FontSize.SMALLER};
  line-height: 24px;
  color: ${Color.TEXT};
`;

const BODY = css`
  font-weight: 400;
  font-size: ${FontSize.SMALL};
  line-height: 32px;
  color: ${Color.TEXT};

  ${Media.SM} {
    font-size: ${FontSize.SMALLER};
    line-height: 24px;
  }
`;

const BODY2 = css`
  font-weight: 600;
  font-size: ${FontSize.SMALLER};
  line-height: 24px;
  color: ${Color.TEXT};
`;

export const Typography = { H1, H2, H3, Subline, BODY, BODY2 };
