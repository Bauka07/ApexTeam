"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { classNames } from "./classNames";
import { useSpotlight } from "./useSpotlight";

export type InteractiveGlowLinkVariant = "primary" | "secondary" | "ghost";
export type InteractiveGlowLinkSize = "sm" | "md" | "lg";

export interface InteractiveGlowLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  fullWidth?: boolean;
  iconAfter?: ReactNode;
  onClick?: () => void;
  size?: InteractiveGlowLinkSize;
  variant?: InteractiveGlowLinkVariant;
}

const sizeClasses: Record<InteractiveGlowLinkSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:h-[3.25rem] sm:px-7",
};

const variantClasses: Record<InteractiveGlowLinkVariant, string> = {
  primary:
    "apex-border-trail bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-600/20 hover:shadow-violet-600/25",
  secondary:
    "border border-slate-200/60 bg-white/70 text-slate-800 shadow-sm shadow-slate-950/[0.03] backdrop-blur-md hover:border-blue-300/80 hover:text-blue-700 dark:border-slate-800/70 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400/45 dark:hover:text-cyan-200",
  ghost:
    "border border-slate-200/70 bg-white/70 text-slate-950 shadow-sm shadow-slate-950/[0.03] backdrop-blur-md hover:border-blue-300/80 hover:text-blue-600 dark:border-slate-800 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-400/45 dark:hover:text-cyan-300",
};

export function InteractiveGlowLink({
  children,
  className,
  fullWidth = false,
  href,
  iconAfter,
  onClick,
  size = "md",
  variant = "primary",
}: InteractiveGlowLinkProps) {
  const { spotlightHandlers, spotlightStyle } =
    useSpotlight<HTMLAnchorElement>();

  return (
    <Link
      {...spotlightHandlers}
      className={classNames(
        "group/link relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-normal transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className,
      )}
      href={href}
      onClick={onClick}
      style={spotlightStyle}
    >
      <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/link:opacity-100 group-focus-visible/link:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(14rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.34),transparent_42%)] dark:bg-[radial-gradient(14rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.22),transparent_44%)]" />
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/link:translate-x-[120%]" />
      <span className="relative z-10">{children}</span>
      {iconAfter ? (
        <span className="relative z-10 transition-transform duration-200 group-hover/link:translate-x-1.5">
          {iconAfter}
        </span>
      ) : null}
    </Link>
  );
}
