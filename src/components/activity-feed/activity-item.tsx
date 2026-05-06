import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { ActivityItem } from "@/types";
import styles from "./activity-feed.module.scss";

dayjs.extend(relativeTime);

type Props = {
  item: ActivityItem;
};

const TYPE_LABELS: Record<ActivityItem["type"], string> = {
  appointment: "Appointment",
  payment: "Payment",
  prescription: "Prescription",
  result: "Lab Result",
};

export default function ActivityItemComponent({ item }: Props) {
  return (
    <li className={styles["feed-item"]}>
      <div className={styles["item-header"]}>
        <span className={`${styles["item-badge"]} ${styles[`item-badge--${item.type}`]}`}>
          {TYPE_LABELS[item.type]}
        </span>
        <span className={styles["item-pet"]}>{item.petName}</span>
        <span className={styles["item-time"]}>{dayjs(item.timestamp).fromNow()}</span>
      </div>
      <p className={styles["item-message"]}>{item.message}</p>
      {item.detail !== undefined && <p className={styles["item-detail"]}>{item.detail}</p>}
    </li>
  );
}
