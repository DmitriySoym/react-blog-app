import { store } from "./store";
import { toggleAuth } from "./slices/account/accountSlice";
import { setTheme } from "./slices/theme/themeSlice";
import { RootState } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { useAppDispatch } from "./hooks/hooks";
import { AppDispatch } from "./store";

export { store, toggleAuth, useAppSelector, useAppDispatch, setTheme };
export type { RootState };
export type { AppDispatch };
