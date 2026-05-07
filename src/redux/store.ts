import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar";
import notificationsReducer from "./features/notifications";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    notifications: notificationsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
