import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Media } from "ui";

const StyledSwiper = styled(Swiper)`
  ${Media.XL} {
    padding: 20px 0;
  }

  ${Media.MD} {
    padding: 10px 0;
  }
`;

export { StyledSwiper };
