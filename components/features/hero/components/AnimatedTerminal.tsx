"use client";

import { useTypewriter } from "../hooks/useTypewriter";
import type { TerminalScript } from "../types";

interface AnimatedTerminalProps {
  title: string;
  scripts: TerminalScript[];
}

export function AnimatedTerminal({ title, scripts }: AnimatedTerminalProps) {
  const { activeCommand, activeResponses, history, cursorVisible } =
    useTypewriter(scripts);

  return (
    <div className="relative w-full max-w-[34rem]">
      <div className="absolute -inset-10 rounded-full bg-blue-500/15 blur-3xl dark:bg-cyan-400/10" />
      <div className="relative overflow-hidden rounded-lg border border-slate-800/80 bg-black/90 shadow-2xl shadow-blue-950/20 backdrop-blur-2xl dark:border-slate-800/70 dark:bg-black/70">
        <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <p className="font-mono text-xs text-slate-400">{title}</p>
        </div>

        <div className="min-h-[22rem] p-5 font-mono text-sm leading-7 text-slate-300 sm:min-h-[26rem] sm:p-7">
          {history.map((entry, entryIndex) => (
            <div className="mb-5" key={`${entry.command}-${entryIndex}`}>
              <p className="text-cyan-300">$ {entry.command}</p>
              {entry.responses.map((response) => (
                <p className="text-slate-400" key={response}>
                  {response}
                </p>
              ))}
            </div>
          ))}

          <div>
            <p className="text-cyan-300">
              $ {activeCommand}
              <span
                aria-hidden
                className={
                  cursorVisible
                    ? "ml-1 inline-block h-4 w-2 translate-y-0.5 bg-gradient-to-b from-cyan-300 to-blue-500"
                    : "ml-1 inline-block h-4 w-2 translate-y-0.5 bg-transparent"
                }
              />
            </p>
            {activeResponses.map((response) => (
              <p className="text-slate-300" key={response}>
                {response}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
