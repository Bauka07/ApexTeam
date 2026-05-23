"use client";

import { BadgeCheck, Quote, Star } from "lucide-react";

import { classNames } from "@/components/ui/classNames";
import { useSpotlight } from "@/components/ui/useSpotlight";

import type { LocalizedTestimonial, TestimonialTone } from "../types";

interface TestimonialCardProps {
  testimonial: LocalizedTestimonial;
  verifiedLabel: string;
}

const spotlightClasses: Record<TestimonialTone, string> = {
  amber:
    "bg-[radial-gradient(30rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(245,158,11,0.18),transparent_42%)]",
  blue: "bg-[radial-gradient(30rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(59,130,246,0.22),transparent_42%)]",
  cyan: "bg-[radial-gradient(30rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(34,211,238,0.22),transparent_42%)]",
  violet:
    "bg-[radial-gradient(30rem_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(139,92,246,0.22),transparent_42%)]",
};

const avatarClasses: Record<TestimonialTone, string> = {
  amber: "from-amber-300 via-orange-400 to-blue-500",
  blue: "from-blue-300 via-cyan-400 to-violet-500",
  cyan: "from-cyan-300 via-blue-400 to-slate-900",
  violet: "from-violet-300 via-fuchsia-400 to-blue-600",
};

export function TestimonialCard({
  testimonial,
  verifiedLabel,
}: TestimonialCardProps) {
  const { spotlightHandlers, spotlightStyle } = useSpotlight<HTMLElement>();

  return (
    <article
      {...spotlightHandlers}
      className={classNames(
        "group/testimonial relative isolate flex overflow-hidden rounded-2xl p-px transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10",
        testimonial.isFeatured
          ? "apex-border-trail bg-slate-200/70 dark:bg-slate-800/80"
          : "bg-slate-200/60 dark:bg-slate-800/70",
      )}
      style={spotlightStyle}
    >
      <div className="relative z-10 flex min-h-[25rem] w-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-white/70 p-6 backdrop-blur-md ring-1 ring-inset ring-white/80 transition duration-300 group-hover/testimonial:bg-white/80 dark:bg-black/40 dark:ring-white/[0.05] dark:group-hover/testimonial:bg-black/50">
        <div
          className={classNames(
            "pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/testimonial:opacity-100",
            spotlightClasses[testimonial.tone],
          )}
        />
        <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-28 w-28 rounded-full border border-slate-200/80 dark:border-white/10" />
        <div className="pointer-events-none absolute bottom-14 right-6 z-0 h-px w-28 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={classNames(
                "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-lg shadow-blue-600/15 ring-1 ring-white/40",
                avatarClasses[testimonial.tone],
              )}
            >
              {testimonial.avatarInitials}
            </div>
            <div>
              <p className="font-semibold tracking-normal text-slate-950 dark:text-white">
                {testimonial.clientName}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-700 dark:text-cyan-200">
            <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
            {verifiedLabel}
          </span>
        </div>

        <div
          aria-label={`${testimonial.rating} out of 5 stars`}
          className="relative z-10 mt-8 flex items-center gap-1.5 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.45)]"
        >
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              aria-hidden
              className="h-4 w-4 fill-current transition duration-300 group-hover/testimonial:scale-110"
              key={index}
            />
          ))}
        </div>

        <Quote
          aria-hidden
          className="relative z-10 mt-8 h-6 w-6 text-blue-500/70 dark:text-cyan-300/70"
        />
        <p className="relative z-10 mt-5 flex-1 text-base leading-8 text-slate-700 dark:text-slate-300">
          {testimonial.quote}
        </p>

        <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-slate-200/70 pt-5 dark:border-slate-800/80">
          <span className="rounded-full bg-slate-950 px-3 py-1.5 font-mono text-[11px] font-semibold text-white shadow-lg shadow-blue-600/10 dark:bg-white dark:text-slate-950">
            {testimonial.projectTag}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-slate-300/80 to-transparent dark:from-slate-700/80" />
        </div>
      </div>
    </article>
  );
}
