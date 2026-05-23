"use client";

import { useSpotlight } from "@/components/ui/useSpotlight";

import type { LocalizedWorkflowStep } from "../types";

interface WorkflowStepCardProps {
  isLast: boolean;
  step: LocalizedWorkflowStep;
}

export function WorkflowStepCard({ isLast, step }: WorkflowStepCardProps) {
  const { spotlightHandlers, spotlightStyle } = useSpotlight<HTMLDivElement>();

  return (
    <div className="relative grid gap-5 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
      <div className="relative flex md:justify-end">
        {!isLast ? (
          <span className="absolute left-5 top-12 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent md:left-auto md:right-5" />
        ) : null}
        <div
          {...spotlightHandlers}
          className="group/bullet relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white font-mono text-xs font-semibold text-blue-600 shadow-sm shadow-blue-600/10 transition duration-300 hover:scale-110 dark:border-slate-800 dark:bg-zinc-950 dark:text-cyan-300"
          style={spotlightStyle}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover/bullet:opacity-100 bg-[radial-gradient(8rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.35),transparent_58%)]" />
          <span className="absolute inset-[-6px] rounded-full border border-cyan-400/20 opacity-0 shadow-lg shadow-cyan-400/20 transition duration-300 group-hover/bullet:opacity-100" />
          <span className="relative">{step.order}</span>
        </div>
      </div>

      <article className="group/card relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-950/[0.03] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/80 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800/70 dark:bg-zinc-950/80 dark:hover:border-cyan-400/40">
        <div className="pointer-events-none absolute -right-16 top-0 h-32 w-32 rounded-full bg-cyan-400/0 blur-2xl transition duration-300 group-hover/card:bg-cyan-400/12" />
        <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
          {step.order} / {step.title}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          {step.details}
        </p>
      </article>
    </div>
  );
}
