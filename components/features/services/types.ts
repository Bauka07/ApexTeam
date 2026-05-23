export type ServiceIconName =
  | "browser"
  | "smartphone"
  | "network"
  | "pen-tool"
  | "life-buoy";

export type ServiceCardTone = "cyan" | "blue" | "violet";
export type ServiceItemId =
  | "websites"
  | "mobile-apps"
  | "complex-systems"
  | "product-design"
  | "support-growth";
export type ServiceVisualKind = "code" | "mobile" | "systems" | "design" | "support";

export interface ServiceItemConfig {
  id: ServiceItemId;
  orderLabel: string;
  href: string;
  icon: ServiceIconName;
  tone: ServiceCardTone;
  layoutClassName: string;
  isFeatured?: boolean;
  visual: ServiceVisualKind;
}

export interface ServiceCopy {
  description: string;
  title: string;
  visualLines?: string[];
}

export interface LocalizedServiceItem extends ServiceItemConfig, ServiceCopy {}

export interface ServicesLocalizedContent {
  detailLabel: string;
  description: string;
  eyebrow: string;
  sectionId: string;
  services: Record<ServiceItemId, ServiceCopy>;
  title: string;
}

export interface ServicesSectionProps {
  className?: string;
}
