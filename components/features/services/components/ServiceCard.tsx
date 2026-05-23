import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ServiceIcon } from "./ServiceIcon";
import type { ServiceItem } from "../types";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="group relative flex min-h-72 flex-col overflow-hidden rounded-lg border border-slate-200/50 bg-slate-50/50 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/70 hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800/50 dark:bg-zinc-900/50 dark:hover:border-blue-500/50 dark:hover:bg-zinc-900/80 dark:hover:shadow-violet-500/10"
      id={`service-${service.id}`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-500/0 blur-2xl transition duration-300 group-hover:bg-blue-500/16 dark:group-hover:bg-cyan-400/10" />
      <div className="pointer-events-none absolute -bottom-16 left-8 h-28 w-28 rounded-full bg-violet-500/0 blur-2xl transition duration-300 group-hover:bg-violet-500/12" />

      <ServiceIcon name={service.icon} />

      <h3 className="mt-7 text-xl font-semibold leading-7 tracking-normal text-slate-950 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {service.description}
      </p>

      <Link
        className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-950 transition duration-200 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-white dark:hover:text-cyan-300"
        href={service.href}
      >
        Подробнее
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.2}
        />
      </Link>
    </article>
  );
}
