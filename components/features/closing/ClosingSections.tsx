"use client";

import { useUiStore } from "@/store/useUiStore";

import { ContactBriefSection } from "./components/ContactBriefSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { CLOSING_LOCALIZATION } from "./config/closing.locales";

export function ClosingSections() {
  const { language } = useUiStore();
  const content = CLOSING_LOCALIZATION[language];

  return (
    <>
      <WorkflowSection content={content.workflow} />
      <ContactBriefSection content={content.brief} />
    </>
  );
}

export default ClosingSections;
