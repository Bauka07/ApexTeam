import type { LanguageCode } from "@/store/useUiStore";

import type { HeroContent } from "../types";

export const HERO_LOCALIZATION: Record<LanguageCode, HeroContent> = {
  RU: {
    badge: "🌐 Available Globally",
    headline: {
      prefix: "Создаем цифровые",
      highlight: "продукты",
      suffix: "нового поколения",
    },
    subtitle:
      "Разработка высоконагруженных сайтов и мобильных приложений под ключ. Воплощаем ваши идеи в чистый код.",
    actions: [
      {
        label: "Оставить заявку",
        href: "/contacts",
        variant: "primary",
      },
      {
        label: "Смотреть стек",
        href: "/services",
        variant: "secondary",
      },
    ],
    stats: [
      {
        value: "2 года",
        label: "на рынке",
      },
      {
        value: "10+",
        label: "проектов",
      },
    ],
    terminal: {
      title: "apexteam.dev",
      scripts: [
        {
          command: "pnpm apex init --product web",
          responses: [
            "create app router workspace",
            "connect ui, api, analytics layers",
            "status: product shell ready",
          ],
        },
        {
          command: "pnpm apex compile --mode launch",
          responses: [
            "typecheck routes and server contracts",
            "optimize assets for global edge",
            "compiled successfully in 2.4s",
          ],
        },
        {
          command: "curl /api/apex/health",
          responses: [
            "{ status: 'online', latency: '18ms' }",
            "delivery: remote-first",
            "release channel: stable",
          ],
        },
      ],
    },
    tickerItems: [
      "Next.js",
      "Go",
      "TypeScript",
      "TailwindCSS",
      "gRPC",
      "WebSockets",
      "React 19",
      "Zustand",
      "Edge APIs",
      "Scalable",
      "Fast",
    ],
  },
  KZ: {
    badge: "🌐 Әлем бойынша қолжетімді",
    headline: {
      prefix: "Жаңа буын",
      highlight: "цифрлық өнімдерін",
      suffix: "жасаймыз",
    },
    subtitle:
      "Жоғары жүктемелі сайттар мен мобильді қосымшаларды толық әзірлейміз. Идеяңызды таза әрі сенімді кодқа айналдырамыз.",
    actions: [
      {
        label: "Өтінім қалдыру",
        href: "/contacts",
        variant: "primary",
      },
      {
        label: "Стекті көру",
        href: "/services",
        variant: "secondary",
      },
    ],
    stats: [
      {
        value: "2 жыл",
        label: "нарықта",
      },
      {
        value: "10+",
        label: "жоба",
      },
    ],
    terminal: {
      title: "apexteam.dev",
      scripts: [
        {
          command: "pnpm apex init --product web",
          responses: [
            "app router workspace дайындалды",
            "ui, api, analytics қабаттары қосылды",
            "status: product shell ready",
          ],
        },
        {
          command: "pnpm apex compile --mode launch",
          responses: [
            "routes және server contracts тексерілді",
            "assets global edge үшін оңтайландырылды",
            "compiled successfully in 2.4s",
          ],
        },
        {
          command: "curl /api/apex/health",
          responses: [
            "{ status: 'online', latency: '18ms' }",
            "delivery: remote-first",
            "release channel: stable",
          ],
        },
      ],
    },
    tickerItems: [
      "Next.js",
      "Go",
      "TypeScript",
      "TailwindCSS",
      "gRPC",
      "WebSockets",
      "React 19",
      "Zustand",
      "Edge APIs",
      "Scalable",
      "Fast",
    ],
  },
  EN: {
    badge: "🌐 Available Globally",
    headline: {
      prefix: "We build",
      highlight: "digital products",
      suffix: "for the next generation",
    },
    subtitle:
      "Turnkey development for high-load websites and mobile applications. We transform your ideas into clean, reliable code.",
    actions: [
      {
        label: "Start a project",
        href: "/contacts",
        variant: "primary",
      },
      {
        label: "Explore stack",
        href: "/services",
        variant: "secondary",
      },
    ],
    stats: [
      {
        value: "2 years",
        label: "on the market",
      },
      {
        value: "10+",
        label: "projects",
      },
    ],
    terminal: {
      title: "apexteam.dev",
      scripts: [
        {
          command: "pnpm apex init --product web",
          responses: [
            "create app router workspace",
            "connect ui, api, analytics layers",
            "status: product shell ready",
          ],
        },
        {
          command: "pnpm apex compile --mode launch",
          responses: [
            "typecheck routes and server contracts",
            "optimize assets for global edge",
            "compiled successfully in 2.4s",
          ],
        },
        {
          command: "curl /api/apex/health",
          responses: [
            "{ status: 'online', latency: '18ms' }",
            "delivery: remote-first",
            "release channel: stable",
          ],
        },
      ],
    },
    tickerItems: [
      "Next.js",
      "Go",
      "TypeScript",
      "TailwindCSS",
      "gRPC",
      "WebSockets",
      "React 19",
      "Zustand",
      "Edge APIs",
      "Scalable",
      "Fast",
    ],
  },
};
