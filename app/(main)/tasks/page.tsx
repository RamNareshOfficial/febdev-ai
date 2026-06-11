"use client";

import { useTasks } from "@/hooks/use-tasks";

export default function TasksPage() {
  const {
    data: tasks,
    isLoading,
  } = useTasks();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Tasks
        </h1>

        <p className="text-slate-400">
          Manage your tasks
        </p>
      </div>

      {isLoading ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
          Loading tasks...
        </div>
      ) : (
        <div className="space-y-4">
          {tasks?.map((task: any) => (
            <div
              key={task.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {task.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                    {task.priority}
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
                    {task.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}