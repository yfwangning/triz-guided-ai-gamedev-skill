# Real Small Repo HUD A/B Test

Date: 2026-05-23

This test uses one self-contained small repo, not just markdown sample outputs.

Repo: [../real-repos/tiny-roguelite-hud](../real-repos/tiny-roguelite-hud)

## Shared Request

```text
Players miss important information, but the HUD is already noisy.
Make important information clearer without adding another big UI panel.
```

## Test Setup

The repo contains:

- `baseline/` - the same starting project.
- `runs/no-workflow/` - implementation path without the workflow guardrail.
- `runs/guided/` - implementation path with the prototype-brief workflow.
- `transcripts/no-workflow.md` and `transcripts/guided.md` - recorded implementation paths.
- `scripts/compare.mjs` - automated comparison script.

Run:

```bash
npm --prefix evals/real-repos/tiny-roguelite-hud test
```

## Result

```text
Tiny roguelite HUD repo A/B passed.
Baseline total lines: 104
No-workflow player-facing surfaces: 8
No-workflow total lines: 214
Guided player-facing surfaces: 2
Guided verification states: 5
Guided damaged visible signals: 1
Guided total lines: 225
```

## Interpretation

The no-workflow version tries to improve clarity by adding more permanent player-facing surfaces:

- resource panel;
- quest panel;
- status panel;
- pickup panel;
- combat log;
- minimap;
- settings panel;
- tutorial panel.

That is exactly the failure mode this project is meant to prevent: answering a noisy HUD with more HUD.

The guided version does not simply reduce code size. It adds slightly more code because it includes priority rules, non-goals, debug visibility, and verification states. The key difference is implementation direction:

- keeps only core resources permanently visible;
- adds one contextual signal slot;
- reveals only the highest-priority signal;
- rejects a permanent quest panel, settings menu, minimap, full redesign, and final art pass;
- defines five verification states.

## What This Proves

This supports the narrower claim:

> The workflow can change what the agent chooses to build before code is written.

In this small repo, "do not overbuild" is not measured by line count. It is measured by whether the implementation preserves the request constraint: clearer information without another big UI panel.

## Limitations

This is a controlled local A/B implementation, not a double-blind external LLM benchmark. A stronger future test would run the same repo through two independent live agent sessions and compare:

- prompts;
- transcripts;
- code diff;
- screenshots;
- playtest notes;
- regressions.
