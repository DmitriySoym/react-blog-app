import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isAuth: false,
};

const accountSlise = createSlice({
  name: "account",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default accountSlise.reducer;

export const { toggleAuth } = accountSlise.actions;
