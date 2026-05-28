// Pure financial calculation helpers — no side effects.

export const round = (n: number, d = 2) =>
  Number.isFinite(n) ? Math.round(n * 10 ** d) / 10 ** d : 0;

export const fmtMoney = (n: number, currency = "SAR", locale = "ar-SA") => {
  if (!Number.isFinite(n)) return "—";
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return `${round(n).toLocaleString()} ${currency}`;
  }
};

export const fmtNum = (n: number, locale = "ar-SA", d = 2) =>
  Number.isFinite(n)
    ? new Intl.NumberFormat(locale, { maximumFractionDigits: d }).format(round(n, d))
    : "—";

/** Present Value of a single future amount: PV = FV / (1+r)^n */
export function pv(fv: number, ratePct: number, periods: number): number {
  const r = ratePct / 100;
  return fv / Math.pow(1 + r, periods);
}

/** Present Value of an ordinary annuity (payments at period end) */
export function pvAnnuity(pmt: number, ratePct: number, periods: number): number {
  const r = ratePct / 100;
  if (r === 0) return pmt * periods;
  return pmt * ((1 - Math.pow(1 + r, -periods)) / r);
}

/** Future Value of a single present amount + optional annuity */
export function fv(pv0: number, ratePct: number, periods: number, pmt = 0): number {
  const r = ratePct / 100;
  const fvLump = pv0 * Math.pow(1 + r, periods);
  const fvAnn = r === 0 ? pmt * periods : pmt * ((Math.pow(1 + r, periods) - 1) / r);
  return fvLump + fvAnn;
}

/** NPV given an initial outflow (cashflows[0] typically negative) */
export function npv(ratePct: number, cashflows: number[]): number {
  const r = ratePct / 100;
  return cashflows.reduce((acc, c, t) => acc + c / Math.pow(1 + r, t), 0);
}

/** IRR via Newton-Raphson with bisection fallback. Returns percent. */
export function irr(cashflows: number[], guessPct = 10): number | null {
  if (cashflows.length < 2) return null;
  const f = (r: number) =>
    cashflows.reduce((a, c, t) => a + c / Math.pow(1 + r, t), 0);
  const df = (r: number) =>
    cashflows.reduce((a, c, t) => a - (t * c) / Math.pow(1 + r, t + 1), 0);

  let r = guessPct / 100;
  for (let i = 0; i < 100; i++) {
    const v = f(r);
    const d = df(r);
    if (!Number.isFinite(v) || !Number.isFinite(d) || d === 0) break;
    const nr = r - v / d;
    if (!Number.isFinite(nr)) break;
    if (Math.abs(nr - r) < 1e-8) return nr * 100;
    r = nr;
    if (r <= -0.999) r = -0.99;
  }
  // bisection fallback
  let lo = -0.99,
    hi = 10;
  let flo = f(lo);
  let fhi = f(hi);
  if (flo * fhi > 0) return null;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    const fm = f(mid);
    if (Math.abs(fm) < 1e-7) return mid * 100;
    if (flo * fm < 0) {
      hi = mid;
      fhi = fm;
    } else {
      lo = mid;
      flo = fm;
    }
  }
  return ((lo + hi) / 2) * 100;
}

/** Monthly amortization schedule for an installment loan */
export interface AmortRow {
  i: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}
export function amortize(
  principal: number,
  annualRatePct: number,
  years: number,
  paymentsPerYear = 12,
): { payment: number; rows: AmortRow[]; totalInterest: number } {
  const n = Math.round(years * paymentsPerYear);
  const r = annualRatePct / 100 / paymentsPerYear;
  const payment =
    r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  const rows: AmortRow[] = [];
  let balance = principal;
  let totalInterest = 0;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPart = payment - interest;
    balance = Math.max(0, balance - principalPart);
    totalInterest += interest;
    rows.push({ i, payment, interest, principal: principalPart, balance });
  }
  return { payment, rows, totalInterest };
}

/** VAT calculations. mode = "exclusive" (base→total) or "inclusive" (total→base) */
export function vat(amount: number, ratePct: number, mode: "exclusive" | "inclusive") {
  const r = ratePct / 100;
  if (mode === "exclusive") {
    const tax = amount * r;
    return { base: amount, tax, total: amount + tax };
  }
  const base = amount / (1 + r);
  return { base, tax: amount - base, total: amount };
}
