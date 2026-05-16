"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 10 },
  { day: "Sun", tasks: 8 },
];

export function ProductivityChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Productivity Overview
        </h3>

        <p className="text-sm text-slate-400">
          Weekly completed tasks
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tasks"
              stroke="#6366F1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}