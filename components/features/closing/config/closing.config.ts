import type { BudgetRangeId, ProjectTypeId, WorkflowStepConfig } from "../types";

export const WORKFLOW_STEPS: WorkflowStepConfig[] = [
  {
    id: "discovery",
    order: "01",
  },
  {
    id: "architecture",
    order: "02",
  },
  {
    id: "development",
    order: "03",
  },
  {
    id: "qa",
    order: "04",
  },
  {
    id: "release",
    order: "05",
  },
];

export const PROJECT_TYPE_OPTIONS: ProjectTypeId[] = [
  "website",
  "mobile",
  "crm",
  "ecosystem",
];

export const BUDGET_OPTIONS: BudgetRangeId[] = [
  "under-3000",
  "3000-7000",
  "7000-plus",
];

export const CONTACT_EMAIL = "hello@apexteam.dev";
