import styled from "styled-components";
import { Typography, Color } from "ui";
import { motion } from "framer-motion";

const StyledPortalAuth = styled(motion.div)`
  position: fixed;
  top: 97px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 150px;
  border-radius: 20px;
  background-color: ${Color.BACKGROUND};
  box-shadow: 0px 12px 40px 9px rgb(0 0 0 / 10%);
  text-align: center;
  z-index: 10;
  cursor: pointer;
`;

const Text = styled.span`
  ${Typography.BODY_TWO}
  color: ${Color.TEXT};
`;

const Button = styled.button`
  width: 60%;
  padding: 0 5px;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
  ${Typography.BODY_TWO};
  color: ${Color.WHITE};
  font-weight: 400;
`;

const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  background-color: red;
  color: ${Color.WHITE};
  border-radius: 4px;
`;

export { StyledPortalAuth, Text, Button, ButtonClose };
