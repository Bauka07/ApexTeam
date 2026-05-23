import Link from "next/link";

import { NAVBAR_COPY } from "../config/navbar.config";

export interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      aria-label={NAVBAR_COPY.logoLabel}
      className="group flex shrink-0 items-center gap-3 rounded-full transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      href="/"
      onClick={onClick}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 shadow-sm shadow-blue-950/5 backdrop-blur-md dark:border-slate-800/80 dark:bg-white/5">
        <span className="h-3.5 w-3.5 rotate-45 rounded-[0.2rem] bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 transition-transform duration-300 group-hover:rotate-[55deg]" />
        <span className="absolute inset-2 rounded-full border border-blue-500/20" />
      </span>

      <span className="text-lg font-semibold leading-none tracking-normal text-slate-950 transition-colors duration-300 dark:text-white sm:text-xl">
        apex<span className="text-blue-600 dark:text-cyan-300">-team</span>
      </span>
    </Link>
  );
}
