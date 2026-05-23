# Tiny HUD Code A/B Test

Date: 2026-05-23

This test moves beyond static sample outputs. It creates a tiny runnable HUD project and compares two implementation paths for the same request.

## Shared Request

```text
The HUD is noisy but players still miss important stuff.
Make important information clearer without adding another big UI panel.
```

## Fixture

Path: [../fixtures/tiny-hud-ab](../fixtures/tiny-hud-ab)

Versions:

- `baseline/` - starting HUD with health, stamina, status, quest, pickup, and warning signals competing for attention.
- `no-workflow/` - generic implementation that adds more permanent UI surfaces.
- `guided/` - tradeoff-guided implementation that keeps core resources permanent and reveals only the highest-priority contextual signal.

## Result

Command:

```bash
node evals/fixtures/tiny-hud-ab/check.mjs
```

Output:

```text
Tiny HUD A/B fixture passed.
No-workflow permanent surfaces: 7
No-workflow total lines: 188
Guided visible signals in damaged state: 1
Guided verification states: 5
Guided total lines: 220
```

## What Changed Without The Workflow

The no-workflow version answers "players miss information" by adding more information surfaces:

- resource panel;
- quest panel;
- combat log;
- status grid;
- minimap;
- settings menu;
- tutorial popups.

This is a plausible generic AI response, but it worsens the original tradeoff: clearer information by adding more clutter.

## What Changed With The Workflow

The guided version reframes the request:

- Improve: players notice the one signal that matters now.
- Watch out: permanent HUD growth increases clutter and attention fatigue.
- Useful pattern: keep core resources permanent, reveal contextual signals by priority.
- Smallest test: one signal slot, five verification states, configurable thresholds.
- Check: inspect idle, damaged, buffed, pickup-nearby, and objective-updated states.

The guided version does not minimize line count at all costs. In this fixture it has more lines because it adds priority rules, debug visibility, and verification states. The important difference is implementation surface: it adds one contextual signal rule instead of seven permanent UI surfaces.

## Interpretation

This supports the project's claim in a narrower, more realistic way:

> The workflow does not merely say "write less code." It changes what the agent chooses to build before code is written.

For this HUD task, the useful metric is not just lines of code. It is whether the implementation preserves the original constraint: make information clearer without adding another big UI panel.

## Limitations

This is still a controlled fixture, not a recorded live Claude/Codex transcript. A stronger next test would run the same prompt against an actual coding agent twice:

1. without the project instructions;
2. with the installed `AGENTS.md` or Claude skill;
3. then compare transcripts, code diff, screenshots, and playtest notes.
