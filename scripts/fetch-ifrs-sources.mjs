#!/usr/bin/env node
/**
 * Fetch verified IFRS source snapshots from GitHub.
 *
 * This script is deliberately licence-aware:
 * - permissive/MIT sources can be downloaded into vendor snapshots
 * - GPL/reference-only/unknown-licence sources are recorded in the manifest
 *   but are not copied unless explicitly allowed
 * - missing repositories are recorded, never guessed
 *
 * Usage:
 *   node scripts/fetch-ifrs-sources.mjs --output ./vendor/ifrs-sources
 *
 * Optional:
 *   GITHUB_TOKEN=...             raises GitHub API rate limits
 *   --allow-gpl true             permit GPL source snapshots
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .map((value, index, list) => (value.startsWith("--") ? [value.slice(2), list[index + 1]] : null))
    .filter(Boolean),
);

const outputRoot = args.output ?? "./vendor/ifrs-sources";
const allowGpl = args["allow-gpl"] === "true";
const token = process.env.GITHUB_TOKEN;

const SOURCES = [
  {
    key: "ramyatrouny-ifrs-skill",
    repo: "ramyatrouny/ifrs-skill",
    mode: "verified-files",
    expectedLicense: "MIT",
    files: [
      "LICENSE",
      "ifrs/SKILL.md",
      "ifrs/standards-reference.md",
      "ifrs/workflows.md",
      "ifrs/compliance-templates.md",
      "ifrs/transition-guide.md",
    ],
  },
  {
    key: "ramyatrouny-ifrs-quiz",
    repo: "ramyatrouny/ifrs-quiz",
    mode: "mcq-folder",
    expectedLicense: null,
    folder: "MCQs/",
  },
  {
    key: "api-evangelist-accounting-standards",
    repo: "api-evangelist/accounting-standards",
    mode: "reference-only",
    expectedLicense: null,
  },
  {
    key: "charleshoffman-fac-ifrs",
    repo: "CharlesHoffmanCPA/fac-ifrs",
    mode: "reference-only",
    expectedLicense: "GPL-3.0",
  },
];

const PERMISSIVE = new Set([
  "MIT",
  "Apache-2.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "ISC",
  "CC0-1.0",
  "Unlicense",
]);

function headers() {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "ahmedelmadni-ifrs-ingestion",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function api(endpoint, allow404 = false) {
  const response = await fetch(`https://api.github.com${endpoint}`, { headers: headers() });
  if (allow404 && response.status === 404) return null;
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body.slice(0, 400)}`);
  }
  return response.json();
}

async function download(url, destination) {
  const response = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  if (!response.ok) throw new Error(`Download failed ${response.status}: ${url}`);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

async function repoSnapshot(source) {
  const repo = await api(`/repos/${source.repo}`, true);
  if (!repo) {
    return {
      key: source.key,
      repo: source.repo,
      status: "unavailable",
      usage_mode: "unavailable",
      files: [],
    };
  }

  const license = await api(`/repos/${source.repo}/license`, true);
  const spdx = license?.license?.spdx_id && license.license.spdx_id !== "NOASSERTION"
    ? license.license.spdx_id
    : null;

  const branch = repo.default_branch;
  const branchInfo = await api(`/repos/${source.repo}/branches/${encodeURIComponent(branch)}`);
  const revision = branchInfo.commit.sha;

  let usageMode = source.mode === "reference-only" ? "reference_only" : "review_required";
  if (PERMISSIVE.has(spdx)) usageMode = "reuse_with_attribution";
  if (spdx?.startsWith("GPL-") && allowGpl) usageMode = "reuse_gpl";
  if (spdx?.startsWith("GPL-") && !allowGpl) usageMode = "reference_only";
  if (!spdx && source.mode !== "reference-only") usageMode = "review_required";

  const item = {
    key: source.key,
    repo: source.repo,
    html_url: repo.html_url,
    status: "available",
    default_branch: branch,
    revision,
    detected_license: spdx,
    expected_license: source.expectedLicense,
    usage_mode: usageMode,
    files: [],
  };

  const destinationRoot = path.join(outputRoot, source.key);

  if (usageMode === "reference_only" || usageMode === "review_required") {
    return item;
  }

  if (source.mode === "verified-files") {
    for (const filePath of source.files ?? []) {
      const file = await api(
        `/repos/${source.repo}/contents/${filePath.split("/").map(encodeURIComponent).join("/")}?ref=${revision}`,
        true,
      );
      if (!file?.download_url) continue;
      const destination = path.join(destinationRoot, filePath);
      await download(file.download_url, destination);
      item.files.push(filePath);
    }
  }

  if (source.mode === "mcq-folder") {
    const tree = await api(`/repos/${source.repo}/git/trees/${revision}?recursive=1`);
    const candidates = (tree.tree ?? [])
      .filter((entry) => entry.type === "blob")
      .map((entry) => entry.path)
      .filter((filePath) => filePath.startsWith(source.folder ?? "MCQs/"))
      .filter((filePath) => /\.(json|jsonl|csv|ya?ml)$/i.test(filePath));

    for (const filePath of candidates) {
      const file = await api(
        `/repos/${source.repo}/contents/${filePath.split("/").map(encodeURIComponent).join("/")}?ref=${revision}`,
      );
      if (!file?.download_url) continue;
      await download(file.download_url, path.join(destinationRoot, filePath));
      item.files.push(filePath);
    }
  }

  return item;
}

await fs.mkdir(outputRoot, { recursive: true });

const manifest = {
  schema_version: "1.0.0",
  fetched_at: new Date().toISOString(),
  sources: [],
};

for (const source of SOURCES) {
  try {
    const snapshot = await repoSnapshot(source);
    manifest.sources.push(snapshot);
    console.log(
      `${source.repo}: ${snapshot.status} / ${snapshot.usage_mode} / ${snapshot.files.length} files`,
    );
  } catch (error) {
    manifest.sources.push({
      key: source.key,
      repo: source.repo,
      status: "error",
      usage_mode: "blocked",
      error: error instanceof Error ? error.message : String(error),
      files: [],
    });
  }
}

await fs.writeFile(
  path.join(outputRoot, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8",
);

console.log(`Manifest written to ${path.join(outputRoot, "manifest.json")}`);
