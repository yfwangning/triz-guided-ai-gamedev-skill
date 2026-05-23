#!/usr/bin/env node
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const assetsDir = path.join(process.cwd(), "assets");
const svgFiles = readdirSync(assetsDir).filter((file) => file.endsWith(".svg")).sort();
const failures = [];

for (const file of svgFiles) {
  const fullPath = path.join(assetsDir, file);
  const text = readFileSync(fullPath, "utf8").trim();
  const openTags = text.match(/<svg\b/g) || [];
  const closeTags = text.match(/<\/svg>/g) || [];

  if (openTags.length !== 1) {
    failures.push(`${file}: expected one <svg> root, found ${openTags.length}`);
  }
  if (closeTags.length !== 1) {
    failures.push(`${file}: expected one </svg>, found ${closeTags.length}`);
  }
  if (!/<title\b[^>]*>[\s\S]+<\/title>/.test(text)) {
    failures.push(`${file}: missing <title>`);
  }
  if (!/<desc\b[^>]*>[\s\S]+<\/desc>/.test(text)) {
    failures.push(`${file}: missing <desc>`);
  }
  if (!/width="[^"]+"/.test(text) || !/height="[^"]+"/.test(text) || !/viewBox="[^"]+"/.test(text)) {
    failures.push(`${file}: missing width, height, or viewBox`);
  }
}

if (failures.length > 0) {
  console.error("SVG asset checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SVG assets look valid (${svgFiles.length} files).`);
