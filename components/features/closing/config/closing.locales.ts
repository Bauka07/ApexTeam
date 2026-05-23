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
    testimonials: {
      eyebrow: "// ОТЗЫВЫ КЛИЕНТОВ",
      title: "Доверие команд, которым нужна скорость и качество",
      description:
        "Короткие истории о том, как ApexTeam превращает сложные идеи в стабильные цифровые продукты.",
      verifiedLabel: "Verified",
      items: {
        techcorp: {
          clientName: "Амина Садыкова",
          role: "CEO",
          company: "TechCorp",
          quote:
            "ApexTeam быстро разобрались в бизнес-логике и запустили платформу без лишней бюрократии. Коммуникация была прозрачной на каждом спринте.",
          projectTag: "E-commerce Platform",
        },
        startupx: {
          clientName: "Марат Рахимов",
          role: "Founder",
          company: "StartupX",
          quote:
            "Команда помогла превратить MVP в продукт, который выдерживает рост нагрузки. Особенно сильны в архитектуре, frontend-деталях и чистой поставке.",
          projectTag: "SaaS MVP",
        },
        bigflow: {
          clientName: "Елена Ким",
          role: "Product Manager",
          company: "BigFlow",
          quote:
            "Мы получили не просто интерфейс, а понятную систему для пользователей и команды. Решения по UX и скорости разработки были очень зрелыми.",
          projectTag: "Mobile App",
        },
        servicepro: {
          clientName: "Данияр Нурлан",
          role: "Director",
          company: "ServicePro",
          quote:
            "ApexTeam аккуратно собрали CRM-процессы, автоматизировали ручные операции и оставили нам понятную основу для дальнейшего развития.",
          projectTag: "CRM Automation",
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
    testimonials: {
      eyebrow: "// КЛИЕНТТЕР ПІКІРІ",
      title: "Жылдамдық пен сапаға сенетін командалар",
      description:
        "ApexTeam күрделі идеяларды тұрақты цифрлық өнімге қалай айналдыратыны туралы қысқа пікірлер.",
      verifiedLabel: "Verified",
      items: {
        techcorp: {
          clientName: "Амина Садыкова",
          role: "CEO",
          company: "TechCorp",
          quote:
            "ApexTeam бизнес-логиканы тез түсініп, платформаны артық бюрократиясыз іске қосты. Әр спринтте коммуникация ашық болды.",
          projectTag: "E-commerce Platform",
        },
        startupx: {
          clientName: "Марат Рахимов",
          role: "Founder",
          company: "StartupX",
          quote:
            "Команда MVP-ді өсетін жүктемеге дайын өнімге айналдыруға көмектесті. Архитектурада, frontend детальдарында және таза жеткізуде өте мықты.",
          projectTag: "SaaS MVP",
        },
        bigflow: {
          clientName: "Елена Ким",
          role: "Product Manager",
          company: "BigFlow",
          quote:
            "Біз жай интерфейс емес, пайдаланушылар мен командаға түсінікті жүйе алдық. UX және әзірлеу жылдамдығы бойынша шешімдері өте жетілген.",
          projectTag: "Mobile App",
        },
        servicepro: {
          clientName: "Данияр Нурлан",
          role: "Director",
          company: "ServicePro",
          quote:
            "ApexTeam CRM-процестерді ұқыпты жинап, қолмен жасалатын операцияларды автоматтандырды және әрі қарай дамытуға таза негіз қалдырды.",
          projectTag: "CRM Automation",
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
    testimonials: {
      eyebrow: "// CLIENT TESTIMONIALS",
      title: "Trusted by teams that move fast and ship carefully",
      description:
        "Short notes on how ApexTeam turns complex product ideas into stable digital systems.",
      verifiedLabel: "Verified",
      items: {
        techcorp: {
          clientName: "Amina Sadykova",
          role: "CEO",
          company: "TechCorp",
          quote:
            "ApexTeam understood the business logic quickly and launched the platform without unnecessary process drag. Communication stayed clear every sprint.",
          projectTag: "E-commerce Platform",
        },
        startupx: {
          clientName: "Marat Rakhimov",
          role: "Founder",
          company: "StartupX",
          quote:
            "The team helped us turn an MVP into a product ready for growing traffic. Their architecture, frontend detail, and delivery discipline stood out.",
          projectTag: "SaaS MVP",
        },
        bigflow: {
          clientName: "Elena Kim",
          role: "Product Manager",
          company: "BigFlow",
          quote:
            "We received more than an interface: it became a clear system for users and our internal team. The UX and delivery decisions felt mature.",
          projectTag: "Mobile App",
        },
        servicepro: {
          clientName: "Daniyar Nurlan",
          role: "Director",
          company: "ServicePro",
          quote:
            "ApexTeam shaped our CRM workflows carefully, automated manual operations, and left us with a clean foundation for future growth.",
          projectTag: "CRM Automation",
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
