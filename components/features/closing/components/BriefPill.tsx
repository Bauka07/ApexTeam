"use client";

import { Check } from "lucide-react";

import { classNames } from "@/components/ui/classNames";
import { useSpotlight } from "@/components/ui/useSpotlight";

interface BriefPillProps {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}

export function BriefPill({ isSelected, label, onClick }: BriefPillProps) {
  const { spotlightHandlers, spotlightStyle } =
    useSpotlight<HTMLButtonElement>();

  return (
    <button
      {...spotlightHandlers}
      aria-pressed={isSelected}
      className={classNames(
        "group/pill relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-semibold tracking-normal transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        isSelected
          ? "apex-border-trail bg-slate-950 text-white shadow-lg shadow-blue-600/20 dark:bg-white dark:text-slate-950"
          : "border border-slate-200/70 bg-white/70 text-slate-600 backdrop-blur-md hover:border-cyan-300/80 hover:text-slate-950 dark:border-slate-800 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/45 dark:hover:text-white",
      )}
      onClick={onClick}
      style={spotlightStyle}
      type="button"
    >
      <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/pill:opacity-100 bg-[radial-gradient(13rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.22),transparent_45%)]" />
      {isSelected ? (
        <Check aria-hidden className="relative z-10 h-4 w-4" strokeWidth={2.4} />
      ) : null}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
