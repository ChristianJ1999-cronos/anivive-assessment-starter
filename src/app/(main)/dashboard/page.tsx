import { Suspense } from "react";
import ActivityFeed from "@/components/activity-feed";
import styles from "./dashboard.module.scss";

// Opt out of caching so activity data is fresh on each request.
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard-header"]}>
        <h1 className={styles["dashboard-title"]}>Dashboard</h1>
      </div>
      <div className={styles["dashboard-grid"]}>
        <section className={styles["dashboard-section"]}>
          <h2 className={styles["section-title"]}>Recent Activity</h2>
          <Suspense fallback={<p className={styles["loading"]}>Loading activity...</p>}>
            <ActivityFeed />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
