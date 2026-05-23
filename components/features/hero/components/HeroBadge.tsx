interface HeroBadgeProps {
  label: string;
}

export function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200/50 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_0_36px_rgba(37,99,235,0.14)] backdrop-blur-md dark:border-slate-800/50 dark:bg-white/[0.04] dark:text-slate-200">
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
      {label}
    </div>
  );
}
