#!/usr/bin/env node
import { readFileSync } from "node:fs";

const skillPath = "claude-code/triz-guided-ai-gamedev/SKILL.md";
const text = readFileSync(skillPath, "utf8");
const match = text.match(/^---\n([\s\S]*?)\n---/);

if (!match) {
  console.error("SKILL.md is missing YAML frontmatter.");
  process.exit(1);
}

const frontmatter = match[1];
const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();
const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1]?.trim();

if (!name || !/^[a-z0-9-]+$/.test(name)) {
  console.error("SKILL.md frontmatter must include a lowercase hyphenated name.");
  process.exit(1);
}

if (!description || description.length < 80) {
  console.error("SKILL.md frontmatter must include a useful description.");
  process.exit(1);
}

if (!text.includes("Prototype brief:")) {
  console.error("SKILL.md should include the user-facing Prototype brief format.");
  process.exit(1);
}

console.log("Skill metadata looks valid.");
