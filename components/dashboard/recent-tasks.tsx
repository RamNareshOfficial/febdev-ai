const tasks = [
  {
    title: "Design dashboard UI",
    status: "Completed",
    priority: "High",
  },
  {
    title: "Setup MongoDB",
    status: "In Progress",
    priority: "Medium",
  },
  {
    title: "Implement authentication",
    status: "Pending",
    priority: "High",
  },
];

export function RecentTasks() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Recent Tasks
        </h3>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
          >
            <div>
              <h4 className="font-medium text-white">
                {task.title}
              </h4>

              <p className="text-sm text-slate-400">
                {task.priority} Priority
              </p>
            </div>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}