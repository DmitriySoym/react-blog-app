import styled from "styled-components";
import { motion } from "framer-motion";
import { Color } from "ui";

const Burger = styled(motion.span)`
  position: relative;
  display: block;
  width: 18px;
  height: 3px;
  background-color: ${Color.TEXT};

  &::before {
    content: "";
    position: absolute;
    position: absolute;
    top: 6px;
    width: 18px;
    height: 3px;
    background-color: ${Color.TEXT};
  }

  &::after {
    content: "";
    position: absolute;
    position: absolute;
    top: -6px;
    width: 18px;
    height: 3px;
    background-color: ${Color.TEXT};
  }
`;

export { Burger };

// .burgermenu_toggle::after {
//   transform: rotate(-45deg);
//   transform-origin: left bottom;

// .burgermenu_toggle::before {
//   transform: rotate(45deg);
//   transform-origin: left top;
