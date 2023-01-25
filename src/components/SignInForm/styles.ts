import styled from "styled-components";
import { Indents, Typography, Media, Color } from "ui";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${Indents.SM};
  max-width: 624px;
  width: 100%;
  margin: 0 auto;
  background-color: ${Color.HEADER_BACKGROUND};

  ${Media.MD} {
    padding: ${Indents.XXS};
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: ${Indents.SM};
  ${Typography.BODY_TWO};
  font-weight: 600;
`;

const Input = styled.input`
  height: 56px;
  padding: 18px 20px;
  margin-top: 8px;
  border: 1px solid ${Color.EXTRA_LIGHT};
  border-radius: 4px;
  background: ${Color.HEADER_BACKGROUND};
  color: ${Color.TEXT_FOOTER};
  font-size: 16px;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:focus::-moz-placeholder {
    color: transparent;
  }

  &:focus:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:focus:-ms-input-placeholder {
    color: transparent;
  }
`;

const Button = styled.button`
  height: 56px;
  background-color: ${Color.PRIMARY};
  ${Typography.H3};
  color: ${Color.WHITE};
  line-height: 24px;
`;

const Error = styled.span`
  font-size: 16px;
  text-align: center;
  color: red;
`;

const Text = styled.span`
  padding-top: ${Indents.XXS};
  ${Typography.BODY_TWO};
  font-weight: 500;
  text-align: center;
  color: ${Color.TEXT_FOOTER};

  & a {
    color: ${Color.PRIMARY};
  }

  & a:hover {
    color: ${Color.PRIMARY_TWO};
  }
`;

const ResetPass = styled.span`
  display: block;
  padding-top: 15px;
  ${Typography.BODY_TWO};
  font-weight: 500;
  padding-top: 16px;
  cursor: pointer;

  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export { StyledForm, Label, Input, Button, Error, Text, ResetPass };
