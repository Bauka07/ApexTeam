import { TESTIMONIALS } from "../config/closing.config";
import { TestimonialCard } from "./TestimonialCard";
import type { ClosingLocalizedContent } from "../types";

interface TestimonialsSectionProps {
  content: ClosingLocalizedContent["testimonials"];
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const testimonials = TESTIMONIALS.map((testimonial) => ({
    ...testimonial,
    ...content.items[testimonial.id],
  }));

  return (
    <section
      className="relative isolate overflow-hidden bg-white px-4 py-24 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8"
      id="testimonials"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/8" />
      <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/8" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:justify-self-end lg:text-right">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              verifiedLabel={content.verifiedLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
