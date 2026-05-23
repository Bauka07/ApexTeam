import type { LanguageCode } from "@/store/useUiStore";

import type { PricingLocalizedContent } from "../types";

export const PRICING_LOCALIZATION: Record<
  LanguageCode,
  PricingLocalizedContent
> = {
  RU: {
    eyebrow: "// ТАРИФЫ",
    title: "Форматы работы под ваш этап роста",
    description:
      "Выберите стартовый формат, а мы соберем команду, стек и roadmap под цель: быстрый MVP, масштабируемый продукт или корпоративная экосистема.",
    popularLabel: "Популярный",
    plans: {
      startup: {
        name: "STARTUP / MVP",
        price: "от $1 500",
        target:
          "Для проверки идеи и быстрого запуска высокопроизводительного MVP.",
        description:
          "Фокус на скорости, чистой архитектуре и первой версии, которую можно показывать клиентам и инвесторам.",
        ctaLabel: "Запустить MVP",
        features: [
          "Продуктовый scope и короткий roadmap",
          "Адаптивный интерфейс и базовая аналитика",
          "Быстрый деплой и подготовка к росту",
        ],
      },
      scale: {
        name: "SCALE / PRODUCT",
        price: "от $4 500",
        target:
          "Полный цикл масштабируемых бизнес-решений и high-load web-систем.",
        description:
          "Собираем продуктовую архитектуру, backend, frontend, интеграции и инфраструктуру под реальные нагрузки.",
        ctaLabel: "Обсудить продукт",
        features: [
          "Go backend и gRPC микросервисы",
          "Next.js frontend с производительной UI-системой",
          "Docker orchestration и стабильный release-flow",
        ],
      },
      enterprise: {
        name: "ENTERPRISE / CUSTOM",
        price: "по запросу",
        target:
          "Для крупных корпоративных экосистем, CRM/LMS и выделенной поддержки инфраструктуры.",
        description:
          "Проектируем индивидуальную архитектуру, командную модель и SLA-процессы под критичные бизнес-сервисы.",
        ctaLabel: "Запросить аудит",
        features: [
          "Custom high-availability architecture",
          "Dedicated team и регулярные релизы",
          "99.9% SLA uptime contract",
        ],
      },
    },
  },
  KZ: {
    eyebrow: "// ТАРИФТЕР",
    title: "Өсу кезеңіңізге сай жұмыс форматтары",
    description:
      "Мақсатыңызға қарай команда, стек және roadmap құрамыз: жылдам MVP, масштабталатын өнім немесе корпоративтік экожүйе.",
    popularLabel: "Танымал",
    plans: {
      startup: {
        name: "STARTUP / MVP",
        price: "$1 500 бастап",
        target:
          "Идеяны тексеріп, жоғары өнімді MVP-ді жылдам іске қосуға арналған.",
        description:
          "Жылдамдыққа, таза архитектураға және клиенттер мен инвесторларға көрсетуге болатын алғашқы нұсқаға фокус.",
        ctaLabel: "MVP бастау",
        features: [
          "Product scope және қысқа roadmap",
          "Адаптивті интерфейс және базалық аналитика",
          "Жылдам деплой және өсуге дайындық",
        ],
      },
      scale: {
        name: "SCALE / PRODUCT",
        price: "$4 500 бастап",
        target:
          "Масштабталатын бизнес шешімдер мен high-load web жүйелердің толық циклі.",
        description:
          "Өнім архитектурасын, backend, frontend, интеграциялар және нақты жүктемеге дайын инфрақұрылым құрамыз.",
        ctaLabel: "Өнімді талқылау",
        features: [
          "Go backend және gRPC микросервистері",
          "Next.js frontend және өнімді UI жүйесі",
          "Docker orchestration және тұрақты release-flow",
        ],
      },
      enterprise: {
        name: "ENTERPRISE / CUSTOM",
        price: "сұраныс бойынша",
        target:
          "Ірі корпоративтік экожүйелер, CRM/LMS және инфрақұрылымды тұрақты қолдау үшін.",
        description:
          "Критикалық бизнес сервистерге арналған жеке архитектура, команда моделі және SLA процестерін жобалаймыз.",
        ctaLabel: "Аудит сұрау",
        features: [
          "Custom high-availability architecture",
          "Dedicated team және тұрақты релиздер",
          "99.9% SLA uptime contract",
        ],
      },
    },
  },
  EN: {
    eyebrow: "// PRICING",
    title: "Engagement models for your growth stage",
    description:
      "Choose the right starting point, and we shape the team, stack, and roadmap around your goal: fast MVP, scalable product, or enterprise ecosystem.",
    popularLabel: "Most popular",
    plans: {
      startup: {
        name: "STARTUP / MVP",
        price: "from $1,500",
        target:
          "For validating ideas and launching fast high-performance MVPs.",
        description:
          "Focused on speed, clean architecture, and a first version you can show to customers and investors.",
        ctaLabel: "Launch MVP",
        features: [
          "Product scope and short roadmap",
          "Responsive interface and baseline analytics",
          "Fast deployment and growth-ready foundation",
        ],
      },
      scale: {
        name: "SCALE / PRODUCT",
        price: "from $4,500",
        target:
          "Full-cycle scalable business solutions and high-load web systems.",
        description:
          "We build product architecture, backend, frontend, integrations, and infrastructure for real production load.",
        ctaLabel: "Discuss product",
        features: [
          "Go backend and gRPC microservices",
          "Next.js frontend with a high-performance UI system",
          "Docker orchestration and stable release flow",
        ],
      },
      enterprise: {
        name: "ENTERPRISE / CUSTOM",
        price: "on request",
        target:
          "Large-scale corporate ecosystems, CRM/LMS systems, and dedicated infrastructure support.",
        description:
          "We design custom architecture, team structure, and SLA processes for critical business services.",
        ctaLabel: "Request audit",
        features: [
          "Custom high-availability architecture",
          "Dedicated team and recurring releases",
          "99.9% SLA uptime contract",
        ],
      },
    },
  },
};
