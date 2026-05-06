import type { Notification } from "@/types";

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-1",
    title: "Lab results ready",
    message: "Mango's bloodwork results are available. Review recommended.",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    read: false,
    type: "warning",
  },
  {
    id: "notif-2",
    title: "Appointment reminder",
    message: "Rocky's dental cleaning is tomorrow at 9:00 AM.",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    read: false,
    type: "info",
  },
  {
    id: "notif-3",
    title: "Payment processed",
    message: "Your invoice of $145.00 has been successfully processed.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    read: false,
    type: "success",
  },
];

export async function getNotifications(): Promise<Notification[]> {
  // In a real application, this would query the database or call a microservice.
  return MOCK_NOTIFICATIONS;
}
