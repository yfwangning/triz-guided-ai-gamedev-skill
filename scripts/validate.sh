#!/usr/bin/env bash
set -euo pipefail

node --check demo/boss-fight-comparison/game.js
node --check scripts/check-eval-output.mjs
node --check scripts/check-markdown-links.mjs
node --check scripts/check-svg-assets.mjs
node --check scripts/check-public-sanitized.mjs
node --check scripts/validate-skill.mjs
node --check evals/fixtures/tiny-hud-ab/baseline/game.js
node --check evals/fixtures/tiny-hud-ab/no-workflow/game.js
node --check evals/fixtures/tiny-hud-ab/guided/game.js
node --check evals/fixtures/tiny-hud-ab/check.mjs
node --check evals/real-repos/tiny-roguelite-hud/baseline/src/hud.js
node --check evals/real-repos/tiny-roguelite-hud/runs/no-workflow/src/hud.js
node --check evals/real-repos/tiny-roguelite-hud/runs/guided/src/hud.js
node --check evals/real-repos/tiny-roguelite-hud/scripts/compare.mjs
node --check evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/no-workflow/src/hud.js
node --check evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/no-workflow/scripts/smoke.mjs
node --check evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/guided/src/hud.js
node --check evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/guided/scripts/smoke.mjs
bash -n scripts/install-claude-skill.sh
bash -n scripts/install-codex-agents.sh
node scripts/check-markdown-links.mjs
node scripts/check-svg-assets.mjs
node scripts/check-public-sanitized.mjs
node evals/fixtures/tiny-hud-ab/check.mjs
npm --prefix evals/real-repos/tiny-roguelite-hud test
npm --prefix evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/no-workflow test
npm --prefix evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/guided test
node scripts/validate-skill.mjs
node scripts/check-eval-output.mjs evals/sample-outputs/combat-depth-good.md
node scripts/check-eval-output.mjs evals/sample-outputs/double-diamond-boss-good.md
node scripts/check-eval-output.mjs evals/sample-outputs/hud-guided-output.md
node scripts/check-eval-output.mjs evals/sample-outputs/gpt-image-2-controlled-output.md
if node scripts/check-eval-output.mjs evals/sample-outputs/boss-generic-output.md >/tmp/triz-guided-ai-gamedev-generic-eval.log 2>&1; then
  echo "Expected generic boss output to fail eval, but it passed." >&2
  exit 1
else
  echo "Generic boss output correctly fails eval."
fi
if node scripts/check-eval-output.mjs evals/sample-outputs/hud-generic-output.md >/tmp/triz-guided-ai-gamedev-hud-generic-eval.log 2>&1; then
  echo "Expected generic HUD output to fail eval, but it passed." >&2
  exit 1
else
  echo "Generic HUD output correctly fails eval."
fi

echo "Validation passed."
