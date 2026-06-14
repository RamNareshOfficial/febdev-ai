import {
  CheckCircle2,
  DollarSign,
  FolderKanban,
  Target,
} from "lucide-react";

import { ProductivityChart } from "@/components/dashboard/productivity-chart";

const stats = [
  { title: "Total Projects", value: "24", change: "+12% from last month", icon: FolderKanban, tone: "text-sky-300 bg-sky-400/15" },
  { title: "Tasks Completed", value: "156", change: "+18% from last month", icon: CheckCircle2, tone: "text-emerald-300 bg-emerald-400/15" },
  { title: "Active Leads", value: "89", change: "+8% from last month", icon: Target, tone: "text-amber-300 bg-amber-400/15" },
  { title: "Revenue", value: "$24,560", change: "+22% from last month", icon: DollarSign, tone: "text-teal-300 bg-teal-400/15" },
];

const projects = [
  ["ERP Workflow System", "In Progress", "72%", "Jun 10, 2026"],
  ["Stock Management System", "In Progress", "58%", "Jun 18, 2026"],
  ["YouTube Automation Tools", "Completed", "100%", "May 28, 2026"],
  ["CRM Dashboard", "In Progress", "66%", "Jun 25, 2026"],
];

const activity = [
  "New lead John Doe added",
  "Task UI Design completed",
  "Project ERP System updated",
  "New message from Jane Smith",
];

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-6rem)] space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5 shadow-xl shadow-black/10">
              <div className="flex items-start justify-between">
                <p className="text-sm text-slate-400">{item.title}</p>
                <span className={`grid h-8 w-8 place-items-center rounded-md ${item.tone}`}>
                  <Icon size={16} />
                </span>
              </div>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-xs text-emerald-300">{item.change}</p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_0.9fr]">
        <ProductivityChart />

        <section className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">Tasks by Status</h2>
            <span className="text-xs text-slate-500">Today</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(#22c55e_0_46%,#38bdf8_46%_77%,#f59e0b_77%_100%)]">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-[#0d1828] text-center">
                <span className="text-3xl font-semibold text-white">156</span>
                <span className="-mt-6 text-xs text-slate-500">Total</span>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              {[
                ["Completed", "72 (46%)", "bg-emerald-400"],
                ["In Progress", "48 (31%)", "bg-sky-400"],
                ["Pending", "36 (23%)", "bg-amber-400"],
              ].map(([label, value, dot]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${dot}`} />
                  <span className="min-w-24 text-slate-300">{label}</span>
                  <span className="text-slate-500">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_0.9fr]">
        <section className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-semibold text-white">Recent Projects</h2>
            <a href="/portfolio" className="text-xs text-cyan-300">View all</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-500">
                <tr>
                  <th className="py-3 font-medium">Project</th>
                  <th className="py-3 font-medium">Status</th>
                  <th className="py-3 font-medium">Progress</th>
                  <th className="py-3 font-medium">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map(([name, status, progress, date]) => (
                  <tr key={name}>
                    <td className="py-3 text-slate-200">{name}</td>
                    <td className="py-3">
                      <span className={`rounded px-2 py-1 text-xs ${status === "Completed" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300">{progress}</td>
                    <td className="py-3 text-slate-500">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5">
          <h2 className="font-semibold text-white">Activity Feed</h2>
          <div className="mt-5 space-y-4">
            {activity.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-500/15 text-xs text-blue-300">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-slate-200">{item}</p>
                  <p className="text-xs text-slate-500">{index + 1}h ago</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
