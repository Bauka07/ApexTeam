import { BarChart3, Boxes, LayoutDashboard, Smartphone } from "lucide-react";

import { classNames } from "@/components/ui/classNames";

import type { ProjectPreviewKind } from "../types";

interface ProjectPreviewProps {
  kind: ProjectPreviewKind;
}

const previewMeta: Record<
  ProjectPreviewKind,
  {
    accent: string;
    icon: typeof LayoutDashboard;
    rows: string[];
  }
> = {
  commerce: {
    accent: "from-cyan-400 to-blue-500",
    icon: LayoutDashboard,
    rows: ["Catalog", "Checkout", "Analytics", "Orders", "Retention"],
  },
  mobile: {
    accent: "from-blue-400 to-violet-500",
    icon: Smartphone,
    rows: ["Onboarding", "Request", "Status", "Profile", "Push"],
  },
  crm: {
    accent: "from-violet-400 to-blue-500",
    icon: Boxes,
    rows: ["Leads", "Pipeline", "Tasks", "Roles", "Reports"],
  },
  analytics: {
    accent: "from-cyan-400 to-violet-500",
    icon: BarChart3,
    rows: ["Realtime", "Funnels", "Cohorts", "Events", "Exports"],
  },
};

export function ProjectPreview({ kind }: ProjectPreviewProps) {
  const meta = previewMeta[kind];
  const Icon = meta.icon;

  return (
    <div className="relative mt-7 overflow-hidden rounded-xl border border-slate-200/70 bg-slate-950 shadow-2xl shadow-blue-950/20 dark:border-slate-800">
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-4">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <p className="font-mono text-[10px] text-slate-500">apex.preview</p>
      </div>

      <div className="h-52 overflow-hidden">
        <div className="min-h-[22rem] p-4 transition-transform duration-[1800ms] ease-out group-hover/card:-translate-y-28">
          <div
            className={classNames(
              "mb-4 flex h-24 items-center justify-between rounded-lg bg-gradient-to-br p-4",
              meta.accent,
            )}
          >
            <div>
              <div className="h-2 w-24 rounded-full bg-white/70" />
              <div className="mt-3 h-2 w-36 rounded-full bg-white/45" />
            </div>
            <Icon aria-hidden className="h-10 w-10 text-white/80" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-3">
              {meta.rows.map((row, index) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
                  key={row}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-cyan-200/70">
                      {row}
                    </span>
                    <span className="h-1.5 w-10 rounded-full bg-emerald-300/60" />
                  </div>
                  <div
                    className={classNames(
                      "mt-3 h-2 rounded-full bg-white/10",
                      index % 2 === 0 ? "w-5/6" : "w-2/3",
                    )}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  className="h-20 rounded-lg border border-white/10 bg-white/[0.035]"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
