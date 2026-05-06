import { getActivity } from "@/lib/activity";
import ActivityItem from "./activity-item";
import styles from "./activity-feed.module.scss";

export default async function ActivityFeed() {
  const items = await getActivity();

  if (items.length === 0) {
    return <p className={styles["empty-state"]}>No recent activity.</p>;
  }

  return (
    <ul className={styles["feed-list"]}>
      {items.map((item) => (
        <ActivityItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
