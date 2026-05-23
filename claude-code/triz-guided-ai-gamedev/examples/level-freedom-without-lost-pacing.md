# Example: Level Freedom Without Lost Pacing

## Target
- Feature: Semi-open level pathing.
- Desired improvement: Give players more freedom to choose routes and discover optional spaces.
- Current limitation: The level feels linear and predictable.
- Constraints: Preserve encounter pacing and avoid expensive content expansion.

## Core contradiction
We want to improve exploration freedom.
But this may worsen pacing, narrative clarity, and production cost.

## TRIZ principles selected
1. Segmentation - split the level into critical path, optional loops, and reward pockets.
2. Local quality - allow freedom in contained zones instead of globally opening the whole level.
3. Feedback - use playtest markers to see where players get lost or bored.
4. Cheap disposables - greybox alternate routes before final art.

## Options

### Option A - Low-cost prototype
- Concept: Add one optional loop that reconnects before the next critical encounter.
- Implementation: Greybox a side route with a light reward, one risk, and one sightline back to the main path.
- Risk: The reward may not justify the detour.
- Verify by: Track whether players notice, choose, and complete the loop without losing the main objective.

### Option B - Balanced production path
- Concept: Build modular exploration pockets between critical path beats.
- Implementation: Use repeatable layout rules: entrance clue, choice point, risk, reward, reconnect.
- Risk: Pockets may feel formulaic.
- Verify by: Playtest three pockets and compare time-to-return and reward satisfaction.

### Option C - Ambitious version
- Concept: Dynamic pacing controller that adjusts optional encounters.
- Implementation: Enable or soften optional events based on player health, time, and recent failures.
- Risk: Hidden pacing control can reduce player trust.
- Verify by: Compare pacing curves across multiple player skill levels.

## Recommended next action
Build Option A in greybox with debug markers for entry, choice, reward, reconnect, and time spent.

## Acceptance criteria
- The critical path remains readable from the choice point.
- Optional route returns before the next major encounter.
- The route uses placeholder geometry only.
- Playtest notes include whether the player felt rewarded or distracted.
- No global level structure rewrite is required.
