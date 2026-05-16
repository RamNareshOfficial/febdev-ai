"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
                <div className="flex items-center gap-4">
                    <MobileSidebar />

                    <h1 className="text-lg font-semibold">
                        Dashboard
                    </h1>
                </div>

                <div className="h-10 w-10 rounded-lg border border-slate-700" />
            </header>
        );
    }

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
            <h1 className="text-lg font-semibold">
                Dashboard
            </h1>

            <button
                onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                }
                className="rounded-lg border border-slate-700 p-2 transition-colors hover:bg-slate-800"
            >
                {theme === "dark" ? (
                    <Sun size={18} />
                ) : (
                    <Moon size={18} />
                )}
            </button>
        </header>
    );
}