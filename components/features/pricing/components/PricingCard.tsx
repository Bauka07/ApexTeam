"use client";

import { ArrowRight, Check } from "lucide-react";

import { InteractiveGlowLink } from "@/components/ui/InteractiveGlowLink";
import { classNames } from "@/components/ui/classNames";
import { useSpotlight } from "@/components/ui/useSpotlight";

import type { LocalizedPricingPlan, PricingPlanTone } from "../types";

interface PricingCardProps {
  plan: LocalizedPricingPlan;
  popularLabel: string;
}

const spotlightClasses: Record<PricingPlanTone, string> = {
  cyan: "bg-[radial-gradient(32rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.2),transparent_42%)]",
  blue: "bg-[radial-gradient(32rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(59,130,246,0.2),transparent_42%)]",
  violet:
    "bg-[radial-gradient(34rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(139,92,246,0.26),transparent_42%)]",
};

const iconToneClasses: Record<PricingPlanTone, string> = {
  cyan: "text-cyan-500 group-hover/card:text-blue-500",
  blue: "text-blue-500 group-hover/card:text-cyan-500",
  violet: "text-violet-500 group-hover/card:text-cyan-400",
};

export function PricingCard({ plan, popularLabel }: PricingCardProps) {
  const { spotlightHandlers, spotlightStyle } = useSpotlight<HTMLElement>();
  const isFeatured = Boolean(plan.isFeatured);

  return (
    <article
      {...spotlightHandlers}
      className={classNames(
        "group/card relative isolate flex min-h-[35rem] flex-col overflow-hidden rounded-2xl p-px transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/10",
        isFeatured
          ? "apex-border-trail bg-slate-200/70 dark:bg-slate-800/80"
          : "border border-slate-200/70 bg-white/70 shadow-sm shadow-slate-950/[0.03] dark:border-slate-800/80 dark:bg-zinc-950/70",
      )}
      style={spotlightStyle}
    >
      <div
        className={classNames(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/card:opacity-100",
          spotlightClasses[plan.tone],
        )}
      />

      <div
        className={classNames(
          "relative z-10 flex h-full flex-col rounded-[calc(1rem-1px)] p-6 transition duration-300 sm:p-7",
          isFeatured
            ? "bg-white dark:bg-zinc-950"
            : "bg-white/80 dark:bg-zinc-950/80",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-normal text-blue-600 dark:text-cyan-300">
            {plan.name}
          </p>
          {isFeatured ? (
            <span className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-600/20">
              {popularLabel}
            </span>
          ) : null}
        </div>

        <div className="mt-8">
          <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-4xl font-semibold tracking-normal text-transparent">
            {plan.price}
          </p>
          <p className="mt-5 text-base font-medium leading-7 text-slate-900 dark:text-zinc-100">
            {plan.target}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {plan.description}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {plan.tech.map((tech) => (
            <span
              className="rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:bg-white/[0.04] dark:text-slate-400"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-8 grid gap-4">
          {plan.features.map((feature) => (
            <li className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300" key={feature}>
              <span
                className={classNames(
                  "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200/70 bg-white transition duration-300 group-hover/card:scale-110 dark:border-slate-800 dark:bg-white/[0.04]",
                  iconToneClasses[plan.tone],
                )}
              >
                <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-9">
          <InteractiveGlowLink
            fullWidth
            href={plan.ctaHref}
            iconAfter={<ArrowRight aria-hidden className="h-4 w-4" />}
            size="md"
            variant={isFeatured ? "primary" : "secondary"}
          >
            {plan.ctaLabel}
          </InteractiveGlowLink>
        </div>
      </div>
    </article>
  );
}
