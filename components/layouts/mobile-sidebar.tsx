"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/lib/navigation";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-lg border border-slate-800 p-2 md:hidden">
          <Menu size={20} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-slate-800 bg-slate-950 p-0"
      >
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
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all ${
                  pathname === item.href
                    ? "bg-indigo-500 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}