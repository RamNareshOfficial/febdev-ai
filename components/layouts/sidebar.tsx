"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import clsx from "clsx";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 border-r border-slate-800 bg-slate-950/95 backdrop-blur flex-col">
      <div className="p-6 text-xl font-bold text-white">
        FebDev AI
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all",
                pathname === item.href
                  ? "bg-indigo-500 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              )}
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}