"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Bell,
  Settings,
  X,
} from "lucide-react";

type HOISidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard/hoi",
    icon: LayoutDashboard,
  },
  {
    label: "Departments",
    href: "/dashboard/hoi/departments",
    icon: Building2,
  },
  {
    label: "HODs",
    href: "/dashboard/hoi/hods",
    icon: Users,
  },
  {
    label: "Teachers",
    href: "/dashboard/hoi/teachers",
    icon: GraduationCap,
  },
  {
    label: "Students",
    href: "/dashboard/hoi/students",
    icon: Users,
  },
  {
    label: "Courses",
    href: "/dashboard/hoi/courses",
    icon: BookOpen,
  },
  {
    label: "Notices",
    href: "/dashboard/hoi/notices",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/dashboard/hoi/settings",
    icon: Settings,
  },
];

export default function HOISidebar({
  isOpen,
  onClose,
}: HOISidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-72
          border-r border-white/10
          bg-[#0b1024]
          transition-transform duration-300
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo / Header */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/dashboard/hoi"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <img
                    src="/images/logo-iconn.png"
                    alt="Virtual CR"
                    className="h-full w-full object-cover"
                />
            </div>

            <div>
              <h1 className="font-bold text-white">
                Virtual <span className="text-blue-400">CR</span>
              </h1>

              <p className="text-xs text-slate-500">
                Head of Institution
              </p>
            </div>
          </Link>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard/hoi" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 rounded-xl px-3 py-3
                    text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon size={19} />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-sm font-medium text-white">
              Institution Admin
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Manage your institution
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}