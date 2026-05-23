#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hudPlan } from "./no-workflow/game.js";
import {
  getVisibleSignals,
  nonGoals,
  scenarios,
  tuning,
  verificationStates,
} from "./guided/game.js";

const root = path.dirname(fileURLToPath(import.meta.url));

function countLines(dir) {
  let total = 0;
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isFile()) {
      total += readFileSync(fullPath, "utf8").split("\n").length;
    }
  }
  return total;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const noWorkflowLines = countLines(path.join(root, "no-workflow"));
const guidedLines = countLines(path.join(root, "guided"));
const noWorkflowAddsManySurfaces = hudPlan.permanentSurfaces.length >= 6;
const noWorkflowAddsSettings = hudPlan.permanentSurfaces.includes("settingsMenu");
const noWorkflowHasNoVerification = hudPlan.verificationStates.length === 0;

const damagedSignals = getVisibleSignals(scenarios.damaged);
const guidedHasPriorityRules = typeof tuning.urgentHealthThreshold === "number";
const guidedStaysSmall = damagedSignals.length <= tuning.maxContextSignals;
const guidedHasVerification = verificationStates.length >= 5;
const guidedAvoidsNewPanel = nonGoals.includes("no permanent quest panel");

assert(noWorkflowAddsManySurfaces, "Expected no-workflow version to add many permanent surfaces.");
assert(noWorkflowAddsSettings, "Expected no-workflow version to add a settings menu.");
assert(noWorkflowHasNoVerification, "Expected no-workflow version to lack screenshot/playtest states.");
assert(guidedHasPriorityRules, "Expected guided version to define priority rules.");
assert(guidedStaysSmall, "Expected guided version to show only the highest-priority contextual signal.");
assert(guidedHasVerification, "Expected guided version to define verification states.");
assert(guidedAvoidsNewPanel, "Expected guided version to keep no permanent quest panel as a non-goal.");

console.log("Tiny HUD A/B fixture passed.");
console.log(`No-workflow permanent surfaces: ${hudPlan.permanentSurfaces.length}`);
console.log(`No-workflow total lines: ${noWorkflowLines}`);
console.log(`Guided visible signals in damaged state: ${damagedSignals.length}`);
console.log(`Guided verification states: ${verificationStates.length}`);
console.log(`Guided total lines: ${guidedLines}`);
