import { createSlice } from "@reduxjs/toolkit";

interface IMenuBurgerSlice {
  isMenuOpen: boolean;
}

const initialState: IMenuBurgerSlice = {
  isMenuOpen: false,
};

const menuBurgerSlice = createSlice({
  name: "isMenuOpen",
  initialState,
  reducers: {
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default menuBurgerSlice.reducer;

export const { setIsMenuOpen } = menuBurgerSlice.actions;
