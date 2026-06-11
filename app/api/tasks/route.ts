import { NextResponse } from "next/server";

let tasks = [
  {
    id: "1",
    title: "Build SaaS dashboard",
    description: "Create analytics UI",
    priority: "high",
    status: "completed",
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTask = {
    id: crypto.randomUUID(),
    title: body.title,
    description: body.description,
    priority: body.priority,
    status: "todo",
    createdAt: new Date().toISOString(),
  };

  tasks = [newTask, ...tasks];

  return NextResponse.json(newTask);
}