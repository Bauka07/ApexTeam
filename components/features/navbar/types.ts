export interface NavbarLinkItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavbarProps {
  className?: string;
  ctaHref?: string;
}

export type NavbarOrientation = "desktop" | "mobile";
