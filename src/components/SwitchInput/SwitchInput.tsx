import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onTouchStart: () => void;
}

export const SwitchInput = (props: IProps) => {
  return <StyledInput id="switchInput" type="range" min="1" max="2" {...props} />;
};
