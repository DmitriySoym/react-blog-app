import { createSlice } from "@reduxjs/toolkit";

interface IPaginationState {
  currentPageValue: number;
}

const initialState: IPaginationState = {
  currentPageValue: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPageValue: (state, { payload }) => {
      state.currentPageValue = payload;
    },
  },
});

export default paginationSlice.reducer;

export const { setCurrentPageValue } = paginationSlice.actions;
