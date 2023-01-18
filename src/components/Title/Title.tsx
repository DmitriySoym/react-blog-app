import { StyledTitle } from "./styles";

interface ITitle {
  value: string;
}

export const Title = ({ value }: ITitle) => {
  return <StyledTitle>{value}</StyledTitle>;
};
