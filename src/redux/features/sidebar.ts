import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type SidebarState = {
  collapsed: boolean;
};

const initialState: SidebarState = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarCollapsed = (state: RootState) => state.sidebar.collapsed;

export default sidebarSlice.reducer;
