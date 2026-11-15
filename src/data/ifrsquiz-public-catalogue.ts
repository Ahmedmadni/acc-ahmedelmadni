/**
 * Public catalogue numbers shown on https://ifrsquiz.com/ (15 November 2026).
 * IMPORTANT: these numbers describe a third-party site. They are NOT questions
 * imported to this project's local bank and must never inflate its counters.
 * Their interactive question bodies, options and source answer keys were not
 * accessible through automated public HTTP requests (Cloudflare 403).
 */
export const IFRSQUIZ_CATALOGUE_SOURCE = "https://ifrsquiz.com/";
export const IFRSQUIZ_OBSERVED_AT = "2026-11-15";
export const IFRSQUIZ_EXTERNAL_COUNTS: Readonly<Record<string, number>> = {
  "IAS 1": 10,
  "IAS 2": 10,
  "IAS 7": 10,
  "IAS 8": 10,
  "IAS 10": 10,
  "IAS 12": 30,
  "IAS 16": 15,
  "IAS 19": 25,
  "IAS 20": 10,
  "IAS 21": 25,
  "IAS 23": 10,
  "IAS 24": 10,
  "IAS 26": 10,
  "IAS 27": 10,
  "IAS 28": 15,
  "IAS 29": 10,
  "IAS 32": 25,
  "IAS 33": 25,
  "IAS 34": 10,
  "IAS 36": 30,
  "IAS 37": 20,
  "IAS 38": 10,
  "IAS 40": 10,
  "IAS 41": 10,
  "IFRS 1": 10,
  "IFRS 2": 25,
  "IFRS 3": 30,
  "IFRS 5": 10,
  "IFRS 7": 10,
  "IFRS 8": 10,
  "IFRS 9": 40,
  "IFRS 10": 25,
  "IFRS 11": 10,
  "IFRS 12": 10,
  "IFRS 13": 25,
  "IFRS 15": 40,
  "IFRS 16": 40,
  "IFRS 17": 10,
  "IFRS 18": 10
};
export const IFRSQUIZ_EXTERNAL_TOTAL = Object.values(IFRSQUIZ_EXTERNAL_COUNTS).reduce((sum, count) => sum + count, 0);
export const IFRSQUIZ_EXTERNAL_STANDARDS = Object.keys(IFRSQUIZ_EXTERNAL_COUNTS).length;
