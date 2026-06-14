import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";
import { Task } from "@/models/task.model";

export async function GET() {
  try {
    await connectDb();
    const tasks = await Task.find().sort({ createdAt: -1 });
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch Tasks." },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    await connectDb();
    const reqData = await req.json();
    const task = await Task.create({
      title: reqData.title,
      description: reqData.description,
      duration: reqData.duration,
      isRepeatable: reqData.isRepeatable,
      priority: reqData.priority,
    });
    return NextResponse.json(task);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add task." },
      { status: 500 }
    )

  }
}