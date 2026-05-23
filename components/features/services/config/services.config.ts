import type { ServiceItemConfig } from "../types";

export const SERVICES_SECTION_ID = "services";

export const SERVICE_ITEMS: ServiceItemConfig[] = [
  {
    id: "websites",
    orderLabel: "// 01",
    href: "/services/websites",
    icon: "browser",
    tone: "cyan",
    layoutClassName: "md:col-span-2",
    isFeatured: true,
    visual: "code",
  },
  {
    id: "mobile-apps",
    orderLabel: "// 02",
    href: "/services/mobile-apps",
    icon: "smartphone",
    tone: "blue",
    layoutClassName: "md:col-span-1",
    visual: "mobile",
  },
  {
    id: "complex-systems",
    orderLabel: "// 03",
    href: "/services/systems",
    icon: "network",
    tone: "violet",
    layoutClassName: "md:col-span-1",
    visual: "systems",
  },
  {
    id: "product-design",
    orderLabel: "// 04",
    href: "/services/design",
    icon: "pen-tool",
    tone: "cyan",
    layoutClassName: "md:col-span-1",
    visual: "design",
  },
  {
    id: "support-growth",
    orderLabel: "// 05",
    href: "/services/support",
    icon: "life-buoy",
    tone: "blue",
    layoutClassName: "md:col-span-1",
    visual: "support",
  },
];
