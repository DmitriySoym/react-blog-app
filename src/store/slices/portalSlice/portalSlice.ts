import { createSlice } from "@reduxjs/toolkit";

interface IPortalState {
  isPortalOpen: boolean;
}

const initialState: IPortalState = {
  isPortalOpen: false,
};

const portalSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    setPortalState: (state) => {
      state.isPortalOpen = !state.isPortalOpen;
    },
  },
});

export default portalSlice.reducer;

export const { setPortalState } = portalSlice.actions;
