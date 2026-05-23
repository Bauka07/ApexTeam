import Link from "next/link";

import { classNames } from "../lib/classNames";
import type { HeroAction } from "../types";

interface HeroActionLinkProps {
  action: HeroAction;
}

export function HeroActionLink({ action }: HeroActionLinkProps) {
  const isPrimary = action.variant === "primary";

  return (
    <Link
      className={classNames(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-normal transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-100 sm:h-[3.25rem] sm:px-7",
        isPrimary
          ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-violet-600/25"
          : "border border-slate-200/50 bg-white/60 text-slate-800 backdrop-blur-md hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-700 dark:border-slate-800/50 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:text-cyan-200",
      )}
      href={action.href}
    >
      {action.label}
    </Link>
  );
}
