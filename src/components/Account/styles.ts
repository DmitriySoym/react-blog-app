import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, Media, Typography, Indents } from "ui";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  ${Media.MD} {
    position: absolute;
    top: 96px;
    left: 0;
    z-index: 10;
    display: flex;

    justify-content: flex-end;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 30px;
    height: calc(100vh - 100px);
    background-color: ${Color.BACKGROUND};
    transform: translateX(-100%);
  }
`;

const StyledAccount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 232px;
  width: 100%;
  padding-left: ${Indents.SM};
  ${Typography.Subline}
  line-height: 34px;
  cursor: pointer;

  ${Media.MD} {
    flex-direction: column;
    align-items: baseline;
    padding: 0;
  }
`;

const Button = styled.p`
  padding-right: 40px;
  border: none;
  ${Typography.BODY_TWO}
  line-height: 34px;
  color: ${Color.TEXT};
  background-color: inherit;
  &:hover {
    cursor: pointer;
    color: ${Color.PRIMARY_TWO};
  }

  ${Media.MD} {
    margin: 0;
  }
`;

const UserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(133.87deg, #4d0ac7 -10.18%, #912ef2 108.59%);
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  color: ${Color.WHITE};
`;

const Name = styled.p`
  padding: 0 10px;

  ${Media.MD} {
    padding: 10px 0;
  }
`;

export { StyledAccount, Button, UserLogo, Name, Wrapper };
