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
  const f = (r: number) => cashflows.reduce((a, c, t) => a + c / Math.pow(1 + r, t), 0);
  const df = (r: number) => cashflows.reduce((a, c, t) => a - (t * c) / Math.pow(1 + r, t + 1), 0);

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
  const payment = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
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

// ============== Phase 2 ==============

/** DCF with terminal value (Gordon growth) */
export function dcf(ratePct: number, cashflows: number[], terminalGrowthPct = 0) {
  const r = ratePct / 100;
  const g = terminalGrowthPct / 100;
  const pvCashflows = cashflows.reduce((acc, c, t) => acc + c / Math.pow(1 + r, t + 1), 0);
  const lastCf = cashflows[cashflows.length - 1] ?? 0;
  const terminalValue = r > g ? (lastCf * (1 + g)) / (r - g) : 0;
  const pvTerminal = terminalValue / Math.pow(1 + r, cashflows.length);
  return { pvCashflows, terminalValue, pvTerminal, enterpriseValue: pvCashflows + pvTerminal };
}

/** Discounted Payback */
export function payback(cashflows: number[], ratePct = 0) {
  const r = ratePct / 100;
  let cum = 0;
  const cumulative: number[] = [];
  let years: number | null = null;
  for (let t = 0; t < cashflows.length; t++) {
    const disc = cashflows[t] / Math.pow(1 + r, t);
    const prev = cum;
    cum += disc;
    cumulative.push(cum);
    if (years === null && cum >= 0 && t > 0) {
      const fraction = prev < 0 && disc !== 0 ? -prev / disc : 0;
      years = t - 1 + fraction;
    }
  }
  return { years, cumulative };
}

/** Profitability Index */
export function profitabilityIndex(ratePct: number, cashflows: number[]): number {
  if (cashflows.length === 0) return 0;
  const initial = cashflows[0];
  const r = ratePct / 100;
  const pvIn = cashflows.slice(1).reduce((acc, c, t) => acc + c / Math.pow(1 + r, t + 1), 0);
  return initial < 0 ? pvIn / Math.abs(initial) : 0;
}

/** Effective Annual Rate */
export function effectiveRate(nominalPct: number, periodsPerYear: number): number {
  const r = nominalPct / 100;
  return (Math.pow(1 + r / periodsPerYear, periodsPerYear) - 1) * 100;
}

/** Bond price (clean) */
export function bondPrice(
  face: number,
  couponPct: number,
  yieldPct: number,
  years: number,
  freq = 2,
) {
  const n = Math.round(years * freq);
  const c = (face * couponPct) / 100 / freq;
  const y = yieldPct / 100 / freq;
  const pvCoupons = y === 0 ? c * n : c * ((1 - Math.pow(1 + y, -n)) / y);
  const pvFace = face / Math.pow(1 + y, n);
  return { price: pvCoupons + pvFace, coupon: c, pvCoupons, pvFace };
}

/** IFRS 16 Lease Liability + amortization schedule */
export interface LeaseRow {
  period: number;
  opening: number;
  payment: number;
  interest: number;
  principal: number;
  closing: number;
}
export function leaseLiability(
  payment: number,
  annualRatePct: number,
  years: number,
  paymentsPerYear = 12,
  timing: "end" | "begin" = "end",
): { initialLiability: number; rows: LeaseRow[]; totalInterest: number } {
  const n = Math.round(years * paymentsPerYear);
  const r = annualRatePct / 100 / paymentsPerYear;
  const pvOrdinary = r === 0 ? payment * n : payment * ((1 - Math.pow(1 + r, -n)) / r);
  const initialLiability = timing === "begin" ? pvOrdinary * (1 + r) : pvOrdinary;
  const rows: LeaseRow[] = [];
  let balance = initialLiability;
  let totalInterest = 0;
  for (let i = 1; i <= n; i++) {
    const opening = balance;
    let interest: number, principal: number;
    if (timing === "begin") {
      principal = Math.min(payment, balance);
      balance -= principal;
      interest = balance * r;
      balance += interest;
    } else {
      interest = balance * r;
      principal = payment - interest;
      balance = Math.max(0, balance - principal);
    }
    totalInterest += interest;
    rows.push({ period: i, opening, payment, interest, principal, closing: balance });
  }
  return { initialLiability, rows, totalInterest };
}

/** Saudi Zakat */
export function zakat(base: number, ratePct = 2.5775): number {
  return Math.max(0, base) * (ratePct / 100);
}
/** Withholding Tax */
export function wht(amount: number, ratePct: number) {
  const tax = amount * (ratePct / 100);
  return { tax, net: amount - tax };
}
/** Corporate Tax */
export function corporateTax(profit: number, ratePct = 20) {
  const tax = Math.max(0, profit) * (ratePct / 100);
  return { tax, profitAfterTax: profit - tax };
}
/** Deferred Tax — IAS 12 */
export function deferredTax(carryingAmount: number, taxBase: number, ratePct: number) {
  const td = carryingAmount - taxBase;
  const dt = td * (ratePct / 100);
  return {
    temporaryDifference: td,
    deferredTaxLiability: dt > 0 ? dt : 0,
    deferredTaxAsset: dt < 0 ? -dt : 0,
  };
}

