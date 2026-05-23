import type {
  BudgetRangeId,
  ProjectTypeId,
  TestimonialConfig,
  WorkflowStepConfig,
} from "../types";

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

export const TESTIMONIALS: TestimonialConfig[] = [
  {
    avatarInitials: "AS",
    id: "techcorp",
    rating: 5,
    tone: "cyan",
  },
  {
    avatarInitials: "MR",
    id: "startupx",
    isFeatured: true,
    rating: 5,
    tone: "violet",
  },
  {
    avatarInitials: "EK",
    id: "bigflow",
    rating: 5,
    tone: "blue",
  },
  {
    avatarInitials: "DN",
    id: "servicepro",
    rating: 5,
    tone: "amber",
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
