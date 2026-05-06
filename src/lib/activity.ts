import type { ActivityItem } from "@/types";

const MOCK_ACTIVITY: ActivityItem[] = [
  {
    id: "act-1",
    petName: "Rocky",
    message: "Annual wellness exam completed",
    detail: "All vitals within normal range. Vaccinations up to date.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    type: "appointment",
  },
  {
    id: "act-2",
    petName: "Luna",
    message: "Flea & tick prescription renewed",
    detail: "3-month supply dispensed.",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    type: "prescription",
  },
  {
    id: "act-3",
    petName: "Mango",
    message: "Bloodwork results received",
    detail: "Review recommended — elevated liver enzymes noted.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    type: "result",
  },
  {
    id: "act-4",
    petName: "Biscuit",
    message: "Invoice paid",
    detail: "$145.00 processed via card on file.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: "payment",
  },
  {
    id: "act-5",
    petName: "Rocky",
    message: "Dental cleaning scheduled",
    detail: "Appointment confirmed for next Tuesday at 9:00 AM.",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: "appointment",
  },
];

export async function getActivity(): Promise<ActivityItem[]> {
  // In a real application, this would query the database or call a microservice.
  if (Math.random() < 0.2) {
    throw new Error("Failed to fetch activity feed");
  }
  return MOCK_ACTIVITY;
}
