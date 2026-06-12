import { Sidebar } from "@/components/layouts/sidebar";
import { Header } from "@/components/layouts/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#030812] text-slate-100">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <Header />

        <div className="bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.12),transparent_28%),linear-gradient(135deg,#07101f_0%,#020617_100%)] p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}