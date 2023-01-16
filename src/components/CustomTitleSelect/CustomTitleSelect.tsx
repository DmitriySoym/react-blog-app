import Select from "react-select";
import { SortPosts } from "types";
import { customSortStyles } from "./styles";

export interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  onChange: (newValue: ISelectOption | null) => void;
  value: ISelectOption;
}

export const optionSortByTitle: ISelectOption[] = [
  { value: SortPosts.AZ, label: "Title (A-Z)" },
  { value: SortPosts.ZA, label: "Title (Z-A)" },
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
