import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  onClick: () => void;
}

export const SwitchInput = ({ value, onChange }: IProps) => {
  return <StyledInput type="range" value={value} onChange={onChange} />;
};
