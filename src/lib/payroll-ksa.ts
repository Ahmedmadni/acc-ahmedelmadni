// Saudi labor-law payroll calculations: end-of-service gratuity and GOSI
// contributions. Rates/ceilings are editable inputs, not hardcoded
// constants — GOSI rates and wage ceilings are set by regulation and have
// changed over time (including the 2024 GOSI reform), so a stale
// hardcoded value would be actively misleading in a financial tool.
// Defaults reflect the long-standing scheme; always confirm current rates
// with GOSI before relying on the output.

export type TerminationReason = "employer" | "resignation" | "contractEnd";

export interface GratuityInput {
  monthlyWage: number;
  yearsOfService: number;
  reason: TerminationReason;
}

export interface GratuityResult {
  firstFiveYearsPortion: number;
  remainingYearsPortion: number;
  fullGratuity: number;
  appliedFraction: number;
  finalGratuity: number;
}

/** Saudi Labor Law Art. 84: half a month's wage per year for the first five
 * years, a full month's wage per year after that. Resignation reduces the
 * amount on a sliding scale; termination by the employer or normal contract
 * end does not. */
export function calculateGratuity({
  monthlyWage,
  yearsOfService,
  reason,
}: GratuityInput): GratuityResult {
  const firstFiveYears = Math.min(Math.max(0, yearsOfService), 5);
  const remainingYears = Math.max(0, yearsOfService - 5);
  const firstFiveYearsPortion = firstFiveYears * (monthlyWage / 2);
  const remainingYearsPortion = remainingYears * monthlyWage;
  const fullGratuity = firstFiveYearsPortion + remainingYearsPortion;

  let appliedFraction = 1;
  if (reason === "resignation") {
    if (yearsOfService < 2) appliedFraction = 0;
    else if (yearsOfService < 5) appliedFraction = 1 / 3;
    else if (yearsOfService < 10) appliedFraction = 2 / 3;
    else appliedFraction = 1;
  }

  return {
    firstFiveYearsPortion,
    remainingYearsPortion,
    fullGratuity,
    appliedFraction,
    finalGratuity: fullGratuity * appliedFraction,
  };
}

export interface GosiRates {
  annuitiesEmployerPct: number;
  annuitiesEmployeePct: number;
  hazardsEmployerPct: number;
  sanedEmployerPct: number;
  sanedEmployeePct: number;
}

export const DEFAULT_GOSI_RATES: GosiRates = {
  annuitiesEmployerPct: 9,
  annuitiesEmployeePct: 9,
  hazardsEmployerPct: 2,
  sanedEmployerPct: 1,
  sanedEmployeePct: 1,
};

export const DEFAULT_GOSI_CEILING = 45000;
export const DEFAULT_GOSI_FLOOR = 1500;

export interface GosiInput {
  isSaudi: boolean;
  subjectWage: number;
  ceiling: number;
  floor: number;
  rates: GosiRates;
}

export interface GosiResult {
  contributoryWage: number;
  employerPct: number;
  employeePct: number;
  employerAmount: number;
  employeeAmount: number;
  totalAmount: number;
}

/** Saudis are covered by both annuities (pension) and SANED (unemployment
 * insurance) in addition to occupational hazards; non-Saudis are only
 * covered by occupational hazards, paid entirely by the employer. */
export function calculateGosi({
  isSaudi,
  subjectWage,
  ceiling,
  floor,
  rates,
}: GosiInput): GosiResult {
  const contributoryWage = Math.min(Math.max(subjectWage, floor || 0), ceiling || Infinity);

  if (!isSaudi) {
    const employerPct = rates.hazardsEmployerPct;
    const employerAmount = contributoryWage * (employerPct / 100);
    return {
      contributoryWage,
      employerPct,
      employeePct: 0,
      employerAmount,
      employeeAmount: 0,
      totalAmount: employerAmount,
    };
  }

  const employerPct =
    rates.annuitiesEmployerPct + rates.hazardsEmployerPct + rates.sanedEmployerPct;
  const employeePct = rates.annuitiesEmployeePct + rates.sanedEmployeePct;
  const employerAmount = contributoryWage * (employerPct / 100);
  const employeeAmount = contributoryWage * (employeePct / 100);

  return {
    contributoryWage,
    employerPct,
    employeePct,
    employerAmount,
    employeeAmount,
    totalAmount: employerAmount + employeeAmount,
  };
}
