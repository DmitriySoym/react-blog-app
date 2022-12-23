import { configureStore } from "@reduxjs/toolkit";
import accountReduser from "./slices/account/accountSlice";
import themeReduser from "./slices/theme/themeSlice";

export const store = configureStore({
  reducer: {
    account: accountReduser,
    theme: themeReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
