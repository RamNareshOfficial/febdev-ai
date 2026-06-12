import {
  CalendarDays,
  ChartNoAxesCombined,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  MessagesSquare,
  Settings,
  Target,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/portfolio",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: ListTodo,
  },
  {
    title: "Leads",
    href: "/leads",
    icon: Target,
  },
  {
    title: "WhatsApp",
    href: "/whatsapp",
    icon: MessagesSquare,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
