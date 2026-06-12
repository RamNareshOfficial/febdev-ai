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
        <button className="rounded-md border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden">
          <Menu size={20} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-white/10 bg-[#0b1524] p-0"
      >
        <div className="flex items-center gap-3 px-5 py-6">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-sm font-bold text-white">
            RN
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Ram Naresh</p>
            <p className="text-xs text-slate-500">Workspace</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition ${
                  pathname === item.href
                    ? "bg-blue-600/80 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
