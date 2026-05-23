export type PricingPlanId = "startup" | "scale" | "enterprise";
export type PricingPlanTone = "cyan" | "blue" | "violet";

export interface PricingPlanConfig {
  id: PricingPlanId;
  ctaHref: string;
  isFeatured?: boolean;
  tech: string[];
  tone: PricingPlanTone;
}

export interface PricingPlanCopy {
  ctaLabel: string;
  description: string;
  features: string[];
  name: string;
  price: string;
  target: string;
}

export interface LocalizedPricingPlan
  extends PricingPlanConfig,
    PricingPlanCopy {}

export interface PricingLocalizedContent {
  description: string;
  eyebrow: string;
  popularLabel: string;
  plans: Record<PricingPlanId, PricingPlanCopy>;
  title: string;
}
