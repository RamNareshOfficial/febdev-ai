"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import clsx from "clsx";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-56 shrink-0 flex-col border-r border-white/10 bg-[#0b1524]/95 text-slate-200 backdrop-blur md:flex">
      <div className="px-4 py-5">
        <div className="moving-gradient-border rounded-lg p-px">
          <div className="rounded-[7px] bg-[#0b1524] px-4 py-3">
            <p className="text-base font-semibold tracking-wide text-white">
              FebDev-AI
            </p>
            <p className="text-xs text-slate-500">Personal Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition",
                active
                  ? "bg-blue-600/80 text-white shadow-lg shadow-blue-950/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon size={16} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/login"
        className="mx-3 mb-5 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
      >
        <LogOut size={16} />
        Log out
      </Link>
    </aside>
  );
}
