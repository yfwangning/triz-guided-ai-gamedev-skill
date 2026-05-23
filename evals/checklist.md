# Evaluation Checklist

Use this checklist to review whether an output is useful enough to hand to a coding agent or prototype directly. The user should not need to know TRIZ terminology.

## Required Structure

- Identifies the target feature or system.
- States the desired improvement in plain language.
- Names the worsening risk or tradeoff.
- Selects two to four useful solution patterns and explains why they fit.
- Translates each selected pattern into concrete game-dev actions.
- Proposes the smallest useful prototype slice.
- Includes a verification method or playtest check.
- Includes non-goals or constraints that prevent scope creep.
- Produces acceptance criteria that can be checked.

## Quality Signals

- The prototype is smaller than the full imagined feature.
- The output changes the problem framing, not just the feature list.
- Tuning values are configurable where practical.
- Debugging, logging, screenshots, or playtest notes are included when useful.
- The plan protects existing architecture and naming conventions.
- The recommendation is specific enough that a coding agent can start.

## Warning Signs

- It jumps straight to a large system or rewrite.
- It adds controls, menus, content, or dependencies without addressing the tradeoff.
- It uses TRIZ terms in user-facing output without translating them into game-dev decisions.
- It has no verification step.
- It has no acceptance criteria.
- It treats placeholder assets or greybox work as a failure rather than a deliberate prototype stage.

## Manual Scoring

Score each output from 0 to 2:

- 0: missing or vague.
- 1: present but not actionable.
- 2: clear and actionable.

Categories:

- Target clarity.
- Tradeoff quality.
- Solution-pattern fit.
- Solution-pattern concreteness.
- Prototype smallness.
- Implementation usefulness.
- Verification usefulness.
- Scope control.

Suggested pass threshold: 13 out of 16.

## Sample Evaluation Prompts

See:

- [prompts/combat-depth.md](prompts/combat-depth.md)
- [prompts/hud-clarity.md](prompts/hud-clarity.md)
- [prompts/ai-art-style.md](prompts/ai-art-style.md)
- [prompts/passive-trigger.md](prompts/passive-trigger.md)
- [prompts/double-diamond-boss.md](prompts/double-diamond-boss.md)
- [prompts/triz-principle-mapping.md](prompts/triz-principle-mapping.md)
- [expected-output-shape.md](expected-output-shape.md)

## Recorded Results

- [results/manual-smoke-test-2026-05-22.md](results/manual-smoke-test-2026-05-22.md)
- [results/mode-comparison-boss-2026-05-22.md](results/mode-comparison-boss-2026-05-22.md)
- [results/tiny-hud-project-2026-05-23.md](results/tiny-hud-project-2026-05-23.md)
- [results/tiny-hud-code-ab-2026-05-23.md](results/tiny-hud-code-ab-2026-05-23.md)
- [results/real-small-repo-hud-ab-2026-05-23.md](results/real-small-repo-hud-ab-2026-05-23.md)
- [results/live-codex-hud-ab-2026-05-23.md](results/live-codex-hud-ab-2026-05-23.md)

## Automatic Check

Run:

```bash
node scripts/check-eval-output.mjs evals/sample-outputs/combat-depth-good.md
node scripts/check-eval-output.mjs evals/sample-outputs/double-diamond-boss-good.md
node scripts/check-eval-output.mjs evals/sample-outputs/hud-guided-output.md
node evals/fixtures/tiny-hud-ab/check.mjs
npm --prefix evals/real-repos/tiny-roguelite-hud test
npm --prefix evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/no-workflow test
npm --prefix evals/live-codex-runs/2026-05-23-tiny-roguelite-hud/workspaces/guided test
```

The automatic check is intentionally lightweight. It catches missing structure, obvious scope creep, and excessive user-facing TRIZ terminology, but human review should still judge design quality.
