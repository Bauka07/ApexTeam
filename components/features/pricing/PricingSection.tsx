"use client";

import { useMemo } from "react";

import { classNames } from "@/components/ui/classNames";
import { useUiStore } from "@/store/useUiStore";

import { PricingCard } from "./components/PricingCard";
import { PRICING_PLANS } from "./config/pricing.config";
import { PRICING_LOCALIZATION } from "./config/pricing.locales";

export interface PricingSectionProps {
  className?: string;
}

export function PricingSection({ className }: PricingSectionProps) {
  const { language } = useUiStore();
  const content = PRICING_LOCALIZATION[language];
  const plans = useMemo(
    () =>
      PRICING_PLANS.map((plan) => ({
        ...plan,
        ...content.plans[plan.id],
      })),
    [content],
  );

  return (
    <section
      className={classNames(
        "relative isolate overflow-hidden bg-white px-4 py-24 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8",
        className,
      )}
      id="pricing"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-32 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/8" />
      <div className="pointer-events-none absolute bottom-12 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/8" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              popularLabel={content.popularLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
