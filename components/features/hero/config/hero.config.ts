import type { HeroContent } from "../types";

export const HERO_CONTENT: HeroContent = {
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
};
