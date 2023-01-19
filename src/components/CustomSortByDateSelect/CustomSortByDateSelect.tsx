import { IOptionDateSort, ISelectOption, SortByDate } from "types";
import Select from "react-select";
import { customStyles } from "./styles";

interface IProps {
  options: IOptionDateSort[];
  onChange: (newValue: IOptionDateSort | null) => void;
  value: IOptionDateSort;
}

export const CustomSortByDateSelect = (props: IProps) => {
  return (
    <Select
      {...props}
      styles={customStyles}
      isMulti={false}
      isSearchable={false}
      className="sortByDateSelect"
    />
  );
};
