import type { PortfolioFilter, PortfolioProjectConfig } from "../types";

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  "all",
  "web",
  "mobile",
  "saas",
];

export const PORTFOLIO_PROJECTS: PortfolioProjectConfig[] = [
  {
    id: "atlas-commerce",
    category: "web",
    href: "/portfolio/atlas-commerce",
    preview: "commerce",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    tone: "cyan",
    layoutClassName: "md:col-span-2",
  },
  {
    id: "pulse-mobile",
    category: "mobile",
    href: "/portfolio/pulse-mobile",
    preview: "mobile",
    tags: ["React Native", "Expo", "REST", "CI/CD"],
    tone: "blue",
    layoutClassName: "md:col-span-1",
  },
  {
    id: "nexus-crm",
    category: "saas",
    href: "/portfolio/nexus-crm",
    preview: "crm",
    tags: ["Go (PL)", "gRPC", "PostgreSQL", "Docker"],
    tone: "violet",
    layoutClassName: "md:col-span-1",
  },
  {
    id: "edge-analytics",
    category: "saas",
    href: "/portfolio/edge-analytics",
    preview: "analytics",
    tags: ["Next.js", "WebSockets", "Redis", "Charts"],
    tone: "cyan",
    layoutClassName: "md:col-span-2",
  },
];
