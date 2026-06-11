import { TaskFormValues } from "@/schemas/task-schema";

export async function getTasks() {
  const response = await fetch("/api/tasks");

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(
  data: TaskFormValues
) {
  const response = await fetch("/api/tasks", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}