import {
  CheckCircle2,
  Clock3,
  ListTodo,
  TrendingUp,
} from "lucide-react";

import { StatsCard } from "@/components/dashboard/stats-card";
import { ProductivityChart } from "@/components/dashboard/productivity-chart";
import { RecentTasks } from "@/components/dashboard/recent-tasks";

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Welcome back 👋
        </h2>

        <p className="mt-2 text-slate-400">
          Here’s your productivity overview.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value="128"
          change="+12% this week"
          icon={ListTodo}
        />

        <StatsCard
          title="Completed"
          value="94"
          change="+18% this week"
          icon={CheckCircle2}
        />

        <StatsCard
          title="In Progress"
          value="23"
          change="+4% this week"
          icon={Clock3}
        />

        <StatsCard
          title="Productivity"
          value="86%"
          change="+9% this week"
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductivityChart />
        </div>

        <div>
          <RecentTasks />
        </div>
      </div>
    </div>
  );
}