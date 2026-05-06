import { getActivity } from "@/lib/activity";
import { NextResponse } from "next/server";

export async function GET() {
  const activity = await getActivity();
  return NextResponse.json(activity);
}
