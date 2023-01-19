import { useState } from "react";
import { StyledSortPosts, TimeSort } from "./styles";
import { CustomSortByDateSelect, CustomTitleSelect, SortButtons } from "components";
import { IButton, IOptionDateSort, ISelectOption, SortByDate, SortPost } from "types";
import { useWindowSize } from "hooks";

const buttons: IButton[] = [
  { id: "0", title: "Day" },
  { id: "1", title: "Week" },
  { id: "2", title: "Month" },
  { id: "3", title: "Year" },
];

export const optionDate: IOptionDateSort[] = [
  { value: SortByDate.DAY, label: "Day" },
  { value: SortByDate.WEEK, label: "Week" },
  { value: SortByDate.MONTH, label: "Month" },
  { value: SortByDate.YEAR, label: "Year" },
];

export const optionSortByTitle: ISelectOption[] = [
  { value: SortPost.AZ, label: "Title (A-Z)" },
  { value: SortPost.ZA, label: "Title (Z-A)" },
];

export const SortPosts = () => {
  const { width = 0 } = useWindowSize();
  const [activeButton, setActiveButton] = useState<string>(buttons[0].id);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState(optionDate[0]);
  const [isTitleSort, setIsTitleSort] = useState<ISelectOption>(optionSortByTitle[0]);

  const handleSetActiveDateSelect = (newValue: IOptionDateSort | null) => {
    if (newValue) {
      setIsActiveDateSelect(newValue);
      if (newValue === optionDate[0]) {
        setActiveButton("0");
      } else if (newValue === optionDate[1]) {
        setActiveButton("1");
      } else if (newValue === optionDate[2]) {
        setActiveButton("2");
      } else if (newValue === optionDate[3]) {
        setActiveButton("3");
      }
    }
  };

  const handleSetTitleSort = (newValue: ISelectOption | null) => {
    if (newValue) {
      setIsTitleSort(newValue);
    }
  };

  const handleSetDate = (id: string) => {
    setActiveButton(id);
    setIsActiveDateSelect(optionDate[+id]);
  };

  return (
    <StyledSortPosts>
      <TimeSort>
        {width >= 992.98 && (
          <SortButtons buttons={buttons} onClick={handleSetDate} isActivebutton={activeButton} />
        )}

        {width < 992.98 && (
          <CustomSortByDateSelect
            options={optionDate}
            value={isActiveDateSelect}
            onChange={handleSetActiveDateSelect}
          />
        )}

        <CustomTitleSelect
          options={optionSortByTitle}
          value={isTitleSort}
          onChange={handleSetTitleSort}
        />
      </TimeSort>
    </StyledSortPosts>
  );
};
