import {
  AppWindow,
  LifeBuoy,
  Network,
  PenTool,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconName } from "../types";

interface ServiceIconProps {
  name: ServiceIconName;
}

const SERVICE_ICON_MAP: Record<ServiceIconName, LucideIcon> = {
  browser: AppWindow,
  smartphone: Smartphone,
  network: Network,
  "pen-tool": PenTool,
  "life-buoy": LifeBuoy,
};

export function ServiceIcon({ name }: ServiceIconProps) {
  const Icon = SERVICE_ICON_MAP[name];

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/50 bg-white/70 text-blue-600 shadow-sm shadow-blue-950/5 backdrop-blur-md transition duration-300 group-hover:border-blue-300/70 group-hover:text-violet-600 dark:border-slate-800/50 dark:bg-white/[0.04] dark:text-cyan-300 dark:group-hover:border-blue-500/60 dark:group-hover:text-violet-300">
      <Icon aria-hidden size={20} strokeWidth={2} />
    </span>
  );
}
