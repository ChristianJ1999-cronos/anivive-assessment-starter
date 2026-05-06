import type { PropsWithChildren } from "react";
import "@/styles/globals.scss";

export default function AppLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
