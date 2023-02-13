import { IButton } from "types";
import { ButtonWrapper, Button } from "./styles";
import { memo } from "react";

interface IProps {
  buttons: IButton[];
  onClick: (id: number) => void;
  isActivebutton: number;
}

export const buttons: IButton[] = [
  { id: 0, title: "Day" },
  { id: 1, title: "Week" },
  { id: 2, title: "Month" },
  { id: 3, title: "Year" },
];

export const SortButtons = memo(({ buttons, onClick, isActivebutton }: IProps) => {
  return (
    <ButtonWrapper>
      {buttons &&
        buttons.map((button) => (
          <Button
            isActive={isActivebutton === button.id}
            key={button.id}
            onClick={() => onClick(button.id)}
          >
            {button.title}
          </Button>
        ))}
    </ButtonWrapper>
  );
});
