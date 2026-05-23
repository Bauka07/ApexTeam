"use client";

import { useUiStore } from "@/store/useUiStore";

import { HeroActions } from "./components/HeroActions";
import { HeroBadge } from "./components/HeroBadge";
import { HeroStats } from "./components/HeroStats";
import { HeroVisual } from "./components/HeroVisual";
import { TechTicker } from "./components/TechTicker";
import { HERO_LOCALIZATION } from "./config/hero.config";
import { classNames } from "./lib/classNames";
import type { HeroProps } from "./types";

export function Hero({ content, className }: HeroProps) {
  const { language } = useUiStore();
  const localizedContent = content ?? HERO_LOCALIZATION[language];

  return (
    <section
      className={classNames(
        "relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-white px-4 py-14 transition-colors duration-300 dark:bg-black sm:px-6 sm:py-[4.5rem] min-[1120px]:min-h-[calc(100vh-5rem)] lg:px-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/10" />
      <div className="pointer-events-none absolute bottom-8 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />

      <div className="mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-center gap-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <HeroBadge label={localizedContent.badge} />

            <h1 className="mt-8 max-w-4xl break-words text-4xl font-semibold leading-[1.02] tracking-normal text-slate-950 dark:text-white sm:text-6xl sm:leading-[0.98] lg:text-7xl xl:text-[5.75rem]">
              <span className="block">{localizedContent.headline.prefix}</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                {localizedContent.headline.highlight}
              </span>
              <span className="block">{localizedContent.headline.suffix}</span>
            </h1>

            <p className="mt-7 max-w-2xl break-words text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {localizedContent.subtitle}
            </p>

            <HeroActions actions={localizedContent.actions} />
            <HeroStats stats={localizedContent.stats} />
          </div>

          <HeroVisual key={language} terminal={localizedContent.terminal} />
        </div>

        <TechTicker items={localizedContent.tickerItems} />
      </div>
    </section>
  );
}

export default Hero;
