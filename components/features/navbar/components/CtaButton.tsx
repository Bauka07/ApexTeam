"use client";

import { InteractiveGlowLink } from "@/components/ui/InteractiveGlowLink";

import { NAVBAR_COPY } from "../config/navbar.config";

export interface CtaButtonProps {
  href: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function CtaButton({ href, fullWidth = false, onClick }: CtaButtonProps) {
  return (
    <InteractiveGlowLink
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
      size="sm"
      variant="primary"
    >
      {NAVBAR_COPY.ctaLabel}
    </InteractiveGlowLink>
  );
}
