"use client";

import Link from "next/link";
import cn from "classnames";
import { useAppSelector } from "@/redux/hooks";
import { selectSidebarCollapsed } from "@/redux/features/sidebar";
import styles from "./sidebar.module.scss";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/patients", label: "Patients" },
  { href: "/orders", label: "Orders" },
  { href: "/settings", label: "Settings" },
] as const;

export default function Sidebar() {
  const collapsed = useAppSelector(selectSidebarCollapsed);

  return (
    <aside
      aria-label="Main navigation"
      className={cn(styles["sidebar"], {
        [styles["sidebar--collapsed"]]: collapsed,
      })}
    >
      <nav className={styles["sidebar-nav"]}>
        {NAV_ITEMS.map(({ href, label }) => (
          <Link key={href} className={styles["nav-link"]} href={href}>
            <span className={styles["nav-label"]}>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
