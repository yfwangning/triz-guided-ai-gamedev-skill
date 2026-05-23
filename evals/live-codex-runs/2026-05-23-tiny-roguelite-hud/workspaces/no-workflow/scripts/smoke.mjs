#!/usr/bin/env node
import { hudConfig, renderHud } from "../src/hud.js";

if (typeof renderHud !== "function") {
  throw new Error("Expected renderHud export.");
}

if (!hudConfig || !Array.isArray(hudConfig.playerFacingSurfaces)) {
  throw new Error("Expected hudConfig.playerFacingSurfaces.");
}

console.log("Smoke test passed.");
