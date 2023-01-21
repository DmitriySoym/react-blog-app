import styled from "styled-components";
import { Color, Typography } from "ui";

const Text = styled.p`
  ${Typography.BODY_TWO}
  font-weight: 400;
  color: ${Color.TEXT_FOOTER};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
`;
const StyledText = styled.p`
  ${Typography.Subline};
  color: ${Color.TEXT_FOOTER};
`;

const Switch = styled.span`
  width: 55px;
  transform: scale(0.7);
`;

const SwitchThemeButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Color.SLIDER_BG};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${Color.WHITE};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + span {
    background-color: ${Color.PRIMARY};
  }
  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;
export { SwitchThemeButton, StyledSwitchWrapper, StyledText, Text, Wrapper, Switch };
