import React from "react";
import { StyledSortPosts, TimeSort, Period } from "./styles";

export const SortPosts = () => {
  return (
    <StyledSortPosts>
      <TimeSort>
        <Period>Day</Period>
        <Period>Week</Period>
        <Period>Month</Period>
        <Period>Year</Period>
      </TimeSort>
    </StyledSortPosts>
  );
};
