import { InteractiveGlowLink } from "@/components/ui/InteractiveGlowLink";

import type { HeroAction } from "../types";

interface HeroActionLinkProps {
  action: HeroAction;
}

export function HeroActionLink({ action }: HeroActionLinkProps) {
  return (
    <InteractiveGlowLink
      href={action.href}
      size="lg"
      variant={action.variant === "primary" ? "primary" : "secondary"}
    >
      {action.label}
    </InteractiveGlowLink>
  );
}
