"use client";

import { ArrowRight, Send } from "lucide-react";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import { classNames } from "@/components/ui/classNames";

import { BriefPill } from "./BriefPill";
import {
  BUDGET_OPTIONS,
  CONTACT_EMAIL,
  PROJECT_TYPE_OPTIONS,
} from "../config/closing.config";
import type {
  BudgetRangeId,
  ClosingLocalizedContent,
  ProjectTypeId,
} from "../types";

interface ContactBriefSectionProps {
  content: ClosingLocalizedContent["brief"];
}

export function ContactBriefSection({ content }: ContactBriefSectionProps) {
  const [selectedTypes, setSelectedTypes] = useState<ProjectTypeId[]>([
    "website",
  ]);
  const [selectedBudget, setSelectedBudget] =
    useState<BudgetRangeId>("3000-7000");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const typeLabels = selectedTypes
      .map((type) => content.projectTypes[type].label)
      .join(", ");
    const budgetLabel = content.budgets[selectedBudget].label;
    const body = [
      `${content.projectTypeLabel}: ${typeLabels}`,
      `${content.budgetLabel}: ${budgetLabel}`,
      `${content.fields.name.label}: ${name}`,
      `${content.fields.contact.label}: ${contact}`,
      `${content.fields.details.label}: ${details}`,
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "ApexTeam project brief",
    )}&body=${encodeURIComponent(body)}`;
  }, [contact, content, details, name, selectedBudget, selectedTypes]);

  function toggleProjectType(type: ProjectTypeId) {
    setSelectedTypes((current) => {
      if (current.includes(type)) {
        const nextTypes = current.filter((item) => item !== type);

        return nextTypes.length > 0 ? nextTypes : current;
      }

      return [...current, type];
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoHref;
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-white px-4 pb-28 pt-20 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8"
      id="brief"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/8" />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="font-mono text-sm font-semibold tracking-normal text-blue-600 dark:text-cyan-300">
            {"// APEXTEAM BRIEF"}
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <form
          className="apex-border-trail relative isolate overflow-hidden rounded-2xl bg-slate-200/70 p-px shadow-2xl shadow-blue-600/10 dark:bg-slate-800/80"
          onSubmit={handleSubmit}
        >
          <div className="relative z-10 rounded-[calc(1rem-1px)] bg-white p-5 dark:bg-zinc-950 sm:p-7">
            <div className="grid gap-8">
              <fieldset>
                <legend className="font-mono text-xs font-semibold uppercase tracking-normal text-slate-500 dark:text-slate-400">
                  {content.projectTypeLabel}
                </legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {PROJECT_TYPE_OPTIONS.map((type) => (
                    <BriefPill
                      isSelected={selectedTypes.includes(type)}
                      key={type}
                      label={content.projectTypes[type].label}
                      onClick={() => toggleProjectType(type)}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-mono text-xs font-semibold uppercase tracking-normal text-slate-500 dark:text-slate-400">
                  {content.budgetLabel}
                </legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {BUDGET_OPTIONS.map((budget) => (
                    <BriefPill
                      isSelected={selectedBudget === budget}
                      key={budget}
                      label={content.budgets[budget].label}
                      onClick={() => setSelectedBudget(budget)}
                    />
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="group/field grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {content.fields.name.label}
                  </span>
                  <input
                    className="h-12 rounded-xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-400/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)] dark:border-slate-800 dark:bg-white/[0.04] dark:text-white"
                    onChange={(event) => setName(event.target.value)}
                    placeholder={content.fields.name.placeholder}
                    type="text"
                    value={name}
                  />
                </label>
                <label className="group/field grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {content.fields.contact.label}
                  </span>
                  <input
                    className="h-12 rounded-xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-400/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)] dark:border-slate-800 dark:bg-white/[0.04] dark:text-white"
                    onChange={(event) => setContact(event.target.value)}
                    placeholder={content.fields.contact.placeholder}
                    type="text"
                    value={contact}
                  />
                </label>
              </div>

              <label className="group/field grid gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {content.fields.details.label}
                </span>
                <textarea
                  className="min-h-36 resize-none rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-400/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)] dark:border-slate-800 dark:bg-white/[0.04] dark:text-white"
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder={content.fields.details.placeholder}
                  value={details}
                />
              </label>

              <button
                className={classNames(
                  "group/submit relative isolate flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 text-sm font-semibold uppercase tracking-normal text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-violet-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                )}
                type="submit"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/submit:translate-x-[120%]" />
                <Send aria-hidden className="relative h-4 w-4" />
                <span className="relative">{content.submitLabel}</span>
                <ArrowRight
                  aria-hidden
                  className="relative h-4 w-4 transition-transform duration-200 group-hover/submit:translate-x-1"
                />
              </button>

              {submitted ? (
                <p className="text-center text-sm font-medium text-blue-600 dark:text-cyan-300">
                  {content.successMessage}
                </p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
