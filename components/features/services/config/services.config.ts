import type { ServicesContent } from "../types";

export const SERVICES_CONTENT: ServicesContent = {
  sectionId: "services",
  eyebrow: "// НАШИ УСЛУГИ",
  title: "Цифровые решения для вашего бизнеса",
  description:
    "Проектируем, запускаем и развиваем продукты, которые выглядят чисто, работают быстро и выдерживают реальные нагрузки.",
  services: [
    {
      id: "websites",
      title: "Создание сайтов под ключ",
      description:
        "Корпоративные сайты, лендинги и веб-платформы с продуманной архитектурой, аналитикой и адаптивным интерфейсом.",
      href: "/services/websites",
      icon: "browser",
    },
    {
      id: "mobile-apps",
      title: "Разработка мобильных приложений (iOS и Android)",
      description:
        "Нативные и кроссплатформенные приложения с удобными сценариями, стабильной логикой и масштабируемым API.",
      href: "/services/mobile-apps",
      icon: "smartphone",
    },
    {
      id: "complex-systems",
      title: "Сложные системы: CRM, LMS и маркетплейсы",
      description:
        "Внутренние кабинеты, образовательные платформы, торговые системы и автоматизация бизнес-процессов.",
      href: "/services/systems",
      icon: "network",
    },
    {
      id: "product-design",
      title: "UI/UX Дизайн и проектирование интерфейсов",
      description:
        "Исследуем пользовательские сценарии, собираем дизайн-системы и проектируем интерфейсы для роста продукта.",
      href: "/services/design",
      icon: "pen-tool",
    },
    {
      id: "support-growth",
      title: "Техническая поддержка и развитие",
      description:
        "Поддерживаем релизы, улучшаем производительность, закрываем технический долг и развиваем продукт после запуска.",
      href: "/services/support",
      icon: "life-buoy",
    },
  ],
};
