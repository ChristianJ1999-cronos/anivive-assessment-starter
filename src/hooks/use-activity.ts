"use client";

import { useEffect, useState } from "react";
import type { ActivityItem } from "@/types";

export function useActivity() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/activity")
      .then((res) => res.json())
      .then((data: ActivityItem[]) => {
        setActivities(data);
        setLoading(false);
      });
  }, []);

  // Items from the last 24 hours
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  const recent = activities.filter(
    (a) => new Date(a.timestamp).getTime() > cutoff,
  );

  return {
    activities,
    recent,
    loading,
  };
}
