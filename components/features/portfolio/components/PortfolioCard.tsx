"use client";

import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, MouseEvent } from "react";

import { InteractiveGlowLink } from "@/components/ui/InteractiveGlowLink";
import { classNames } from "@/components/ui/classNames";
import { useSpotlight } from "@/components/ui/useSpotlight";

import { ProjectPreview } from "./ProjectPreview";
import type { LocalizedPortfolioProject, ProjectTone } from "../types";

interface PortfolioCardProps {
  ctaLabel: string;
  project: LocalizedPortfolioProject;
}

type PortfolioCardStyle = CSSProperties & {
  "--tilt-x": string;
  "--tilt-y": string;
  "--spotlight-x": string;
  "--spotlight-y": string;
};

const spotlightClasses: Record<ProjectTone, string> = {
  cyan: "bg-[radial-gradient(36rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.22),transparent_42%)]",
  blue: "bg-[radial-gradient(36rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(59,130,246,0.22),transparent_42%)]",
  violet:
    "bg-[radial-gradient(36rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(139,92,246,0.25),transparent_42%)]",
};

export function PortfolioCard({ ctaLabel, project }: PortfolioCardProps) {
  const { spotlightHandlers, spotlightStyle } = useSpotlight<HTMLElement>();
  const cardStyle: PortfolioCardStyle = {
    ...spotlightStyle,
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
  };

  function handleTilt(event: MouseEvent<HTMLElement>) {
    spotlightHandlers.onMouseMove(event);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
  }

  function resetTilt(event: MouseEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article
      {...spotlightHandlers}
      className={classNames(
        "apex-border-trail group/card relative isolate overflow-hidden rounded-2xl bg-slate-200/70 p-px shadow-sm shadow-slate-950/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10 dark:bg-slate-800/80 dark:shadow-black/20",
        project.layoutClassName,
      )}
      onMouseLeave={resetTilt}
      onMouseMove={handleTilt}
      style={cardStyle}
    >
      <div
        className={classNames(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/card:opacity-100",
          spotlightClasses[project.tone],
        )}
      />

      <div
        className="relative z-10 flex h-full flex-col rounded-[calc(1rem-1px)] bg-white p-5 transition duration-300 ease-out will-change-transform group-hover/card:bg-white/95 dark:bg-zinc-950 dark:group-hover/card:bg-zinc-950/95 sm:p-6"
        style={{
          transform:
            "perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y))",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text font-mono text-sm font-semibold tracking-normal text-transparent">
            {project.metric}
          </p>
          <span className="rounded-full border border-slate-200/70 px-3 py-1 font-mono text-[10px] uppercase tracking-normal text-slate-500 dark:border-slate-800 dark:text-slate-400">
            {project.category}
          </span>
        </div>

        <ProjectPreview kind={project.preview} />

        <div className="mt-7 flex flex-1 flex-col">
          <h3 className="text-2xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:bg-white/[0.04] dark:text-slate-400"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <InteractiveGlowLink
            className="mt-7 w-fit"
            href={project.href}
            iconAfter={<ArrowUpRight aria-hidden className="h-4 w-4" />}
            size="sm"
            variant="ghost"
          >
            {ctaLabel}
          </InteractiveGlowLink>
        </div>
      </div>
    </article>
  );
}
