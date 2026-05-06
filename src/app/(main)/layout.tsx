import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ReduxProvider from "@/redux/provider";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  description: "Veterinary practice management",
  title: "Anivive",
};

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <div className={styles["page-body"]}>
            <Sidebar />
            <main className={styles["main-content"]}>{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
