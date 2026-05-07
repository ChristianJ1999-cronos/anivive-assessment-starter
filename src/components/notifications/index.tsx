"use client"

import { 
    markAllAsRead,
    selectIsOpen,
    selectNotifications,
    selectUnreadCount,
    setNotifications, 
    togglePanel
} from "@/redux/features/notifications";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react"
import styles from "./notification.module.scss";
import NotificationItem from "./notification-item";

export default function Notifications(){
    const dispatch = useAppDispatch();
    const notifications = useAppSelector(selectNotifications);
    const unreadCount = useAppSelector(selectUnreadCount);
    const isOpen = useAppSelector(selectIsOpen);

    useEffect( () => {

        async function getNotifications(){
            try{
                const res = await fetch("/api/notifications");
                if(!res.ok){
                    throw new Error("fetch not complete");
                }
                const data = await res.json();
                dispatch(setNotifications(data));
            }catch(error){
                console.error("Could not load notifications", error);
            }
        }

        getNotifications();

    }, [dispatch]);

    useEffect( () => {
        document.title = unreadCount > 0 ? `(${unreadCount}) Anivive` : "Anivive";
    }, [unreadCount])

    return(
        <div className={styles["notification-wrapper"]}>
            <button className={styles["bell-button"]} onClick={() => dispatch(togglePanel())} aria-label="Toggle Notifications" type="button" >
                🔔 {unreadCount > 0 && (
                    <span className={styles["unread-badging"]}>
                        {unreadCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className={styles["panel"]}>
                    <div className={styles["panel-header"]}>
                        <span>Notifications</span>
                        <button type="button" className={styles["mark-all-read"]} onClick={() => dispatch(markAllAsRead())}>
                            Mark all as read
                        </button>
                    </div>

                    {notifications.length === 0 ? (
                        <p className={styles["empty-state"]}>No Notifications</p>
                    ) : (
                        notifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))
                    )}

                </div>
            )}
        </div>
    );
}