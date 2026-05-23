"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useUiStore } from "@/store/useUiStore";

import { CtaButton } from "./components/CtaButton";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { Logo } from "./components/Logo";
import { NavLinks } from "./components/NavLinks";
import { ThemeToggle } from "./components/ThemeToggle";
import { NAVBAR_COPY } from "./config/navbar.config";
import { useNavbarLinks } from "./hooks/useNavbarLinks";
import { classNames } from "./lib/classNames";
import type { NavbarProps } from "./types";

export function Navbar({ className, ctaHref = "/contacts" }: NavbarProps) {
  const pathname = usePathname() ?? "/";
  const isMobileMenuOpen = useUiStore((state) => state.isMobileMenuOpen);
  const closeMobileMenu = useUiStore((state) => state.closeMobileMenu);
  const toggleMobileMenu = useUiStore((state) => state.toggleMobileMenu);
  const { data: navLinks = [] } = useNavbarLinks();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/50 dark:bg-black/70",
        className,
      )}
    >
      <nav
        aria-label={NAVBAR_COPY.mainNavigationLabel}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 min-[1120px]:grid min-[1120px]:h-20 min-[1120px]:grid-cols-[1fr_auto_1fr] min-[1120px]:px-8"
      >
        <div className="flex min-w-0 justify-start">
          <Logo onClick={closeMobileMenu} />
        </div>

        <div className="hidden justify-center min-[1120px]:flex">
          <NavLinks items={navLinks} pathname={pathname} />
        </div>

        <div className="hidden items-center justify-end gap-3 min-[1120px]:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <CtaButton href={ctaHref} />
        </div>

        <div className="flex items-center justify-end gap-2 min-[1120px]:hidden">
          <ThemeToggle />
          <button
            aria-controls={NAVBAR_COPY.mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? NAVBAR_COPY.closeMenuLabel
                : NAVBAR_COPY.openMenuLabel
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 dark:border-slate-800/70 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:text-cyan-200"
            onClick={toggleMobileMenu}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X aria-hidden size={20} strokeWidth={2.2} />
            ) : (
              <Menu aria-hidden size={20} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={classNames(
          "overflow-hidden border-t border-slate-200/50 bg-white/80 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out min-[1120px]:hidden dark:border-slate-800/50 dark:bg-black/80",
          isMobileMenuOpen
            ? "max-h-[32rem] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
        id={NAVBAR_COPY.mobileMenuId}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
          <NavLinks
            items={navLinks}
            onNavigate={closeMobileMenu}
            orientation="mobile"
            pathname={pathname}
          />

          <div className="flex flex-col gap-4 border-t border-slate-200/60 pt-4 dark:border-slate-800/60">
            <LanguageSwitcher className="self-start" />
            <CtaButton fullWidth href={ctaHref} onClick={closeMobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
