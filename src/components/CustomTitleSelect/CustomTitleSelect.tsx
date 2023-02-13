import Select, { SingleValue } from "react-select";
import { customSortStyles } from "./styles";

export interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  onChange: (newValue: SingleValue<ISelectOption>) => void;
  value: ISelectOption;
}

export const optionSortByTitle: ISelectOption[] = [
  { value: "", label: "Set article sorting" },
  { value: "title", label: "Title (A-Z)" },
  { value: "title:DESC", label: "Title (Z-A)" },
];

export const CustomTitleSelect = (props: IProps) => {
  return (
    <Select
      {...props}
      styles={customSortStyles}
      isMulti={false}
      isSearchable={false}
      className="sortByTitle"
    />
  );
};
