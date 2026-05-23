import type { HeroStat } from "../types";

interface HeroStatsProps {
  stats: HeroStat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <dl className="mt-12 flex flex-col gap-3 font-mono text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:gap-4">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="rounded-full border border-slate-200/50 bg-white/50 px-3.5 py-2 backdrop-blur-md dark:border-slate-800/50 dark:bg-white/[0.03]">
            [
            <span className="text-slate-950 dark:text-white">
              {stat.value}
            </span>{" "}
            {stat.label}]
          </dd>
        </div>
      ))}
    </dl>
  );
}
