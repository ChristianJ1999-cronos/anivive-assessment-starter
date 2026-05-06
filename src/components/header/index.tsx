"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectSidebarCollapsed,
  toggleSidebar,
} from "@/redux/features/sidebar";
import styles from "./header.module.scss";

export default function Header() {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector(selectSidebarCollapsed);

  return (
    <header className={styles["header"]}>
      <div className={styles["header-start"]}>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={styles["sidebar-toggle"]}
          type="button"
          onClick={() => dispatch(toggleSidebar())}
        >
          <span className={styles["toggle-bar"]} />
          <span className={styles["toggle-bar"]} />
          <span className={styles["toggle-bar"]} />
        </button>
        <span className={styles["logo"]}>Anivive</span>
      </div>
      <nav aria-label="Header actions" className={styles["header-actions"]}>
        {/* Notifications go here */}
      </nav>
    </header>
  );
}
