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
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.email = "";
      state.name = "";
      state.isAuth = false;
    },
  },
});

export default accountSlice.reducer;

export const { setUser, removeUser } = accountSlice.actions;
