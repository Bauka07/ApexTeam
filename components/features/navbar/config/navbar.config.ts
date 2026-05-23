import type { LanguageCode } from "@/store/useUiStore";

import type { NavbarLinkItem } from "../types";

export const NAVBAR_LINKS: NavbarLinkItem[] = [
  {
    id: "services",
    label: "Услуги",
    href: "/services",
    hasDropdown: true,
  },
  {
    id: "portfolio",
    label: "Портфолио",
    href: "/portfolio",
  },
  {
    id: "pricing",
    label: "Цены",
    href: "/pricing",
  },
  {
    id: "blog",
    label: "Блог",
    href: "/blog",
  },
  {
    id: "contacts",
    label: "Контакты",
    href: "/contacts",
  },
];

export const NAVBAR_LANGUAGES: LanguageCode[] = ["RU", "KZ", "EN"];

export const NAVBAR_COPY = {
  ctaLabel: "Оставить заявку",
  logoLabel: "apex-team - на главную",
  mainNavigationLabel: "Основная навигация",
  mobileMenuId: "mobile-navigation",
  openMenuLabel: "Открыть меню",
  closeMenuLabel: "Закрыть меню",
  languageSwitcherLabel: "Выбор языка",
  enableDarkThemeLabel: "Включить темную тему",
  enableLightThemeLabel: "Включить светлую тему",
} as const;
