import { StyledTitle } from "./styles";
import { memo } from "react";

interface ITitle {
  value: string;
}

export const Title = memo(({ value }: ITitle) => {
  return <StyledTitle>{value}</StyledTitle>;
});
