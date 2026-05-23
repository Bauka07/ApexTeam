import { NAVBAR_LINKS } from "../config/navbar.config";
import type { NavbarLinkItem } from "../types";

export async function getNavbarLinks(): Promise<NavbarLinkItem[]> {
  return NAVBAR_LINKS;
}
