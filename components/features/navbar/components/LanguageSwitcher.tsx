"use client";

import { useUiStore } from "@/store/useUiStore";

import { NAVBAR_COPY, NAVBAR_LANGUAGES } from "../config/navbar.config";
import { classNames } from "../lib/classNames";

export interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const activeLanguage = useUiStore((state) => state.language);
  const setLanguage = useUiStore((state) => state.setLanguage);

  return (
    <div
      aria-label={NAVBAR_COPY.languageSwitcherLabel}
      className={classNames(
        "inline-flex h-10 items-center rounded-full border border-slate-200/50 bg-white/40 p-1 backdrop-blur-md dark:border-slate-800/50 dark:bg-white/[0.03]",
        className,
      )}
      role="group"
    >
      {NAVBAR_LANGUAGES.map((language) => {
        const isActive = activeLanguage === language;

        return (
          <button
            aria-pressed={isActive}
            className={classNames(
              "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold tracking-normal transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
              isActive
                ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
            )}
            key={language}
            onClick={() => setLanguage(language)}
            type="button"
          >
            {language}
          </button>
        );
      })}
    </div>
  );
}
