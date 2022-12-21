import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const SwitchInput = (props: IProps) => {
  return <StyledInput type="range" {...props} />;
};
