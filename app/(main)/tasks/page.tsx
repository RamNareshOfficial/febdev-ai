"use client";

import { FormEvent, useMemo, useState } from "react";
import { Filter, Plus, Search } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTasks } from "@/hooks/use-tasks";
import { createTask } from "@/services/task-service";

type Task = {
  id: string;
  title: string;
  description?: string;
  project?: string;
  priority: "high" | "medium" | "low" | string;
  status: "todo" | "in-progress" | "review" | "completed" | string;
  dueDate?: string;
  assignee?: string;
};

const seedTasks: Task[] = [
  { id: "seed-1", title: "Setup project repository", project: "ERP Workflow System", priority: "high", status: "completed", dueDate: "May 20, 2026", assignee: "RN" },
  { id: "seed-2", title: "Design database schema", project: "ERP Workflow System", priority: "high", status: "in-progress", dueDate: "May 22, 2026", assignee: "JS" },
  { id: "seed-3", title: "Build authentication API", project: "Stock Management System", priority: "medium", status: "in-progress", dueDate: "May 24, 2026", assignee: "RB" },
  { id: "seed-4", title: "Create dashboard UI", project: "YouTube Automation Tools", priority: "medium", status: "review", dueDate: "May 25, 2026", assignee: "ED" },
  { id: "seed-5", title: "Integrate payment gateway", project: "ERP Workflow System", priority: "high", status: "todo", dueDate: "May 28, 2026", assignee: "MW" },
  { id: "seed-6", title: "Write unit tests", project: "Stock Management System", priority: "low", status: "todo", dueDate: "May 30, 2026", assignee: "SJ" },
  { id: "seed-7", title: "Deploy to production", project: "CRM Dashboard", priority: "high", status: "todo", dueDate: "Jun 02, 2026", assignee: "DL" },
];

const filters = ["All", "To Do", "In Progress", "Review", "Done"];

export default function TasksPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();
  const { data: apiTasks = [], isLoading } = useTasks();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const tasks = useMemo(() => {
    const normalizedApiTasks = (apiTasks as Task[]).map((task) => ({
      ...task,
      project: task.project || "Internal Workspace",
      dueDate: task.dueDate || "Jun 12, 2026",
      assignee: task.assignee || "RN",
    }));

    return [...normalizedApiTasks, ...seedTasks];
  }, [apiTasks]);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = [task.title, task.project, task.status].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "To Do" && task.status === "todo") ||
      (filter === "In Progress" && task.status === "in-progress") ||
      (filter === "Review" && task.status === "review") ||
      (filter === "Done" && task.status === "completed");

    return matchesSearch && matchesFilter;
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as {
      title: string;
      description: string;
      priority: "high" | "medium" | "low";
    };

    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setShowForm(false);
      },
    });
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Tasks</h1>
          <p className="mt-1 text-sm text-slate-400">Plan, prioritize, and ship project work.</p>
        </div>
        <button onClick={() => setShowForm((value) => !value)} className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500">
          <Plus size={16} />
          New Task
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1828]/90 p-4 lg:grid-cols-[1fr_1fr_160px_auto]">
          <input name="title" required placeholder="Task title" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <input name="description" required placeholder="Description" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <select name="priority" className="h-10 rounded-md border border-white/10 bg-[#111c2d] px-3 text-sm outline-none">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button disabled={mutation.isPending} className="h-10 rounded-md bg-emerald-500 px-4 text-sm font-semibold text-slate-950 disabled:opacity-60">
            {mutation.isPending ? "Saving..." : "Add"}
          </button>
        </form>
      )}

      <section className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`h-9 rounded-md px-4 text-sm transition ${filter === item ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <label className="flex h-10 min-w-64 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-500">
              <Search size={15} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tasks..." className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
            </label>
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-300">
              <Filter size={15} />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="border-b border-white/10 text-xs text-slate-500">
              <tr>
                <th className="w-10 py-3"><input type="checkbox" className="rounded border-white/20 bg-transparent" /></th>
                <th className="py-3 font-medium">Task</th>
                <th className="py-3 font-medium">Project</th>
                <th className="py-3 font-medium">Status</th>
                <th className="py-3 font-medium">Priority</th>
                <th className="py-3 font-medium">Due Date</th>
                <th className="py-3 font-medium">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                <tr><td colSpan={7} className="py-10 text-center text-slate-400">Loading tasks...</td></tr>
              ) : (
                filteredTasks.map((task) => (
                  <tr key={task.id} className="transition hover:bg-white/[0.03]">
                    <td className="py-4"><input type="checkbox" className="rounded border-white/20 bg-transparent" /></td>
                    <td className="py-4 font-medium text-slate-100">{task.title}</td>
                    <td className="py-4 text-slate-300">{task.project}</td>
                    <td className="py-4"><StatusPill status={task.status} /></td>
                    <td className="py-4"><PriorityPill priority={task.priority} /></td>
                    <td className="py-4 text-slate-300">{task.dueDate}</td>
                    <td className="py-4">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-slate-200 to-cyan-400 text-[10px] font-bold text-slate-950">{task.assignee}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <span>Showing 1 to {filteredTasks.length} of {tasks.length} tasks</span>
          <div className="flex gap-1">
            {[1, 2].map((page) => (
              <button key={page} className={`grid h-8 w-8 place-items-center rounded-md ${page === 1 ? "bg-white/10 text-white" : "text-slate-500 hover:bg-white/5"}`}>{page}</button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    completed: "bg-emerald-400/15 text-emerald-300",
    "in-progress": "bg-amber-400/15 text-amber-300",
    review: "bg-slate-400/15 text-slate-300",
    todo: "bg-slate-600/30 text-slate-300",
  };

  const labels: Record<string, string> = {
    completed: "Done",
    "in-progress": "In Progress",
    review: "Review",
    todo: "To Do",
  };

  return <span className={`rounded px-2 py-1 text-xs ${styles[status] || styles.todo}`}>{labels[status] || status}</span>;
}

function PriorityPill({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    high: "bg-red-400/15 text-red-300",
    medium: "bg-yellow-400/15 text-yellow-300",
    low: "bg-emerald-400/15 text-emerald-300",
  };

  return <span className={`rounded px-2 py-1 text-xs capitalize ${styles[priority] || styles.medium}`}>{priority}</span>;
}
