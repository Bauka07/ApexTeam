"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { DEFAULT_LANGUAGE, DEFAULT_THEME, UI_STORAGE_KEY } from "./uiStore.config";

export type LanguageCode = "RU" | "KZ" | "EN";
export type ThemeMode = "light" | "dark";

export interface UiStoreState {
  hasHydrated: boolean;
  language: LanguageCode;
  theme: ThemeMode;
  isMobileMenuOpen: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  setLanguage: (language: LanguageCode) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

interface PersistedUiState {
  language: LanguageCode;
  theme: ThemeMode;
}

export const useUiStore = create<UiStoreState>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      language: DEFAULT_LANGUAGE,
      theme: DEFAULT_THEME,
      isMobileMenuOpen: false,
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const nextTheme = get().theme === "dark" ? "light" : "dark";

        set({ theme: nextTheme });
      },
      openMobileMenu: () => set({ isMobileMenuOpen: true }),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    }),
    {
      name: UI_STORAGE_KEY,
      partialize: (state): PersistedUiState => ({
        language: state.language,
        theme: state.theme,
      }),
      skipHydration: true,
      storage: createJSONStorage<PersistedUiState>(() => localStorage),
    },
  ),
);
