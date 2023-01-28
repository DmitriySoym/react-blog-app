import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Indents, Media, Typography } from "ui";

const StyledSwiper = styled(Swiper)`
  ${Media.XL} {
    padding: 20px 0;
  }

  ${Media.MD} {
    padding: 10px 0;
  }
`;

const NoResultMessage = styled.h2`
  ${Typography.H3}
  padding-bottom:${Indents.SM}
`;

export { StyledSwiper, NoResultMessage };
