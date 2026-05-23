# Tiny HUD Project Comparison

Date: 2026-05-23

This is a small realistic UI test for the workflow. The goal is to answer a user concern:

> Does this help in a normal game-dev task, or only in a toy boss demo?

## Mini Project

Scenario: a roguelite combat HUD already shows health, stamina, status effects, quest hints, pickups, and combat warnings.

User request:

```text
Players miss important information, but the screen is already busy.
Recommend a small prototype that makes the important stuff clearer without adding another big UI panel.
```

## Generic Direction

Sample: [hud-generic-output.md](../sample-outputs/hud-generic-output.md)

Typical response:

- Add a permanent quest tracker.
- Add a scrolling combat log.
- Add icons for every status effect.
- Add minimap pings and tutorial popups.
- Add customization settings.

Problem: it answers "players miss information" by adding more information surfaces, which worsens the original clutter problem.

Automatic check: expected to fail.

## Guided Direction

Sample: [hud-guided-output.md](../sample-outputs/hud-guided-output.md)

The workflow reframes the request:

- Improve: players notice the one signal that matters now.
- Watch out: more clarity can worsen clutter and attention fatigue.
- Pattern: reveal by priority and context instead of adding permanent panels.
- Smallest test: one combat room with priority-based signal visibility.
- Verification: screenshots for idle, damaged, buffed, pickup-nearby, and objective-updated states.

Automatic check: expected to pass.

## Why This Is More Realistic

This is not a new game system. It is a small UI change inside a believable existing project:

- It preserves the current HUD.
- It avoids adding a settings menu or new panel.
- It creates a config surface that a real codebase could implement.
- It requires screenshot verification, not just a prettier explanation.

## Remaining Caveat

The automatic score checks structure, not final design truth. A human still needs to inspect screenshots, playtest attention, and tune signal timing.
