import styled from "styled-components";
import { Typography, Color } from "ui";

const StyledAccountInfo = styled.div`
  position: absolute;
  top: 97px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 100px;
  box-shadow: 0px 12px 40px 9px rgb(0 0 0 / 10%);
  text-align: center;
`;

const Text = styled.span`
  ${Typography.BODY_TWO}
  color: ${Color.TEXT_FOOTER};
`;

const Name = styled.span`
  ${Typography.BODY_TWO}
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
export { StyledAccountInfo, Text, Button, Name };
