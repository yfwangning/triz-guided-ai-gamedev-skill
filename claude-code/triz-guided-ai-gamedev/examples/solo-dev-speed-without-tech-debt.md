# Example: Solo Dev Speed Without Technical Debt

## Target
- Feature: Rapid feature prototyping workflow for a solo developer.
- Desired improvement: Build and test ideas faster.
- Current limitation: Prototypes often become messy production code.
- Constraints: Limited time, limited review capacity, and frequent design changes.

## Core contradiction
We want to improve development speed.
But this may worsen architecture quality, maintainability, and future iteration cost.

## TRIZ principles selected
1. Segmentation - separate prototype code, data, debug tools, and production paths.
2. Beforehand cushioning - add rollback points, tests, and debug switches before scaling.
3. Dynamics - keep tuning values in config so the prototype can change without rewrites.
4. Taking out - explicitly mark non-goals to avoid accidental scope expansion.

## Options

### Option A - Low-cost prototype
- Concept: Use a feature flag and a single vertical-slice test scene.
- Implementation: Add the smallest working path behind a toggle, with sample data and debug output.
- Risk: The prototype may be too isolated from real gameplay.
- Verify by: Build, run the test scene, and confirm the feature can be disabled cleanly.

### Option B - Balanced production path
- Concept: Create a prototype-to-production checklist.
- Implementation: Require ownership, data schema, tests, debug visibility, and migration notes before broad use.
- Risk: Checklist can slow experimentation if too heavy.
- Verify by: Apply it to two features and remove any steps that do not catch real risk.

### Option C - Ambitious version
- Concept: Build a reusable experiment harness.
- Implementation: Add scenario loading, parameter sweeps, quick reset, logs, and comparison captures.
- Risk: Tooling can become its own project.
- Verify by: Use the harness for three unrelated prototypes.

## Recommended next action
Build Option A for the next feature: one toggle, one test scene, one config file, one debug readout, and one cleanup note.

## Acceptance criteria
- The prototype can be disabled without deleting code.
- Game-specific values are configurable.
- The test scene or fixture demonstrates the full feature loop.
- Debug output explains what the feature is doing.
- A follow-up note states what must change before production use.
