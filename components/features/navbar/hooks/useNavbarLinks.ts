"use client";

import { useQuery } from "@tanstack/react-query";

import { getNavbarLinks } from "../api/navbarApi";
import { NAVBAR_LINKS } from "../config/navbar.config";
import type { NavbarLinkItem } from "../types";

export function useNavbarLinks() {
  return useQuery<NavbarLinkItem[]>({
    queryKey: ["navbar", "links"],
    queryFn: getNavbarLinks,
    initialData: NAVBAR_LINKS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}
