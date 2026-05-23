"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useEffect, useState } from "react";

import { useUiStore, type ThemeMode } from "@/store/useUiStore";

interface AppProvidersProps {
  children: ReactNode;
}

function applyThemeClass(theme: ThemeMode): void {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function usePersistedUiState(): void {
  useEffect(() => {
    let isMounted = true;

    void Promise.resolve(useUiStore.persist.rehydrate()).finally(() => {
      if (isMounted) {
        useUiStore.getState().setHasHydrated(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);
}

function useThemeClassSynchronizer(): void {
  const hasHydrated = useUiStore((state) => state.hasHydrated);
  const theme = useUiStore((state) => state.theme);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    applyThemeClass(theme);
  }, [hasHydrated, theme]);
}

export function AppProviders({ children }: AppProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 1000 * 60,
          },
        },
      }),
  );

  usePersistedUiState();
  useThemeClassSynchronizer();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
