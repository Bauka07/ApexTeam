import {
  AppWindow,
  LifeBuoy,
  Network,
  PenTool,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { classNames } from "../lib/classNames";
import type { ServiceCardTone, ServiceIconName } from "../types";

interface ServiceIconProps {
  name: ServiceIconName;
  tone: ServiceCardTone;
}

const iconToneClasses: Record<ServiceCardTone, string> = {
  cyan: "text-cyan-600 group-hover/card:text-blue-600 dark:text-cyan-300 dark:group-hover/card:text-cyan-200",
  blue: "text-blue-600 group-hover/card:text-violet-600 dark:text-blue-300 dark:group-hover/card:text-cyan-200",
  violet:
    "text-violet-600 group-hover/card:text-blue-600 dark:text-violet-300 dark:group-hover/card:text-cyan-200",
};

const SERVICE_ICON_MAP: Record<ServiceIconName, LucideIcon> = {
  browser: AppWindow,
  smartphone: Smartphone,
  network: Network,
  "pen-tool": PenTool,
  "life-buoy": LifeBuoy,
};

export function ServiceIcon({ name, tone }: ServiceIconProps) {
  const Icon = SERVICE_ICON_MAP[name];

  return (
    <span
      className={classNames(
        "mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 shadow-sm shadow-blue-950/5 backdrop-blur-md transition duration-300 group-hover/card:scale-105 group-hover/card:border-blue-300/80 dark:border-slate-800/70 dark:bg-white/[0.04] dark:group-hover/card:border-cyan-400/40",
        iconToneClasses[tone],
      )}
    >
      <Icon aria-hidden size={20} strokeWidth={2} />
    </span>
  );
}
