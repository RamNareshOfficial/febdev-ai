const revenuePath = "M0 196 L90 128 L180 154 L270 78 L360 112 L450 34 L540 88 L630 46";
const tasksPath = "M0 214 L90 146 L180 104 L270 122 L360 58 L450 96 L540 48 L630 74";

export function ProductivityChart() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white">Productivity Overview</h3>
          <p className="text-sm text-slate-500">Revenue and task completion trend</p>
        </div>
        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
          This Month
        </span>
      </div>

      <div className="h-[280px] overflow-hidden rounded-md">
        <svg viewBox="0 0 640 240" className="h-full w-full" role="img" aria-label="Performance trend chart">
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 88, 136, 184, 232].map((y) => (
            <line key={y} x1="0" x2="640" y1={y} y2={y} stroke="rgba(148,163,184,0.12)" />
          ))}
          {["May 1", "May 8", "May 15", "May 22", "May 29"].map((label, index) => (
            <text key={label} x={index * 150 + 6} y="236" fill="#64748b" fontSize="12">
              {label}
            </text>
          ))}
          <path d={`${revenuePath} L630 240 L0 240 Z`} fill="url(#chartFill)" />
          <path d={revenuePath} fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={tasksPath} fill="none" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="mt-4 flex justify-center gap-6 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          Revenue
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500" />
          Tasks Completed
        </span>
      </div>
    </div>
  );
}