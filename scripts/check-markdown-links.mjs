#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([".git", "node_modules"]);

function collectMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (entry.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function isExternal(link) {
  return /^(https?:|mailto:|tel:)/i.test(link);
}

const broken = [];

for (const file of collectMarkdownFiles(root)) {
  const text = readFileSync(file, "utf8");
  const relativeFile = path.relative(root, file);
  const links = text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g);

  for (const match of links) {
    let link = match[1].trim();
    if (!link || link.startsWith("#") || isExternal(link)) continue;

    link = link.replace(/^<|>$/g, "");
    const [targetPath] = link.split("#");
    if (!targetPath) continue;

    const resolved = path.resolve(path.dirname(file), targetPath);
    if (!resolved.startsWith(root) || !existsSync(resolved)) {
      broken.push(`${relativeFile}: ${match[1]} -> ${path.relative(root, resolved)}`);
    }
  }
}

if (broken.length > 0) {
  console.error("Broken local markdown links:");
  for (const item of broken) console.error(`- ${item}`);
  process.exit(1);
}

console.log("Markdown links resolve.");
