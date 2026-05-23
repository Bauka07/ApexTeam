import type { LanguageCode } from "@/store/useUiStore";

import type { PortfolioLocalizedContent } from "../types";

export const PORTFOLIO_LOCALIZATION: Record<
  LanguageCode,
  PortfolioLocalizedContent
> = {
  RU: {
    eyebrow: "// НАШИ РАБОТЫ",
    title: "Проекты, где дизайн встречается с инженерией",
    description:
      "Подбираем архитектуру, интерфейс и инфраструктуру под бизнес-метрики: скорость, стабильность, конверсию и удобство команды.",
    projectCtaLabel: "Открыть кейс",
    filters: {
      all: "Все",
      web: "Web",
      mobile: "Mobile",
      saas: "SaaS/CRM",
    },
    projects: {
      "atlas-commerce": {
        name: "Atlas Commerce",
        metric: "⚡ 0.4s load time",
        description:
          "Высокоскоростная витрина с продуктовой аналитикой, быстрым каталогом и стабильной серверной архитектурой.",
      },
      "pulse-mobile": {
        name: "Pulse Mobile",
        metric: "📈 +120% conversion",
        description:
          "Мобильный путь заявки с чистой навигацией, быстрыми экранами и аккуратной интеграцией с CRM.",
      },
      "nexus-crm": {
        name: "Nexus CRM",
        metric: "⚙️ 99.9% uptime",
        description:
          "Операционная CRM с ролями, воронками, задачами, быстрыми фильтрами и надежной синхронизацией данных.",
      },
      "edge-analytics": {
        name: "Edge Analytics",
        metric: "🚀 42ms realtime sync",
        description:
          "SaaS-панель с живыми событиями, метриками продукта, командными ролями и WebSocket-обновлениями.",
      },
    },
  },
  KZ: {
    eyebrow: "// ЖҰМЫСТАРЫМЫЗ",
    title: "Дизайн мен инженерия тоғысқан жобалар",
    description:
      "Архитектураны, интерфейсті және инфрақұрылымды нақты бизнес метрикаларға бейімдейміз: жылдамдық, тұрақтылық, конверсия және командаға ыңғайлылық.",
    projectCtaLabel: "Кейсті ашу",
    filters: {
      all: "Барлығы",
      web: "Web",
      mobile: "Mobile",
      saas: "SaaS/CRM",
    },
    projects: {
      "atlas-commerce": {
        name: "Atlas Commerce",
        metric: "⚡ 0.4s жүктелу",
        description:
          "Өнім аналитикасы, жылдам каталог және тұрақты серверлік архитектурасы бар жоғары жылдамдықты витрина.",
      },
      "pulse-mobile": {
        name: "Pulse Mobile",
        metric: "📈 +120% конверсия",
        description:
          "Таза навигациясы, жылдам экрандары және CRM-мен ұқыпты интеграциясы бар мобильді өтінім жолы.",
      },
      "nexus-crm": {
        name: "Nexus CRM",
        metric: "⚙️ 99.9% uptime",
        description:
          "Рөлдер, воронкалар, тапсырмалар, жылдам сүзгілер және сенімді дерек синхронизациясы бар операциялық CRM.",
      },
      "edge-analytics": {
        name: "Edge Analytics",
        metric: "🚀 42ms realtime sync",
        description:
          "Жанды оқиғалар, өнім метрикалары, командалық рөлдер және WebSocket жаңартулары бар SaaS панелі.",
      },
    },
  },
  EN: {
    eyebrow: "// OUR WORKS",
    title: "Projects where design meets engineering",
    description:
      "We shape architecture, interface, and infrastructure around business metrics: speed, reliability, conversion, and team efficiency.",
    projectCtaLabel: "Open case",
    filters: {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      saas: "SaaS/CRM",
    },
    projects: {
      "atlas-commerce": {
        name: "Atlas Commerce",
        metric: "⚡ 0.4s load time",
        description:
          "A high-speed commerce storefront with product analytics, fast catalog browsing, and stable server architecture.",
      },
      "pulse-mobile": {
        name: "Pulse Mobile",
        metric: "📈 +120% conversion",
        description:
          "A mobile request flow with clean navigation, fast screens, and careful CRM integration.",
      },
      "nexus-crm": {
        name: "Nexus CRM",
        metric: "⚙️ 99.9% uptime",
        description:
          "An operational CRM with roles, pipelines, tasks, fast filtering, and reliable data synchronization.",
      },
      "edge-analytics": {
        name: "Edge Analytics",
        metric: "🚀 42ms realtime sync",
        description:
          "A SaaS dashboard with live events, product metrics, team roles, and WebSocket updates.",
      },
    },
  },
};
