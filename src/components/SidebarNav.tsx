"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Todo" },
  { href: "/users", label: "Users" },
  { href: "/routing-examples", label: "Routes Demo" },
  { href: "/ssr-demo", label: "SSR Demo" },
  { href: "/ssg-demo", label: "SSG Demo" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="app-sidebar w-64 shrink-0 p-4 shadow-sm">
      <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="text-sm text-blue-100">Navigation Menu</p>
      </div>

      <div className="mb-4">
        <ThemeToggle />
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                  : "hover:bg-gray-100"
              }`}
              style={!isActive ? { color: "var(--app-text)" } : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
