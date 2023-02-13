import { IOptionDateSort } from "types";
import Select, { SingleValue } from "react-select";
import { customStyles } from "./styles";
import { memo } from "react";

interface IProps {
  options: IOptionDateSort[];
  onChange: (newValue: SingleValue<IOptionDateSort>) => void;
  value: IOptionDateSort;
}

const now = new Date();
const dayValue = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2);
const weekValue = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
const monthValue = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
const yearValue = new Date(now.getFullYear() - 1, now.getMonth() - 1, now.getDate());

export const optionDate: IOptionDateSort[] = [
  { value: dayValue, label: "Day", index: 0 },
  { value: weekValue, label: "Week", index: 1 },
  { value: monthValue, label: "Month", index: 2 },
  { value: yearValue, label: "Year", index: 3 },
];

export const CustomSortByDateSelect = memo((props: IProps) => {
  return (
    <Select
      {...props}
      styles={customStyles}
      isMulti={false}
      isSearchable={false}
      className="sortByDateSelect"
    />
  );
});
