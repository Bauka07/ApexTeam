"use client";

import Link from "next/link";

import { NAVBAR_COPY } from "../config/navbar.config";
import { classNames } from "../lib/classNames";

export interface CtaButtonProps {
  href: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function CtaButton({ href, fullWidth = false, onClick }: CtaButtonProps) {
  return (
    <Link
      className={classNames(
        "inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 text-sm font-semibold tracking-normal text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-violet-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-0 active:scale-100",
        fullWidth && "w-full",
      )}
      href={href}
      onClick={onClick}
    >
      {NAVBAR_COPY.ctaLabel}
    </Link>
  );
}
