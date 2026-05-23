import type { LanguageCode } from "@/store/useUiStore";

import { SERVICES_SECTION_ID } from "./services.config";
import type { ServicesLocalizedContent } from "../types";

export const SERVICES_LOCALIZATION: Record<
  LanguageCode,
  ServicesLocalizedContent
> = {
  RU: {
    sectionId: SERVICES_SECTION_ID,
    eyebrow: "// РЕШЕНИЯ",
    title: "Цифровые решения для вашего бизнеса",
    description:
      "Собираем сайты, приложения и сложные платформы как цельные цифровые продукты: с сильной архитектурой, чистым интерфейсом и готовностью к росту.",
    detailLabel: "Подробнее",
    services: {
      websites: {
        title: "Создание сайтов под ключ",
        description:
          "Корпоративные сайты, лендинги и веб-платформы с выразительным интерфейсом, быстрой загрузкой, аналитикой и архитектурой под масштабирование.",
        visualLines: [
          "const product = createApexSite({",
          "  stack: ['Next.js', 'API', 'SEO'],",
          "  status: 'launch-ready'",
          "})",
        ],
      },
      "mobile-apps": {
        title: "Разработка мобильных приложений (iOS и Android)",
        description:
          "Нативные и кроссплатформенные приложения с точными пользовательскими сценариями, стабильной логикой и масштабируемым API.",
      },
      "complex-systems": {
        title: "Сложные системы: CRM, LMS и маркетплейсы",
        description:
          "Проектируем личные кабинеты, образовательные платформы, торговые системы и внутреннюю автоматизацию, где важны права, роли, интеграции и надежность.",
      },
      "product-design": {
        title: "UI/UX Дизайн и проектирование интерфейсов",
        description:
          "Исследуем сценарии, собираем дизайн-системы и проектируем интерфейсы, которые помогают пользователям быстро понимать продукт и действовать.",
      },
      "support-growth": {
        title: "Техническая поддержка и развитие",
        description:
          "Поддерживаем релизы, улучшаем производительность, закрываем технический долг и развиваем продукт после запуска без потери темпа.",
      },
    },
  },
  KZ: {
    sectionId: SERVICES_SECTION_ID,
    eyebrow: "// ШЕШІМДЕР",
    title: "Бизнесіңізге арналған цифрлық шешімдер",
    description:
      "Сайттарды, қосымшаларды және күрделі платформаларды біртұтас өнім ретінде құрастырамыз: мықты архитектура, таза интерфейс және өсуге дайын негіз.",
    detailLabel: "Толығырақ",
    services: {
      websites: {
        title: "Сайттарды толық әзірлеу",
        description:
          "Корпоративтік сайттар, лендингтер және веб-платформалар: жылдам жүктеу, аналитика, бейімделген интерфейс және масштабтауға дайын архитектура.",
        visualLines: [
          "const product = createApexSite({",
          "  stack: ['Next.js', 'API', 'SEO'],",
          "  status: 'launch-ready'",
          "})",
        ],
      },
      "mobile-apps": {
        title: "Мобильді қосымшалар әзірлеу (iOS және Android)",
        description:
          "Нативті және кроссплатформалық қосымшалар: түсінікті сценарийлер, тұрақты логика және кеңейтуге дайын API.",
      },
      "complex-systems": {
        title: "Күрделі жүйелер: CRM, LMS және маркетплейстер",
        description:
          "Жеке кабинеттерді, оқу платформаларын, сауда жүйелерін және бизнес процестерді автоматтандыруды жобалаймыз.",
      },
      "product-design": {
        title: "UI/UX дизайн және интерфейстерді жобалау",
        description:
          "Пайдаланушы сценарийлерін зерттеп, дизайн-жүйелер құрып, өнімді түсінікті әрі әрекетке ыңғайлы ететін интерфейстер жасаймыз.",
      },
      "support-growth": {
        title: "Техникалық қолдау және дамыту",
        description:
          "Релиздерді қолдаймыз, өнімділікті жақсартамыз, техникалық қарызды азайтамыз және өнімді іске қосылғаннан кейін дамытамыз.",
      },
    },
  },
  EN: {
    sectionId: SERVICES_SECTION_ID,
    eyebrow: "// SOLUTIONS",
    title: "Digital solutions for your business",
    description:
      "We build websites, applications, and complex platforms as complete digital products with strong architecture, clean interfaces, and room to scale.",
    detailLabel: "Learn more",
    services: {
      websites: {
        title: "Turnkey website development",
        description:
          "Corporate websites, landing pages, and web platforms with sharp interfaces, fast loading, analytics, and architecture ready for scale.",
        visualLines: [
          "const product = createApexSite({",
          "  stack: ['Next.js', 'API', 'SEO'],",
          "  status: 'launch-ready'",
          "})",
        ],
      },
      "mobile-apps": {
        title: "Mobile app development (iOS and Android)",
        description:
          "Native and cross-platform applications with precise user flows, stable product logic, and scalable API foundations.",
      },
      "complex-systems": {
        title: "Complex systems: CRM, LMS, and marketplaces",
        description:
          "We design portals, learning platforms, commerce systems, and business automation where roles, permissions, integrations, and reliability matter.",
      },
      "product-design": {
        title: "UI/UX design and interface architecture",
        description:
          "We research user journeys, build design systems, and craft interfaces that make products easier to understand and faster to use.",
      },
      "support-growth": {
        title: "Technical support and product growth",
        description:
          "We support releases, improve performance, reduce technical debt, and evolve products after launch without losing momentum.",
      },
    },
  },
};
