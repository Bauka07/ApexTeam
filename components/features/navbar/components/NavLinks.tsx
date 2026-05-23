"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { classNames } from "../lib/classNames";
import type { NavbarLinkItem, NavbarOrientation } from "../types";

export interface NavLinksProps {
  items: NavbarLinkItem[];
  pathname: string;
  orientation?: NavbarOrientation;
  onNavigate?: () => void;
}

function isActiveRoute(pathname: string, href: string): boolean {
  const targetPath = href.split("#")[0] || "/";

  if (targetPath === "/") {
    return pathname === "/";
  }

  return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
}

export function NavLinks({
  items,
  pathname,
  orientation = "desktop",
  onNavigate,
}: NavLinksProps) {
  const isMobile = orientation === "mobile";

  return (
    <ul
      className={classNames(
        "flex",
        isMobile
          ? "flex-col gap-1"
          : "items-center justify-center gap-1 rounded-full border border-slate-200/50 bg-white/40 p-1 backdrop-blur-md dark:border-slate-800/50 dark:bg-white/[0.03]",
      )}
    >
      {items.map((item) => {
        const isActive = isActiveRoute(pathname, item.href);

        return (
          <li key={item.id}>
            <Link
              aria-current={isActive ? "page" : undefined}
              className={classNames(
                "group relative flex items-center gap-1 text-sm font-medium tracking-normal transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                isMobile
                  ? "rounded-lg px-4 py-3"
                  : "h-9 rounded-full px-3.5",
                isActive
                  ? "bg-slate-950 text-white shadow-sm shadow-blue-600/10 dark:bg-white dark:text-slate-950"
                  : "text-slate-500 hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white",
              )}
              href={item.href}
              onClick={onNavigate}
            >
              <span>{item.label}</span>
              {item.hasDropdown ? (
                <ChevronDown
                  aria-hidden
                  className={classNames(
                    "h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5",
                    isActive
                      ? "text-cyan-200 dark:text-blue-600"
                      : "text-slate-400 dark:text-slate-500",
                  )}
                  strokeWidth={2.2}
                />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
