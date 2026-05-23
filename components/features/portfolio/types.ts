export type PortfolioCategory = "web" | "mobile" | "saas";
export type PortfolioFilter = "all" | PortfolioCategory;
export type ProjectTone = "cyan" | "blue" | "violet";
export type ProjectPreviewKind = "commerce" | "mobile" | "crm" | "analytics";

export interface PortfolioProjectConfig {
  id: string;
  category: PortfolioCategory;
  href: string;
  preview: ProjectPreviewKind;
  tags: string[];
  tone: ProjectTone;
  layoutClassName: string;
}

export interface PortfolioProjectCopy {
  description: string;
  metric: string;
  name: string;
}

export interface LocalizedPortfolioProject
  extends PortfolioProjectConfig,
    PortfolioProjectCopy {}

export interface PortfolioLocalizedContent {
  description: string;
  eyebrow: string;
  filters: Record<PortfolioFilter, string>;
  projectCtaLabel: string;
  projects: Record<string, PortfolioProjectCopy>;
  title: string;
}
