import Image from "next/image";
import type { CSSProperties } from "react";
import { existsSync } from "fs";
import { join } from "path";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Frontend",
    accent: "from-cyan-300 to-blue-500",
    skills: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind", level: 91 },
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-300 to-teal-500",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express", level: 82 },
      { name: "API Integration", level: 88 },
    ],
  },
  {
    title: "Database",
    accent: "from-lime-300 to-emerald-500",
    skills: [{ name: "MongoDB", level: 86 }],
  },
  {
    title: "Tools",
    accent: "from-fuchsia-300 to-rose-500",
    skills: [
      { name: "Git", level: 86 },
      { name: "Vercel", level: 84 },
      { name: "Postman", level: 85 },
    ],
  },
];

const strengths = [
  "Frontend performance",
  "Clean, recruiter-ready UI",
  "API integration",
  "Scalability thinking",
];

const projects = [
  {
    title: "ERP Workflow System",
    description:
      "Role-aware workflow platform that streamlines operational approvals, status tracking, and team handoffs.",
    stack: ["Next.js", "React", "MongoDB", "Tailwind"],
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    link: "#contact",
  },
  {
    title: "Stock Management System",
    description:
      "Inventory dashboard for tracking stock movement, low-stock alerts, and clean reporting for daily decisions.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-emerald-300 via-teal-500 to-cyan-600",
    link: "#contact",
  },
  {
    title: "YouTube Content Automation Tools",
    description:
      "Automation utilities for repeatable content workflows, metadata preparation, and publishing support.",
    stack: ["JavaScript", "Node.js", "APIs", "Postman"],
    gradient: "from-rose-300 via-fuchsia-500 to-violet-600",
    link: "#contact",
  },
];

const contactLinks = [
  { label: "Email", value: "rnaresh056@gmail.com", href: "mailto:rnaresh056@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/ram-naresh-237b11116", href: "https://www.linkedin.com/in/ram-naresh-237b11116" },
  { label: "GitHub", value: "github.com/RamNareshOfficial", href: "https://github.com/RamNareshOfficial" },
];

const hasProfileImage = existsSync(join(process.cwd(), "public", "profile.jpg"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A12] text-slate-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.18),transparent_30%),linear-gradient(135deg,#070A12_0%,#0D1222_48%,#12172A_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A12]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-semibold tracking-wide text-white">
            Ram Naresh
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} className="transition hover:text-cyan-200" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Hire Me
          </a>
        </nav>
      </header>
      <section id="home" className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            {/* <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" /> */}
            <span className="dotPulseCss" />
            Available for full stack opportunities
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Ram Naresh
          </h1>
          <p className="mt-5 text-xl font-medium text-cyan-100 sm:text-2xl">
            Full Stack Developer (Next.js | MongoDB | React)
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Building scalable web experiences with modern technologies.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-6 py-3 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-400/30"
            >
              View Projects
              <ArrowTopRightOnSquareIcon className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 font-semibold text-white shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/12"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-float justify-self-center lg:justify-self-end">
          <div className="relative h-80 w-80 rounded-full border border-white/15 bg-white/8 p-4 shadow-[0_35px_100px_rgba(34,211,238,0.18)] backdrop-blur sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-300/20 via-transparent to-fuchsia-300/20" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-900">
              {hasProfileImage ? (
                <Image
                  src="/profile.jpg"
                  alt="Ram Naresh profile"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, 384px"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-cyan-950 to-slate-950 text-6xl font-bold text-white">
                  RN
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="About Me" title="Outcome-driven engineering with product sense." />
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              I build full stack web applications with a problem-solving mindset, focusing on measurable outcomes instead of transactional task completion. My work combines clean interfaces, dependable integrations, and practical architecture choices that can grow with real users.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm font-medium text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionHeading eyebrow="Skills" title="Modern stack, practical execution." centered />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${group.accent}`} />
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${group.accent} animate-skill-fill`}
                        style={{ "--skill-width": `${skill.level}%` } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeading eyebrow="Projects" title="Selected work built for clarity and scale." centered />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group glass-panel overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-cyan-200/30">
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_45%),radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.35),transparent_22%)]" />
                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/20 backdrop-blur">
                  <CodeBracketIcon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100">
                  Live / Demo Link
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Experience" title="Current role focused on meaningful delivery." />
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">Full Stack Developer</h3>
                <p className="mt-1 text-slate-400">Current Role</p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                <MapPinIcon className="h-5 w-5 text-cyan-200" />
                India / Remote-ready
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "Build responsive interfaces that reduce friction and improve workflow speed.",
                "Integrate APIs and data flows with reliability, validation, and clear user feedback.",
                "Think beyond assigned tickets by improving maintainability, scalability, and business outcomes.",
              ].map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/7 p-4 leading-7 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-20">
        <SectionHeading eyebrow="Contact" title="Let’s build something useful." centered />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <div className="mt-6 space-y-4">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="block rounded-2xl border border-white/10 bg-white/7 p-4 transition hover:border-cyan-200/40 hover:bg-white/10">
                  <span className="text-sm text-slate-400">{link.label}</span>
                  <span className="mt-1 block font-medium text-slate-100">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="glass-panel grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-slate-300">Name</span>
                <input className="form-field" name="name" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-slate-300">Email</span>
                <input className="form-field" type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Message</span>
              <textarea className="form-field min-h-36 resize-y" name="message" placeholder="Tell me about your project or role..." />
            </label>
            <button className="rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 sm:px-8">
        <div className="mb-3 flex justify-center gap-5">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
        <p>Copyright 2026 Ram Naresh. All rights reserved.</p>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
