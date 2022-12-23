import { createSlice } from "@reduxjs/toolkit";

interface IAccountState {
  name: string;
  email: string;
  isAuth: boolean;
}

const initialState: IAccountState = {
  name: "",
  email: "",
  isAuth: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default accountSlice.reducer;

export const { toggleAuth } = accountSlice.actions;