/** Depreciation schedules */
export interface DepRow {
  year: number;
  expense: number;
  accumulated: number;
  bookValue: number;
}
export function depreciation(
  cost: number,
  salvage: number,
  life: number,
  method: "SL" | "DDB" | "SYD",
): DepRow[] {
  const rows: DepRow[] = [];
  let book = cost;
  let acc = 0;
  if (method === "SL") {
    const exp = (cost - salvage) / life;
    for (let i = 1; i <= life; i++) {
      acc += exp;
      book = cost - acc;
      rows.push({ year: i, expense: exp, accumulated: acc, bookValue: book });
    }
  } else if (method === "DDB") {
    const rate = 2 / life;
    for (let i = 1; i <= life; i++) {
      let exp = book * rate;
      if (book - exp < salvage) exp = book - salvage;
      if (exp < 0) exp = 0;
      acc += exp;
      book -= exp;
      rows.push({ year: i, expense: exp, accumulated: acc, bookValue: book });
    }
  } else {
    const sum = (life * (life + 1)) / 2;
    const base = cost - salvage;
    for (let i = 1; i <= life; i++) {
      const exp = (base * (life - i + 1)) / sum;
      acc += exp;
      book = cost - acc;
      rows.push({ year: i, expense: exp, accumulated: acc, bookValue: book });
    }
  }
  return rows;
}

/** Inventory valuation FIFO/LIFO/WA */
export interface InvTxn {
  type: "buy" | "sell";
  qty: number;
  price: number;
}
export function inventory(txns: InvTxn[], method: "FIFO" | "LIFO" | "WA") {
  let cogs = 0;
  if (method === "WA") {
    let qty = 0,
      value = 0;
    for (const t of txns) {
      if (t.type === "buy") {
        qty += t.qty;
        value += t.qty * t.price;
      } else {
        const avg = qty > 0 ? value / qty : 0;
        const sellQty = Math.min(t.qty, qty);
        cogs += sellQty * avg;
        value -= sellQty * avg;
        qty -= sellQty;
      }
    }
    return { cogs, endingQty: qty, endingValue: value };
  }
  const layers: { qty: number; price: number }[] = [];
  for (const t of txns) {
    if (t.type === "buy") layers.push({ qty: t.qty, price: t.price });
    else {
      let remaining = t.qty;
      while (remaining > 0 && layers.length > 0) {
        const idx = method === "FIFO" ? 0 : layers.length - 1;
        const layer = layers[idx];
        const take = Math.min(layer.qty, remaining);
        cogs += take * layer.price;
        layer.qty -= take;
        remaining -= take;
        if (layer.qty === 0) layers.splice(idx, 1);
      }
    }
  }
  const endingQty = layers.reduce((s, l) => s + l.qty, 0);
  const endingValue = layers.reduce((s, l) => s + l.qty * l.price, 0);
  return { cogs, endingQty, endingValue };
}

/** Financial ratios */
export interface RatiosInput {
  currentAssets: number;
  inventory: number;
  currentLiabilities: number;
  cash: number;
  totalAssets: number;
  totalLiabilities: number;
  totalEquity: number;
  revenue: number;
  cogs: number;
  netIncome: number;
  ebit: number;
  interestExpense: number;
  receivables: number;
  payables: number;
}
export function ratios(i: RatiosInput) {
  const safe = (a: number, b: number) => (b === 0 ? 0 : a / b);
  return {
    currentRatio: safe(i.currentAssets, i.currentLiabilities),
    quickRatio: safe(i.currentAssets - i.inventory, i.currentLiabilities),
    cashRatio: safe(i.cash, i.currentLiabilities),
    debtToEquity: safe(i.totalLiabilities, i.totalEquity),
    debtToAssets: safe(i.totalLiabilities, i.totalAssets),
    equityRatio: safe(i.totalEquity, i.totalAssets),
    grossMargin: safe(i.revenue - i.cogs, i.revenue) * 100,
    netMargin: safe(i.netIncome, i.revenue) * 100,
    roa: safe(i.netIncome, i.totalAssets) * 100,
    roe: safe(i.netIncome, i.totalEquity) * 100,
    assetTurnover: safe(i.revenue, i.totalAssets),
    interestCoverage: safe(i.ebit, i.interestExpense),
    inventoryDays: safe(i.inventory, i.cogs) * 365,
    receivableDays: safe(i.receivables, i.revenue) * 365,
    payableDays: safe(i.payables, i.cogs) * 365,
  };
}
