"use client";

import { useTheme } from "@/app/providers";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition hover:opacity-90"
      style={{
        borderColor: "var(--app-border)",
        backgroundColor: "var(--app-surface-elevated)",
        color: "var(--app-text)",
      }}
      aria-label="切换主题"
    >
      当前主题：{theme === "dark" ? "深色" : "浅色"}（点击切换）
    </button>
  );
}
