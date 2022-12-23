import { configureStore } from "@reduxjs/toolkit";
import accountReduser from "./account/accountSlise";

export const store = configureStore({
  reducer: {
    account: accountReduser,
  },
});

export type InitialState = ReturnType<typeof store.getState>;
