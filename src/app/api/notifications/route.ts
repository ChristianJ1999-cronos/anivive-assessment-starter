import { getNotifications } from "@/lib/notifications";
import { NextResponse } from "next/server";

// GET /api/notifications — returns all notifications for the current user.
// Note: There is currently no endpoint for updating notification state.
export async function GET() {
  const notifications = await getNotifications();
  return NextResponse.json(notifications);
}
