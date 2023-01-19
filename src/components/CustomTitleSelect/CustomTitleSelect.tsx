import Select from "react-select";
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
