export type ServiceIconName =
  | "browser"
  | "smartphone"
  | "network"
  | "pen-tool"
  | "life-buoy";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName;
}

export interface ServicesContent {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface ServicesSectionProps {
  content?: ServicesContent;
  className?: string;
}
