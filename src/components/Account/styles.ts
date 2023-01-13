import styled from "styled-components";
import { Color, Media, Typography, Indents } from "ui";

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
    display: none;
  }

  /* &:hover {
    box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  } */
`;

const Button = styled.p`
  margin-left: 10px;
  border: none;
  ${Typography.BODY_TWO}
  line-height: 34px;
  color: ${Color.TEXT};
  background-color: inherit;
  &:hover {
    cursor: pointer;
    color: ${Color.PRIMARY_TWO};
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
`;

export { StyledAccount, Button, UserLogo, Name };
