"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Todo" },
  { href: "/users", label: "Users" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="text-sm text-blue-100">Navigation Menu</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
