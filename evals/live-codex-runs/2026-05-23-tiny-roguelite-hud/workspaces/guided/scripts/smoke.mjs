#!/usr/bin/env node
import { hudConfig, renderHud } from "../src/hud.js";

if (typeof renderHud !== "function") {
  throw new Error("Expected renderHud export.");
}

if (!hudConfig || !Array.isArray(hudConfig.playerFacingSurfaces)) {
  throw new Error("Expected hudConfig.playerFacingSurfaces.");
}

const root = { innerHTML: "" };

renderHud(root);

if (!root.innerHTML.includes('class="vitals-card"')) {
  throw new Error("Expected vitals card markup.");
}

if (!root.innerHTML.includes('class="objective-chip"')) {
  throw new Error("Expected objective chip markup.");
}

if (!root.innerHTML.includes('class="alert-pill"')) {
  throw new Error("Expected threat callout markup for warning state.");
}

const quietRoot = { innerHTML: "" };

renderHud(quietRoot, {
  health: 88,
  stamina: 90,
  poisonSeconds: 0,
  quest: "Reach the stairs",
  pickup: "",
  warning: "",
});

if (quietRoot.innerHTML.includes('class="alert-pill"')) {
  throw new Error("Did not expect threat callout markup for calm state.");
}

if (quietRoot.innerHTML.includes('class="pickup-chip"')) {
  throw new Error("Did not expect nearby pickup markup when nothing is present.");
}

if (!quietRoot.innerHTML.includes("Stable")) {
  throw new Error("Expected stable state chip when no urgent status is active.");
}

console.log("Smoke test passed.");
