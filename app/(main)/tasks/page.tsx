import { AddTaskDialog } from "@/components/tasks/add-task-dialog";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Tasks
          </h1>

          <p className="text-slate-400">
            Manage your tasks here
          </p>
        </div>

        <AddTaskDialog />
      </div>
    </div>
  );
}