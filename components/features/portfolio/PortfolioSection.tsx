"use client";

import { useMemo, useState } from "react";

import { classNames } from "@/components/ui/classNames";
import { useUiStore } from "@/store/useUiStore";

import { PortfolioCard } from "./components/PortfolioCard";
import { PortfolioFilterTabs } from "./components/PortfolioFilterTabs";
import { PORTFOLIO_PROJECTS } from "./config/portfolio.config";
import { PORTFOLIO_LOCALIZATION } from "./config/portfolio.locales";
import type { PortfolioFilter } from "./types";

export interface PortfolioSectionProps {
  className?: string;
}

export function PortfolioSection({ className }: PortfolioSectionProps) {
  const { language } = useUiStore();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const content = PORTFOLIO_LOCALIZATION[language];
  const projects = useMemo(
    () =>
      PORTFOLIO_PROJECTS.map((project) => ({
        ...project,
        ...content.projects[project.id],
      })).filter(
        (project) =>
          activeFilter === "all" || project.category === activeFilter,
      ),
    [activeFilter, content],
  );

  return (
    <section
      className={classNames(
        "relative isolate overflow-hidden bg-white px-4 py-24 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8",
        className,
      )}
      id="portfolio"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-28 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/8" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/8" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <div className="grid gap-6 md:justify-items-end">
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-right">
              {content.description}
            </p>
            <PortfolioFilterTabs
              activeFilter={activeFilter}
              labels={content.filters}
              onFilterChange={setActiveFilter}
            />
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(34rem,auto)] gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard
              ctaLabel={content.projectCtaLabel}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
