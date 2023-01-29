import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";

interface IThemeslice {
  theme: Theme;
}

const initialState: IThemeslice = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
