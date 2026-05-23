"use client";

import { useMemo } from "react";

import { useUiStore } from "@/store/useUiStore";

import { ServiceCard } from "./components/ServiceCard";
import { SERVICE_ITEMS } from "./config/services.config";
import { SERVICES_LOCALIZATION } from "./config/services.locales";
import { classNames } from "./lib/classNames";
import type { ServicesSectionProps } from "./types";

export function ServicesSection({
  className,
}: ServicesSectionProps) {
  const language = useUiStore((state) => state.language);
  const content = SERVICES_LOCALIZATION[language];
  const services = useMemo(
    () =>
      SERVICE_ITEMS.map((service) => ({
        ...service,
        ...content.services[service.id],
      })),
    [content],
  );

  return (
    <section
      className={classNames(
        "relative isolate overflow-hidden bg-white px-4 py-24 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8",
        className,
      )}
      id={content.sectionId}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/8" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/8" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(21rem,auto)] gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              detailLabel={content.detailLabel}
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
