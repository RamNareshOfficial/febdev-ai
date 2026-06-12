"use client";

import { FormEvent, useMemo, useState } from "react";
import { Filter, Plus, Search } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  status: "new" | "qualified" | "converted" | "lost";
  source: string;
  date: string;
};

const initialLeads: Lead[] = [
  { id: "1", name: "John Doe", company: "ABC Corp", email: "john@abccorp.com", status: "qualified", source: "Website", date: "May 20, 2026" },
  { id: "2", name: "Jane Smith", company: "XYZ Ltd", email: "jane@xyz.com", status: "new", source: "Referral", date: "May 21, 2026" },
  { id: "3", name: "Robert Brown", company: "Tech Solutions", email: "robert@tech.com", status: "converted", source: "Website", date: "May 22, 2026" },
  { id: "4", name: "Emily Davis", company: "Innovate Inc", email: "emily@innovate.com", status: "qualified", source: "LinkedIn", date: "May 23, 2026" },
  { id: "5", name: "Michael Wilson", company: "NextGen", email: "michael@nextgen.com", status: "new", source: "Cold Email", date: "May 24, 2026" },
  { id: "6", name: "Sarah Johnson", company: "Creative Labs", email: "sarah@creativelabs.com", status: "lost", source: "Website", date: "May 24, 2026" },
  { id: "7", name: "David Lee", company: "Global Systems", email: "david@global.com", status: "converted", source: "Referral", date: "May 25, 2026" },
];

const tabs = ["All", "New", "Qualified", "Converted", "Lost"];

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeads);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesTab = tab === "All" || lead.status === tab.toLowerCase();
      const matchesSearch = [lead.name, lead.company, lead.email, lead.source].join(" ").toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [leads, query, tab]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Omit<Lead, "id" | "date">;
    setLeads((current) => [
      {
        ...data,
        id: crypto.randomUUID(),
        status: data.status,
        date: "Jun 12, 2026",
      },
      ...current,
    ]);
    form.reset();
    setShowForm(false);
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Leads</h1>
          <p className="mt-1 text-sm text-slate-400">Track pipeline quality from first touch to conversion.</p>
        </div>
        <button onClick={() => setShowForm((value) => !value)} className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500">
          <Plus size={16} />
          Add Lead
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total Leads", "89", "+8%"],
          ["New Leads", "23", "+12%"],
          ["Qualified", "34", "+15%"],
          ["Converted", "32", "+10%"],
        ].map(([label, value, change]) => (
          <article key={label} className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-3xl font-semibold text-white">{value}</span>
              <span className="text-sm text-emerald-300">{change}</span>
            </div>
          </article>
        ))}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1828]/90 p-4 lg:grid-cols-[1fr_1fr_1fr_150px_auto]">
          <input name="name" required placeholder="Lead name" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <input name="company" required placeholder="Company" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <input name="email" type="email" required placeholder="Email" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <select name="status" className="h-10 rounded-md border border-white/10 bg-[#111c2d] px-3 text-sm outline-none">
            <option value="new">New</option>
            <option value="qualified">Qualified</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>
          <input name="source" required placeholder="Source" className="h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
          <button className="h-10 rounded-md bg-emerald-500 px-4 text-sm font-semibold text-slate-950 lg:col-start-5">Save</button>
        </form>
      )}

      <section className="rounded-lg border border-white/10 bg-[#0d1828]/90 p-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map((item) => (
              <button key={item} onClick={() => setTab(item)} className={`h-9 rounded-md px-4 text-sm transition ${tab === item ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <label className="flex h-10 min-w-64 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-500">
              <Search size={15} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search leads..." className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
            </label>
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-300">
              <Filter size={15} />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="border-b border-white/10 text-xs text-slate-500">
              <tr>
                <th className="py-3 font-medium">Lead</th>
                <th className="py-3 font-medium">Company</th>
                <th className="py-3 font-medium">Email</th>
                <th className="py-3 font-medium">Status</th>
                <th className="py-3 font-medium">Source</th>
                <th className="py-3 font-medium">Added On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="transition hover:bg-white/[0.03]">
                  <td className="py-4 font-medium text-slate-100">{lead.name}</td>
                  <td className="py-4 text-slate-300">{lead.company}</td>
                  <td className="py-4 text-slate-300">{lead.email}</td>
                  <td className="py-4"><LeadStatus status={lead.status} /></td>
                  <td className="py-4 text-slate-300">{lead.source}</td>
                  <td className="py-4 text-slate-400">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function LeadStatus({ status }: { status: Lead["status"] }) {
  const styles = {
    new: "bg-slate-400/15 text-slate-300",
    qualified: "bg-emerald-400/15 text-emerald-300",
    converted: "bg-cyan-400/15 text-cyan-300",
    lost: "bg-red-400/15 text-red-300",
  };

  return <span className={`rounded px-2 py-1 text-xs capitalize ${styles[status]}`}>{status}</span>;
}
