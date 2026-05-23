export type HeroActionVariant = "primary" | "secondary";

export interface HeroAction {
  label: string;
  href: string;
  variant: HeroActionVariant;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface TerminalScript {
  command: string;
  responses: string[];
}

export interface HeroContent {
  badge: string;
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subtitle: string;
  actions: HeroAction[];
  stats: HeroStat[];
  terminal: {
    title: string;
    scripts: TerminalScript[];
  };
  tickerItems: string[];
}

export interface HeroProps {
  content?: HeroContent;
  className?: string;
}
