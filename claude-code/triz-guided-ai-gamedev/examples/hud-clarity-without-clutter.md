# Example: HUD Clarity Without Clutter

## Target
- Feature: Combat HUD for status, resources, and objective information.
- Desired improvement: Help players understand what matters right now.
- Current limitation: Important information is hidden or scattered.
- Constraints: Avoid filling the screen with permanent UI panels.

## Core contradiction
We want to improve information clarity.
But this may worsen visual clutter, screen coverage, and attention fatigue.

## TRIZ principles selected
1. Taking out - remove information that is not relevant to the current moment.
2. Local quality - show different HUD layers only in the contexts where they matter.
3. Universality - reuse one compact indicator pattern for multiple statuses.
4. Beforehand cushioning - add layout tests or screenshots before scaling the HUD.

## Options

### Option A - Low-cost prototype
- Concept: Contextual HUD reveal for only urgent status and objective changes.
- Implementation: Show health and core resource permanently, reveal buffs/debuffs only when they change or are near expiry.
- Risk: Players may miss hidden information.
- Verify by: Screenshot three combat states and check whether the primary decision is visible within one glance.

### Option B - Balanced production path
- Concept: Priority-based HUD stack.
- Implementation: Assign each HUD element a priority, display mode, expiry rule, and conflict behavior.
- Risk: Requires careful tuning across enemy and encounter types.
- Verify by: Run a UI stress scene with overlapping effects and no text overlap.

### Option C - Ambitious version
- Concept: Adaptive HUD that responds to player mastery and encounter pressure.
- Implementation: Reduce persistent hints after repeated success, increase prompts during failure loops.
- Risk: Adaptive UI may feel inconsistent.
- Verify by: Compare novice and experienced playtest recordings.

## Recommended next action
Prototype Option A with one combat scenario and capture screenshots at idle, damaged, buffed, and objective-update states.

## Acceptance criteria
- The HUD never covers the main player and enemy silhouettes.
- Expiring status effects are visible only when relevant.
- The most urgent state has a clear visual priority.
- Mobile and desktop layouts avoid overlap.
- A style checklist confirms the new HUD matches existing UI.
