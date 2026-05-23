import { ServiceCard } from "./components/ServiceCard";
import { SERVICES_CONTENT } from "./config/services.config";
import { classNames } from "./lib/classNames";
import type { ServicesSectionProps } from "./types";

export function ServicesSection({
  content = SERVICES_CONTENT,
  className,
}: ServicesSectionProps) {
  return (
    <section
      className={classNames(
        "relative isolate overflow-hidden bg-white px-4 py-20 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8",
        className,
      )}
      id={content.sectionId}
    >
      <div className="pointer-events-none absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/8" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/8" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
