import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
