import type { LanguageCode } from "@/store/useUiStore";

import type { ClosingLocalizedContent } from "../types";

export const CLOSING_LOCALIZATION: Record<
  LanguageCode,
  ClosingLocalizedContent
> = {
  RU: {
    workflow: {
      eyebrow: "// КАК МЫ РАБОТАЕМ",
      title: "Прозрачный процесс от идеи до стабильного релиза",
      description:
        "Каждый этап фиксирует результат: от аналитики и архитектуры до clean code, тестирования и поддержки после запуска.",
      steps: {
        discovery: {
          title: "Аналитика и Бриф",
          details:
            "Проводим discovery, исследуем рынок, уточняем цели, ограничения, роли пользователей и критерии успеха продукта.",
        },
        architecture: {
          title: "Архитектура и Проектирование",
          details:
            "Проектируем high-load микросервисные схемы, gRPC API-контракты, data-flow и UI/UX wireframes.",
        },
        development: {
          title: "Разработка (Clean Code)",
          details:
            "Параллельно собираем robust backend на Go и blazing-fast frontend на Next.js с понятной структурой кода.",
        },
        qa: {
          title: "QA и Тестирование",
          details:
            "Запускаем automated integration testing, load testing, security audits и проверяем критичные пользовательские сценарии.",
        },
        release: {
          title: "Релиз и Поддержка",
          details:
            "Настраиваем CI/CD deployment, Docker orchestration, cloud infrastructure и 24/7 monitoring после запуска.",
        },
      },
    },
    brief: {
      title: "Интерактивная заявка",
      description:
        "Соберите короткий project brief в формате dashboard: выберите тип продукта, бюджет и оставьте контакт для связи.",
      projectTypeLabel: "Тип проекта",
      budgetLabel: "Оценочный бюджет",
      projectTypes: {
        website: { label: "Web-сайт" },
        mobile: { label: "Мобильное приложение" },
        crm: { label: "CRM/LMS Система" },
        ecosystem: { label: "Экосистема под ключ" },
      },
      budgets: {
        "under-3000": { label: "< $3,000" },
        "3000-7000": { label: "$3,000 - $7,000" },
        "7000-plus": { label: "$7,000+" },
      },
      fields: {
        name: {
          label: "Имя",
          placeholder: "Как к вам обращаться?",
        },
        contact: {
          label: "Telegram / WhatsApp",
          placeholder: "@username или ссылка",
        },
        details: {
          label: "Описание проекта",
          placeholder: "Коротко опишите идею, сроки и важные детали",
        },
      },
      submitLabel: "ОТПРАВИТЬ БРИФ В APEXTEAM",
      successMessage: "Бриф собран. Откроем письмо с готовым описанием.",
    },
  },
  KZ: {
    workflow: {
      eyebrow: "// ҚАЛАЙ ЖҰМЫС ІСТЕЙМІЗ",
      title: "Идеядан тұрақты релизге дейінгі ашық процесс",
      description:
        "Әр кезең нақты нәтиже береді: аналитика мен архитектурадан бастап clean code, тестілеу және іске қосқаннан кейінгі қолдауға дейін.",
      steps: {
        discovery: {
          title: "Аналитика және Бриф",
          details:
            "Discovery өткізіп, нарықты зерттейміз, мақсаттарды, шектеулерді, пайдаланушы рөлдерін және өнімнің success criteria нақтылаймыз.",
        },
        architecture: {
          title: "Архитектура және Жобалау",
          details:
            "High-load микросервис схемаларын, gRPC API contracts, data-flow және UI/UX wireframes жобалаймыз.",
        },
        development: {
          title: "Әзірлеу (Clean Code)",
          details:
            "Go арқылы robust backend және Next.js арқылы blazing-fast frontend параллель жасаймыз.",
        },
        qa: {
          title: "QA және Тестілеу",
          details:
            "Automated integration testing, load testing, security audits және негізгі user-flow тексерулерін орындаймыз.",
        },
        release: {
          title: "Релиз және Қолдау",
          details:
            "CI/CD deployment, Docker orchestration, cloud infrastructure және іске қосылғаннан кейін 24/7 monitoring баптаймыз.",
        },
      },
    },
    brief: {
      title: "Интерактивті өтінім",
      description:
        "Dashboard форматында қысқа project brief жинаңыз: өнім түрін, бюджетті таңдаңыз және байланыс қалдырыңыз.",
      projectTypeLabel: "Жоба түрі",
      budgetLabel: "Болжамды бюджет",
      projectTypes: {
        website: { label: "Web-сайт" },
        mobile: { label: "Мобильді қосымша" },
        crm: { label: "CRM/LMS жүйесі" },
        ecosystem: { label: "Толық экожүйе" },
      },
      budgets: {
        "under-3000": { label: "< $3,000" },
        "3000-7000": { label: "$3,000 - $7,000" },
        "7000-plus": { label: "$7,000+" },
      },
      fields: {
        name: {
          label: "Атыңыз",
          placeholder: "Сізге қалай хабарласамыз?",
        },
        contact: {
          label: "Telegram / WhatsApp",
          placeholder: "@username немесе сілтеме",
        },
        details: {
          label: "Жоба сипаттамасы",
          placeholder: "Идея, мерзім және маңызды талаптарды қысқаша жазыңыз",
        },
      },
      submitLabel: "БРИФТІ APEXTEAM-ҒА ЖІБЕРУ",
      successMessage: "Бриф дайын. Дайын мәтіні бар хатты ашамыз.",
    },
  },
  EN: {
    workflow: {
      eyebrow: "// OUR WORKFLOW",
      title: "A transparent path from idea to stable release",
      description:
        "Every phase produces a concrete outcome: from discovery and architecture to clean code, testing, release, and post-launch support.",
      steps: {
        discovery: {
          title: "Discovery and Brief",
          details:
            "We run discovery, research the market, define goals, constraints, user roles, and product success criteria.",
        },
        architecture: {
          title: "Architecture and Planning",
          details:
            "We design high-load microservice schemas, gRPC API contracts, data-flow, and UI/UX wireframes.",
        },
        development: {
          title: "Development (Clean Code)",
          details:
            "We build robust Go backends and blazing-fast Next.js frontends in parallel with a clear code structure.",
        },
        qa: {
          title: "QA and Testing",
          details:
            "We run automated integration testing, load testing, security audits, and critical user-flow checks.",
        },
        release: {
          title: "Release and Support",
          details:
            "We configure CI/CD deployment, Docker orchestration, cloud infrastructure, and 24/7 monitoring after launch.",
        },
      },
    },
    brief: {
      title: "Interactive project brief",
      description:
        "Build a short dashboard-style brief: choose the product type, budget range, and leave your best contact.",
      projectTypeLabel: "Type of project",
      budgetLabel: "Estimated budget",
      projectTypes: {
        website: { label: "Website" },
        mobile: { label: "Mobile app" },
        crm: { label: "CRM/LMS system" },
        ecosystem: { label: "Turnkey ecosystem" },
      },
      budgets: {
        "under-3000": { label: "< $3,000" },
        "3000-7000": { label: "$3,000 - $7,000" },
        "7000-plus": { label: "$7,000+" },
      },
      fields: {
        name: {
          label: "Name",
          placeholder: "How should we address you?",
        },
        contact: {
          label: "Telegram / WhatsApp",
          placeholder: "@username or link",
        },
        details: {
          label: "Project description",
          placeholder: "Briefly describe the idea, timeline, and key details",
        },
      },
      submitLabel: "SEND BRIEF TO APEXTEAM",
      successMessage: "Brief assembled. We will open an email with your draft.",
    },
  },
};
