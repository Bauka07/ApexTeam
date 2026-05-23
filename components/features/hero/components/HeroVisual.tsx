import { AnimatedTerminal } from "./AnimatedTerminal";
import type { HeroContent } from "../types";

interface HeroVisualProps {
  terminal: HeroContent["terminal"];
}

export function HeroVisual({ terminal }: HeroVisualProps) {
  return (
    <div className="relative flex min-h-[28rem] items-center justify-center lg:justify-end">
      <div className="absolute left-5 top-8 h-24 w-24 rounded-full border border-cyan-300/25 dark:border-cyan-300/15" />
      <div className="absolute bottom-8 right-2 h-32 w-32 rounded-full border border-violet-500/20 dark:border-violet-400/15" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <AnimatedTerminal scripts={terminal.scripts} title={terminal.title} />
    </div>
  );
}
