"use client";

import { classNames } from "@/components/ui/classNames";

import { PORTFOLIO_FILTERS } from "../config/portfolio.config";
import type { PortfolioFilter } from "../types";

interface PortfolioFilterTabsProps {
  activeFilter: PortfolioFilter;
  labels: Record<PortfolioFilter, string>;
  onFilterChange: (filter: PortfolioFilter) => void;
}

export function PortfolioFilterTabs({
  activeFilter,
  labels,
  onFilterChange,
}: PortfolioFilterTabsProps) {
  return (
    <div
      aria-label="Portfolio filters"
      className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-200/60 bg-white/70 p-1 shadow-sm shadow-slate-950/[0.03] backdrop-blur-md dark:border-slate-800/70 dark:bg-white/[0.04]"
      role="tablist"
    >
      {PORTFOLIO_FILTERS.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            aria-selected={isActive}
            className={classNames(
              "h-9 rounded-full px-4 text-sm font-semibold tracking-normal transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
              isActive
                ? "bg-slate-950 text-white shadow-sm shadow-blue-600/10 dark:bg-white dark:text-slate-950"
                : "text-slate-500 hover:bg-white/80 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white",
            )}
            key={filter}
            onClick={() => onFilterChange(filter)}
            role="tab"
            type="button"
          >
            {labels[filter]}
          </button>
        );
      })}
    </div>
  );
}
