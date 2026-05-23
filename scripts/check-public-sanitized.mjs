#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ignoredDirs = new Set([".git", "node_modules", "dist", "build"]);
const binaryExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".pdf",
  ".zip",
]);

const blockedPatterns = [
  {
    label: "local macOS user path",
    regex: /\/Users\/[A-Za-z0-9._-]+/g,
  },
  {
    label: "private tmp path",
    regex: /\/private\/tmp/g,
  },
  {
    label: "raw Codex backend endpoint",
    regex: /chatgpt\.com\/backend-api/g,
  },
  {
    label: "possible API key assignment",
    regex: /\b(?:api[_-]?key|secret|access[_-]?token)\s*[:=]\s*["'][^"']{8,}["']/gi,
  },
];

function extensionOf(file) {
  const match = file.match(/\.[^.]+$/);
  return match ? match[0].toLowerCase() : "";
}

function listFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".github") {
      continue;
    }

    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...listFiles(path));
      }
      continue;
    }

    if (entry.isFile() && !binaryExtensions.has(extensionOf(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

const findings = [];

for (const file of listFiles(".")) {
  if (statSync(file).size > 2_000_000) {
    continue;
  }

  const text = readFileSync(file, "utf8");

  for (const pattern of blockedPatterns) {
    for (const match of text.matchAll(pattern.regex)) {
      const line = text.slice(0, match.index).split("\n").length;
      findings.push(`${file}:${line} ${pattern.label}: ${match[0]}`);
    }
  }
}

if (findings.length > 0) {
  console.error("Public sanitization check failed:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log("Public files look sanitized.");
