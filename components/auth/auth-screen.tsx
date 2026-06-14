"use client";

import { Code2, Mail, Eye, Lock } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type AuthMode = "signin" | "login" | "signup";

const copy = {
  signin: {
    title: "Sign in to your account",
    subtitle: "Enter your details to access your account",
    welcome: "Welcome to",
    note: "Build, manage, and scale with modern web technologies.",
    button: "Sign In",
    footer: "Don't have an account?",
    footerLink: "Sign up",
    footerHref: "/signup",
  },
  login: {
    title: "Login to your account",
    subtitle: "Enter your credentials to continue",
    welcome: "Welcome back at,",
    note: "Glad to see you again!",
    button: "Login",
    footer: "Don't have an account?",
    footerLink: "Sign up",
    footerHref: "/signup",
  },
  signup: {
    title: "Create your account",
    subtitle: "Enter your details to start your workspace",
    welcome: "Join",
    note: "Bring your projects, tasks, leads, and messages together.",
    button: "Sign Up",
    footer: "Already have an account?",
    footerLink: "Log in",
    footerHref: "/login",
  },
} satisfies Record<AuthMode, Record<string, string>>;

export function AuthScreen({ mode }: { mode: AuthMode }) {
  const [showPassword, setShowPassword] = useState(false);
  const c = copy[mode];
  const isSignup = mode === "signup";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(`${c.button} form data`, data);
    form.reset();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030812] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_42%,rgba(8,145,178,0.18),transparent_26%),radial-gradient(circle_at_88%_24%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(120deg,#030812_0%,#07111f_48%,#030712_100%)]" />
      <section className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="grid h-32 w-32 place-items-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-2 shadow-[0_0_70px_rgba(34,211,238,0.16)]">
            <div className="grid h-full w-full place-items-center rounded-full border border-white/10 bg-[#0b1930] text-4xl font-bold">
              FD
            </div>
          </div>
          <p className="mt-8 text-lg text-slate-300">{c.welcome}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">FebDev-AI</h1>
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">{c.note}</p>
          <p className="mt-20 hidden text-xs text-slate-600 lg:block">© 2026 FebDev-AI. All rights reserved.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-md rounded-lg border border-white/10 bg-[#0d1626]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold">{c.title}</h2>
          <p className="mt-2 text-sm text-slate-400">{c.subtitle}</p>

          <div className="mt-7 space-y-4">
            {mode === "signin" && (
              <>
                <button type="button" className="flex w-full items-center justify-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:bg-white/10">
                  <Mail size={17} className="text-cyan-300" />
                  Continue with Google
                </button>
                <button type="button" className="flex w-full items-center justify-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:bg-white/10">
                  <Code2 size={17} />
                  Continue with GitHub
                </button>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="h-px flex-1 bg-white/10" />
                  or
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </>
            )}

            {isSignup && (
              <>
                <label className="block space-y-2">
                  <span className="text-sm text-slate-300">Full name</span>
                  <input name="name" required placeholder="Ram Naresh" className="h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm text-slate-300">Phone Number</span>
                  <input name="name" required placeholder="Phone Number" className="h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm text-slate-300">OTP</span>
                  <input name="name" required placeholder="OTP" className="h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
                </label>
              </>
            )}

            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Email address</span>
              <input name="email" type="email" required placeholder="you@example.com" className="h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Password</span>
              <span className="flex h-12 items-center rounded-md border border-white/10 bg-white/[0.04] pr-3 focus-within:border-cyan-300/60">
                <input name="password" type={showPassword ? "text" : "password"} required placeholder="Enter your password" className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-500" />
                <button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword((value) => !value)} className="text-slate-500 hover:text-white">
                  {showPassword ? <Lock size={16} /> : <Eye size={16} />}
                </button>
              </span>
            </label>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-400">
                <input name="remember" type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent" />
                Remember me
              </label>
              {!isSignup && <a href="#" className="text-cyan-300 hover:text-cyan-200">Forgot password?</a>}
            </div>

            <button type="submit" className="h-12 w-full rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-fuchsia-950/20 transition hover:brightness-110">
              {c.button}
            </button>
          </div>

          <p className="mt-7 text-center text-sm text-slate-400">
            {c.footer}{" "}
            <Link href={c.footerHref} className="font-medium text-cyan-300 hover:text-cyan-200">
              {c.footerLink}
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
