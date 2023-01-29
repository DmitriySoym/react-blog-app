import { IOptionDateSort } from "types";
import Select, { SingleValue } from "react-select";
import { customStyles } from "./styles";
import { memo } from "react";

interface IProps {
  options: IOptionDateSort[];
  onChange: (newValue: SingleValue<IOptionDateSort>) => void;
  value: IOptionDateSort;
}

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
