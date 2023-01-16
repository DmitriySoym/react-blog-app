import { Dispatch, SetStateAction, useState } from "react";
import { StyledSortPosts, TimeSort, Period, ButtonWrapper } from "./styles";
import {
  CustomSortByDateSelect,
  optionDate,
  CustomTitleSelect,
  optionSortByTitle,
} from "components";
import { IOptionDateSort, ISelectOption, SortByDate } from "types";

interface IProps {
  period: SortByDate;
  setPeriod: Dispatch<SetStateAction<SortByDate>>;
}

export const SortPosts = ({ setPeriod }: IProps) => {
  const [isActiveDate, setIsActiveDate] = useState<SortByDate>(SortByDate.DAY);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState<IOptionDateSort>(optionDate[0]);
  const [isTitleSort, setIsTitleSort] = useState<ISelectOption>(optionSortByTitle[0]);

  const handleSetActiveDateSelect = (newValue: IOptionDateSort | null) => {
    if (newValue) {
      setIsActiveDateSelect(newValue);
      setIsActiveDate(newValue.value);
    }
  };

  const handleSetTitleSort = (newValue: ISelectOption | null) => {
    if (newValue) {
      setIsTitleSort(newValue);
    }
  };

  const handleDay = () => {
    setPeriod(SortByDate.DAY);
    setIsActiveDate(SortByDate.DAY);
    setIsActiveDateSelect(optionDate[0]);
  };

  const handleWeek = () => {
    setPeriod(SortByDate.WEEK);
    setIsActiveDate(SortByDate.WEEK);
    setIsActiveDateSelect(optionDate[1]);
  };

  const handleMonth = () => {
    setPeriod(SortByDate.MONTH);
    setIsActiveDate(SortByDate.MONTH);
    setIsActiveDateSelect(optionDate[2]);
  };

  const handleYear = () => {
    setPeriod(SortByDate.YEAR);
    setIsActiveDate(SortByDate.YEAR);
    setIsActiveDateSelect(optionDate[3]);
  };

  return (
    <StyledSortPosts>
      <TimeSort>
        <ButtonWrapper>
          <Period isActive={isActiveDate === SortByDate.DAY} onClick={handleDay}>
            Day
          </Period>
          <Period isActive={isActiveDate === SortByDate.WEEK} onClick={handleWeek}>
            Week
          </Period>
          <Period isActive={isActiveDate === SortByDate.MONTH} onClick={handleMonth}>
            Month
          </Period>
          <Period isActive={isActiveDate === SortByDate.YEAR} onClick={handleYear}>
            Year
          </Period>
        </ButtonWrapper>
        <CustomSortByDateSelect
          options={optionDate}
          value={isActiveDateSelect}
          onChange={handleSetActiveDateSelect}
        />
        <CustomTitleSelect
          options={optionSortByTitle}
          value={isTitleSort}
          onChange={handleSetTitleSort}
        />
      </TimeSort>
    </StyledSortPosts>
  );
};
