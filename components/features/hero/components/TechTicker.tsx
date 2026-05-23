interface TechTickerProps {
  items: string[];
}

export function TechTicker({ items }: TechTickerProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-slate-200/50 py-4 dark:border-slate-800/50">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />

      <ul className="apex-ticker-track flex w-max items-center gap-4 will-change-transform">
        {repeatedItems.map((item, index) => (
          <li
            aria-hidden={index >= items.length}
            className="rounded-full border border-slate-200/50 bg-white/50 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-normal text-slate-500 backdrop-blur-md dark:border-slate-800/50 dark:bg-white/[0.03] dark:text-slate-400"
            key={`${item}-${index}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes apex-hero-ticker {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .apex-ticker-track {
          animation: apex-hero-ticker 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .apex-ticker-track {
            animation-duration: 0.01ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </div>
  );
}
