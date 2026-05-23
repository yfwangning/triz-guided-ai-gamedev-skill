# Example: Combat Depth Without More Buttons

## Target
- Feature: Moment-to-moment combat decisions.
- Desired improvement: Add tactical depth and enemy readability.
- Current limitation: Combat feels repetitive because the best action is often the same attack.
- Constraints: Do not add new buttons, menus, or long tutorials.

## Core contradiction
We want to improve player decision-making.
But this may worsen input complexity, cognitive load, and balance workload.

## TRIZ principles selected
1. Local quality - make the same attack behave differently against specific enemy states.
2. Dynamics - tune state windows, damage multipliers, and interrupt timing through data.
3. Feedback - expose enemy state clearly with readable effects and debug labels.
4. Cheap disposables - use placeholder VFX and a greybox encounter before final polish.

## Options

### Option A - Low-cost prototype
- Concept: Add three enemy states that alter the existing attack outcome.
- Implementation: `guarding` reduces damage but can be broken, `exposed` takes bonus damage, `charging` can be interrupted.
- Risk: State feedback may be too subtle.
- Verify by: Run one test encounter and confirm players react differently without new controls.

### Option B - Balanced production path
- Concept: Build a small state-reaction table per enemy type.
- Implementation: Data file maps enemy state plus hit type to result, feedback, and tuning values.
- Risk: Table can grow too quickly.
- Verify by: Add three enemies and check that each has one distinct readable reaction.

### Option C - Ambitious version
- Concept: Combat director adjusts enemy state timing based on player style.
- Implementation: Track repeated actions and vary enemy state windows to encourage adaptation.
- Risk: Dynamic behavior may feel unfair if not telegraphed.
- Verify by: Compare player decision diversity across two short playtests.

## Recommended next action
Build Option A as a vertical slice in one test arena before touching the full combat system.

## Acceptance criteria
- No new player input is added.
- At least three enemy states produce visibly different outcomes.
- State durations and multipliers are configurable.
- Debug output shows current state, hit result, and applied multiplier.
- A five-minute playtest produces at least two distinct player responses.
