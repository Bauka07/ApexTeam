"use client";

import { Moon, Sun } from "lucide-react";

import { useUiStore } from "@/store/useUiStore";

import { NAVBAR_COPY } from "../config/navbar.config";
import { classNames } from "../lib/classNames";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useUiStore((state) => state.theme);
  const toggleTheme = useUiStore((state) => state.toggleTheme);
  const isDark = theme === "dark";
  const label = isDark
    ? NAVBAR_COPY.enableLightThemeLabel
    : NAVBAR_COPY.enableDarkThemeLabel;

  return (
    <button
      aria-label={label}
      className={classNames(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/50 bg-white/40 text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 dark:border-slate-800/50 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:text-cyan-200",
        className,
      )}
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      {isDark ? (
        <Sun aria-hidden size={17} strokeWidth={2.2} />
      ) : (
        <Moon aria-hidden size={17} strokeWidth={2.2} />
      )}
    </button>
  );
}
