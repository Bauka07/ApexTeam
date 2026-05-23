"use client";

import { ArrowRight } from "lucide-react";

import { InteractiveGlowLink } from "@/components/ui/InteractiveGlowLink";
import { useSpotlight } from "@/components/ui/useSpotlight";

import { ServiceIcon } from "./ServiceIcon";
import { classNames } from "../lib/classNames";
import type { LocalizedServiceItem, ServiceCardTone } from "../types";

interface ServiceCardProps {
  detailLabel: string;
  service: LocalizedServiceItem;
}

const spotlightClasses: Record<ServiceCardTone, string> = {
  cyan: "bg-[radial-gradient(34rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.22),transparent_42%)]",
  blue: "bg-[radial-gradient(34rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(59,130,246,0.22),transparent_42%)]",
  violet:
    "bg-[radial-gradient(34rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(139,92,246,0.24),transparent_42%)]",
};

const ambientClasses: Record<ServiceCardTone, string> = {
  cyan: "from-cyan-400/14 via-blue-500/8",
  blue: "from-blue-500/14 via-cyan-400/8",
  violet: "from-violet-500/16 via-blue-500/8",
};

function ServiceCardVisual({ service }: { service: LocalizedServiceItem }) {
  if (service.visual === "code") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-6 top-6 h-36 w-36 rounded-full border border-cyan-400/25" />
        <div className="absolute right-16 top-16 h-20 w-20 rounded-full border border-blue-500/20" />
        <div className="absolute -right-14 bottom-14 h-px w-72 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute bottom-6 right-6 hidden w-64 rounded-lg border border-slate-200/70 bg-white/70 p-4 font-mono text-[11px] leading-5 text-slate-500 shadow-2xl shadow-blue-600/10 backdrop-blur-md dark:border-slate-800/70 dark:bg-black/30 dark:text-cyan-100/45 sm:grid">
          {(service.visualLines ?? []).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-80">
      <div className="absolute right-5 top-5 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            className="h-1.5 w-1.5 rounded-full bg-slate-300/80 dark:bg-slate-700/80"
            key={index}
          />
        ))}
      </div>
      <div className="absolute -right-12 bottom-8 h-28 w-28 rounded-full border border-slate-200/70 dark:border-slate-800/80" />
      <div className="absolute bottom-12 right-10 h-px w-32 rotate-[-22deg] bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />
    </div>
  );
}

export function ServiceCard({ detailLabel, service }: ServiceCardProps) {
  const { spotlightHandlers, spotlightStyle } = useSpotlight<HTMLElement>();

  return (
    <article
      {...spotlightHandlers}
      className={classNames(
        "apex-border-trail group/card relative isolate flex min-h-[21rem] overflow-hidden rounded-2xl bg-slate-200/70 p-px shadow-sm shadow-slate-950/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10 dark:bg-slate-800/80 dark:shadow-black/20",
        service.isFeatured && "min-h-[24rem]",
        service.layoutClassName,
      )}
      id={`service-${service.id}`}
      style={spotlightStyle}
    >
      <div
        className={classNames(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/card:opacity-100",
          spotlightClasses[service.tone],
        )}
      />
      <div
        className={classNames(
          "pointer-events-none absolute inset-px z-0 rounded-[calc(1rem-1px)] bg-gradient-to-br to-transparent opacity-0 transition duration-300 group-hover/card:opacity-100",
          ambientClasses[service.tone],
        )}
      />

      <div className="relative z-10 flex w-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-white p-6 ring-1 ring-inset ring-white/70 transition duration-300 group-hover/card:bg-white/95 dark:bg-zinc-950 dark:ring-white/[0.04] dark:group-hover/card:bg-zinc-950/95 sm:p-7">
        <ServiceCardVisual service={service} />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
              {service.orderLabel}
            </p>
            <ServiceIcon name={service.icon} tone={service.tone} />
          </div>
          <span className="h-px flex-1 translate-y-2 bg-gradient-to-r from-slate-300/80 to-transparent dark:from-slate-700/80" />
        </div>

        <h3
          className={classNames(
            "relative mt-8 max-w-2xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white",
            service.isFeatured ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {service.title}
        </h3>
        <p
          className={classNames(
            "relative mt-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400",
            service.isFeatured && "max-w-xl text-base leading-8",
          )}
        >
          {service.description}
        </p>

        <InteractiveGlowLink
          className="relative mt-8 w-fit"
          href={service.href}
          iconAfter={<ArrowRight aria-hidden className="h-4 w-4" />}
          size="sm"
          variant="ghost"
        >
          {detailLabel}
        </InteractiveGlowLink>
      </div>
    </article>
  );
}
