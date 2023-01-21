import { IOptionDateSort } from "types";
import Select, { SingleValue } from "react-select";
import { customStyles } from "./styles";

interface IProps {
  options: IOptionDateSort[];
  onChange: (newValue: SingleValue<IOptionDateSort>) => void;
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
