import type { PricingPlanConfig } from "../types";

export const PRICING_PLANS: PricingPlanConfig[] = [
  {
    id: "startup",
    ctaHref: "/contacts?plan=startup",
    tech: ["Next.js / React", "Tailwind", "PostgreSQL", "Fast Deployment"],
    tone: "cyan",
  },
  {
    id: "scale",
    ctaHref: "/contacts?plan=scale",
    isFeatured: true,
    tech: ["Go (PL)", "gRPC", "Next.js", "Docker"],
    tone: "violet",
  },
  {
    id: "enterprise",
    ctaHref: "/contacts?plan=enterprise",
    tech: ["High Availability", "Dedicated Team", "99.9% SLA", "Custom Infra"],
    tone: "blue",
  },
];
