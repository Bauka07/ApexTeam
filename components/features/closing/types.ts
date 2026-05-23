export type WorkflowStepId =
  | "discovery"
  | "architecture"
  | "development"
  | "qa"
  | "release";

export type ProjectTypeId = "website" | "mobile" | "crm" | "ecosystem";
export type BudgetRangeId = "under-3000" | "3000-7000" | "7000-plus";

export interface WorkflowStepConfig {
  id: WorkflowStepId;
  order: string;
}

export interface WorkflowStepCopy {
  details: string;
  title: string;
}

export interface LocalizedWorkflowStep
  extends WorkflowStepConfig,
    WorkflowStepCopy {}

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
  workflow: {
    description: string;
    eyebrow: string;
    steps: Record<WorkflowStepId, WorkflowStepCopy>;
    title: string;
  };
}
