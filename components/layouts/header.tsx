"use client";

import { useState } from "react";
import { Bell, MessageCircle, Search } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";



export function Header() {
  const pathname = usePathname();
  const pageName = navigation.find((item) => pathname === item.href);
  const [query, setQuery] = useState<string>("");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[#08111f]/85 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div className="flex-col">
          <h1 className="text-lg font-semibold text-white">{pageName?.title}</h1>
          <p className="text-xs text-slate-400">{pageName?.subTitle}</p>
        </div>
      </div>

      <label className="hidden w-full max-w-sm items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-500 lg:flex">
        <Search size={15} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search anything..." className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
      </label>

      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
        >
          <Bell size={16} />
        </button>
        <button
          aria-label="Messages"
          className="relative grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
        >
          <MessageCircle size={16} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
        </button>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-emerald-200 to-cyan-500 text-xs font-bold text-slate-950">
          RN
        </div>
      </div>
    </header>
  );
}
