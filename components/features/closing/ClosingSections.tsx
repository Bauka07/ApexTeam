"use client";

import { useUiStore } from "@/store/useUiStore";

import { ContactBriefSection } from "./components/ContactBriefSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { CLOSING_LOCALIZATION } from "./config/closing.locales";

export function ClosingSections() {
  const { language } = useUiStore();
  const content = CLOSING_LOCALIZATION[language];

  return (
    <>
      <WorkflowSection content={content.workflow} />
      <TestimonialsSection content={content.testimonials} />
      <ContactBriefSection content={content.brief} />
    </>
  );
}

export default ClosingSections;
