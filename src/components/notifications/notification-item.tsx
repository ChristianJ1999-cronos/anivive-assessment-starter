"use client"

import { markAsRead } from "@/redux/features/notifications";
import { useAppDispatch } from "@/redux/hooks";
import type { Notification } from "@/types";
import styles from "./notification.module.scss";

type Props = {
    notification: Notification;
};

export default function NotificationItem({ notification }: Props){
    const dispatch = useAppDispatch();

    return(
        <div className={`${styles["notification-item"]} ${!notification.read ? styles["notification-item--unread"] : ""}`} onClick={() => dispatch(markAsRead(notification.id))} >
            <div className={styles["notification-item-header"]} >
                <span className={`${styles["notification-type"]} ${styles[`notification-type--${notification.type}`]}`} />
                <strong>{notification.title}</strong>
            </div>

            <p className={styles["notification-message"]}>
                {notification.message}
            </p>
        </div>
    )
}