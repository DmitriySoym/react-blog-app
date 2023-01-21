import { createSlice } from "@reduxjs/toolkit";

const authCheck = () => {
  if (!localStorage.getItem("account")) {
    localStorage.setItem("account", JSON.stringify({}));
  }
  return JSON.parse(localStorage.getItem("account") as string);
};

export const authStatus = authCheck();
interface IAccountState {
  name: string;
  email: string;
  isAuth: boolean;
}

const initialState: IAccountState = {
  name: authStatus.name,
  email: authStatus.email,
  isAuth: authStatus.isAuth,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
      localStorage.setItem("account", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.email = "";
      state.name = "";
      state.isAuth = false;
      localStorage.setItem("account", JSON.stringify(state));
    },
  },
});

export default accountSlice.reducer;

export const { setUser, removeUser } = accountSlice.actions;
