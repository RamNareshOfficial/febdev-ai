import { NextResponse } from "next/server";

const tasks = [
  {
    id: "1",
    title: "Build dashboard",
    status: "completed",
    priority: "high",
  },
];

export async function GET() {
  return NextResponse.json(tasks);
}