import { IButton } from "types";
import { ButtonWrapper, Button } from "./styles";
import { memo } from "react";

interface IProps {
  buttons: IButton[];
  onClick: (id: string) => void;
  isActivebutton: string;
}

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
