import { HeroActionLink } from "./HeroActionLink";
import type { HeroAction } from "../types";

interface HeroActionsProps {
  actions: HeroAction[];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => (
        <HeroActionLink action={action} key={action.label} />
      ))}
    </div>
  );
}
