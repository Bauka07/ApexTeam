export type WorkflowStepId =
  | "discovery"
  | "architecture"
  | "development"
  | "qa"
  | "release";

export type ProjectTypeId = "website" | "mobile" | "crm" | "ecosystem";
export type BudgetRangeId = "under-3000" | "3000-7000" | "7000-plus";
export type TestimonialId = "techcorp" | "startupx" | "bigflow" | "servicepro";
export type TestimonialTone = "cyan" | "blue" | "violet" | "amber";

export interface WorkflowStepConfig {
  id: WorkflowStepId;
  order: string;
}

export interface TestimonialConfig {
  avatarInitials: string;
  id: TestimonialId;
  isFeatured?: boolean;
  rating: number;
  tone: TestimonialTone;
}

export interface WorkflowStepCopy {
  details: string;
  title: string;
}

export interface LocalizedWorkflowStep
  extends WorkflowStepConfig,
    WorkflowStepCopy {}

export interface TestimonialCopy {
  clientName: string;
  company: string;
  projectTag: string;
  quote: string;
  role: string;
}

export interface LocalizedTestimonial
  extends TestimonialConfig,
    TestimonialCopy {}

export interface BriefOptionCopy {
  label: string;
}

export interface ClosingLocalizedContent {
  brief: {
    budgetLabel: string;
    budgets: Record<BudgetRangeId, BriefOptionCopy>;
    description: string;
    fields: {
      contact: {
        label: string;
        placeholder: string;
      };
      details: {
        label: string;
        placeholder: string;
      };
      name: {
        label: string;
        placeholder: string;
      };
    };
    projectTypeLabel: string;
    projectTypes: Record<ProjectTypeId, BriefOptionCopy>;
    submitLabel: string;
    successMessage: string;
    title: string;
  };
  testimonials: {
    description: string;
    eyebrow: string;
    items: Record<TestimonialId, TestimonialCopy>;
    title: string;
    verifiedLabel: string;
  };
  workflow: {
    description: string;
    eyebrow: string;
    steps: Record<WorkflowStepId, WorkflowStepCopy>;
    title: string;
  };
}
