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
    subTitle: "Performance overview for active project delivery.",
  },
  {
    title: "Projects",
    href: "/portfolio",
    icon: FolderKanban,
    subTitle: "",
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: ListTodo,
    subTitle: "Plan, prioritize, and ship project work.",
  },
  {
    title: "Leads",
    href: "/leads",
    icon: Target,
    subTitle: "Track pipeline quality from first touch to conversion.",
  },
  {
    title: "WhatsApp",
    href: "/whatsapp",
    icon: MessagesSquare,
    subTitle: "",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
    subTitle: "",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: ChartNoAxesCombined,
    subTitle: "",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    subTitle: "",
  },
];
