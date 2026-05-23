"use client";

import { useEffect, useMemo, useState } from "react";

import type { TerminalScript } from "../types";

interface CompletedTerminalEntry {
  command: string;
  responses: string[];
}

interface TypewriterState {
  scriptIndex: number;
  characterIndex: number;
  responseCount: number;
  history: CompletedTerminalEntry[];
  cursorVisible: boolean;
}

interface TypewriterResult {
  activeCommand: string;
  activeResponses: string[];
  history: CompletedTerminalEntry[];
  cursorVisible: boolean;
}

const TYPE_DELAY_MS = 34;
const RESPONSE_DELAY_MS = 320;
const SCRIPT_PAUSE_MS = 1200;
const CURSOR_BLINK_MS = 520;
const MAX_HISTORY_ENTRIES = 2;

function getNextHistory(
  history: CompletedTerminalEntry[],
  completedScript: TerminalScript,
): CompletedTerminalEntry[] {
  return [
    ...history,
    {
      command: completedScript.command,
      responses: completedScript.responses,
    },
  ].slice(-MAX_HISTORY_ENTRIES);
}

export function useTypewriter(scripts: TerminalScript[]): TypewriterResult {
  const safeScripts = useMemo(() => scripts.filter(Boolean), [scripts]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [state, setState] = useState<TypewriterState>({
    scriptIndex: 0,
    characterIndex: 0,
    responseCount: 0,
    history: [],
    cursorVisible: true,
  });
  const { characterIndex, history, responseCount, scriptIndex } = state;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const cursorTimer = window.setInterval(() => {
      setState((current) => ({
        ...current,
        cursorVisible: !current.cursorVisible,
      }));
    }, CURSOR_BLINK_MS);

    return () => window.clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (safeScripts.length === 0 || prefersReducedMotion) {
      return;
    }

    const activeScript = safeScripts[scriptIndex];
    const isTypingCommand = characterIndex < activeScript.command.length;
    const isRevealingResponses =
      !isTypingCommand && responseCount < activeScript.responses.length;

    if (isTypingCommand) {
      const timer = window.setTimeout(() => {
        setState((current) => ({
          ...current,
          characterIndex: current.characterIndex + 1,
        }));
      }, TYPE_DELAY_MS);

      return () => window.clearTimeout(timer);
    }

    if (isRevealingResponses) {
      const timer = window.setTimeout(() => {
        setState((current) => ({
          ...current,
          responseCount: current.responseCount + 1,
        }));
      }, RESPONSE_DELAY_MS);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setState((current) => ({
        scriptIndex: (current.scriptIndex + 1) % safeScripts.length,
        characterIndex: 0,
        responseCount: 0,
        history: getNextHistory(current.history, activeScript),
        cursorVisible: true,
      }));
    }, SCRIPT_PAUSE_MS);

    return () => window.clearTimeout(timer);
  }, [
    characterIndex,
    history,
    prefersReducedMotion,
    responseCount,
    safeScripts,
    scriptIndex,
  ]);

  if (safeScripts.length === 0) {
    return {
      activeCommand: "",
      activeResponses: [],
      history: [],
      cursorVisible: false,
    };
  }

  if (prefersReducedMotion) {
    const [firstScript, ...historyScripts] = safeScripts;

    return {
      activeCommand: firstScript.command,
      activeResponses: firstScript.responses,
      history: historyScripts.slice(0, MAX_HISTORY_ENTRIES).map((script) => ({
        command: script.command,
        responses: script.responses,
      })),
      cursorVisible: false,
    };
  }

  const activeScript = safeScripts[scriptIndex];

  return {
    activeCommand: activeScript.command.slice(0, characterIndex),
    activeResponses: activeScript.responses.slice(0, responseCount),
    history,
    cursorVisible: state.cursorVisible,
  };
}
