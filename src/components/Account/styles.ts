import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 232px;
  width: 100%;
  padding: 0 32px;
  ${Typography.Subline}
  line-height: 34px;

  ${Media.MD} {
    display: none;
  }
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

const UserLogo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(133.87deg, #4d0ac7 -10.18%, #912ef2 108.59%);
  border-radius: 4px;
  text-align: center;
  color: ${Color.WHITE};
`;

const Name = styled.div`
  padding: 0 10px;
`;

export { StyledAccount, Button, UserLogo, Name };
