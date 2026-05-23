#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hudConfig as baselineConfig } from "../baseline/src/hud.js";
import { hudConfig as noWorkflowConfig } from "../runs/no-workflow/src/hud.js";
import {
  getContextSignals,
  hudConfig as guidedConfig,
  scenarios,
  tuning,
} from "../runs/guided/src/hud.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function countLines(dir) {
  let total = 0;
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      total += countLines(fullPath);
    } else {
      total += readFileSync(fullPath, "utf8").split("\n").length;
    }
  }
  return total;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const baselineLines = countLines(path.join(repoRoot, "baseline"));
const noWorkflowLines = countLines(path.join(repoRoot, "runs/no-workflow"));
const guidedLines = countLines(path.join(repoRoot, "runs/guided"));
const noWorkflowSurfaces = noWorkflowConfig.playerFacingSurfaces.length;
const guidedSurfaces = guidedConfig.playerFacingSurfaces.length;
const guidedDamagedSignals = getContextSignals(scenarios.damaged).length;
const guidedAllStatesSmall = Object.values(scenarios).every((state) => {
  return getContextSignals(state).length <= tuning.maxContextSignals;
});

assert(baselineConfig.playerFacingSurfaces.length === 1, "Baseline should start with one HUD surface pattern.");
assert(noWorkflowSurfaces >= 7, "No-workflow run should demonstrate added permanent surfaces.");
assert(noWorkflowConfig.verificationStates.length === 0, "No-workflow run should lack verification states.");
assert(noWorkflowConfig.nonGoals.length === 0, "No-workflow run should lack explicit non-goals.");
assert(guidedSurfaces <= 2, "Guided run should keep player-facing surfaces small.");
assert(guidedConfig.nonGoals.includes("no new permanent quest panel"), "Guided run should reject a new permanent quest panel.");
assert(guidedConfig.nonGoals.includes("no settings menu"), "Guided run should reject settings-menu scope creep.");
assert(guidedConfig.verificationStates.length >= 5, "Guided run should include verification states.");
assert(guidedDamagedSignals === 1, "Guided damaged state should reveal one highest-priority signal.");
assert(guidedAllStatesSmall, "Guided run should keep contextual signal count within maxContextSignals.");

console.log("Tiny roguelite HUD repo A/B passed.");
console.log(`Baseline total lines: ${baselineLines}`);
console.log(`No-workflow player-facing surfaces: ${noWorkflowSurfaces}`);
console.log(`No-workflow total lines: ${noWorkflowLines}`);
console.log(`Guided player-facing surfaces: ${guidedSurfaces}`);
console.log(`Guided verification states: ${guidedConfig.verificationStates.length}`);
console.log(`Guided damaged visible signals: ${guidedDamagedSignals}`);
console.log(`Guided total lines: ${guidedLines}`);
