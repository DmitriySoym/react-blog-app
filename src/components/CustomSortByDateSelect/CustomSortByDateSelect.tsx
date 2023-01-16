import { IOptionDateSort, SortByDate } from "types";
import Select from "react-select";
import { customStyles } from "./styles";

export const optionDate: IOptionDateSort[] = [
  { value: SortByDate.DAY, label: "Day" },
  { value: SortByDate.WEEK, label: "Week" },
  { value: SortByDate.MONTH, label: "Month" },
  { value: SortByDate.YEAR, label: "Year" },
];

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
