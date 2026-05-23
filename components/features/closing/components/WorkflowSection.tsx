import { WORKFLOW_STEPS } from "../config/closing.config";
import { WorkflowStepCard } from "./WorkflowStepCard";
import type { ClosingLocalizedContent } from "../types";

interface WorkflowSectionProps {
  content: ClosingLocalizedContent["workflow"];
}

export function WorkflowSection({ content }: WorkflowSectionProps) {
  const steps = WORKFLOW_STEPS.map((step) => ({
    ...step,
    ...content.steps[step.id],
  }));

  return (
    <section
      className="relative isolate overflow-hidden bg-white px-4 py-24 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8"
      id="workflow"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-32 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/8" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:justify-self-end md:text-right">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          {steps.map((step, index) => (
            <WorkflowStepCard
              isLast={index === steps.length - 1}
              key={step.id}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
