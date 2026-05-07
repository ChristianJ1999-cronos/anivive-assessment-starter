import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Notification } from "@/types";

type NotificationsState = {
    items: Notification[];
    isOpen: boolean;
};

const initialState: NotificationsState = {
    items: [],
    isOpen: false,
};

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotifications(state, action: PayloadAction<Notification[]>){
            state.items = action.payload;
        },
        markAsRead(state, action: PayloadAction<string>) {
            const notification = state.items.find( (item) => item.id === action.payload);
            if(notification){
                notification.read = true;
            }
        },
        markAllAsRead(state) {
            state.items.forEach( (notification) => {
                notification.read = true;
            });
        },
        togglePanel(state){
            state.isOpen = !state.isOpen;
        },
    },
});

export const { setNotifications, markAsRead, markAllAsRead, togglePanel } = notificationSlice.actions;
export const selectNotifications = (state: RootState) => state.notifications.items;
export const selectUnreadCount = (state: RootState) => state.notifications.items.filter( (notification) => !notification.read).length;
export const selectIsOpen = (state: RootState) => state.notifications.isOpen;
export default notificationSlice.reducer;