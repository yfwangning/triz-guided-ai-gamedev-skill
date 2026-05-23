# Example: NPC Dialogue Variety Without Lore Chaos

## Target
- Feature: NPC ambient dialogue and quest-adjacent barks.
- Desired improvement: Increase variety and responsiveness.
- Current limitation: Repeated lines make the world feel static.
- Constraints: Preserve lore consistency and avoid hand-reviewing hundreds of lines.

## Core contradiction
We want to improve dialogue variety.
But this may worsen lore consistency, review cost, and narrative control.

## TRIZ principles selected
1. Nested doll - generate lines inside structured lore-safe containers.
2. Local quality - vary dialogue by NPC role, location, and current quest state.
3. Taking out - exclude topics, facts, and claims the generator is not allowed to invent.
4. Feedback - add review flags and sampling checks before shipping batches.

## Options

### Option A - Low-cost prototype
- Concept: Create a small dialogue card template with allowed topics and forbidden claims.
- Implementation: Generate ten lines for one NPC role using a strict schema and manual review.
- Risk: Lines may still sound generic.
- Verify by: Review against lore constraints and mark which lines are usable without edits.

### Option B - Balanced production path
- Concept: Build a dialogue generation pipeline with role and location packs.
- Implementation: Store tone, facts, banned topics, quest states, and examples in data files.
- Risk: Pipeline overhead may be too much for early production.
- Verify by: Batch-generate 50 lines and measure acceptance rate after review.

### Option C - Ambitious version
- Concept: Runtime dialogue selection with memory of recent lines and quest context.
- Implementation: Select from approved line pools using cooldowns, tags, and world-state filters.
- Risk: Requires more tooling and narrative QA.
- Verify by: Log repeated lines and context mismatches during playtests.

## Recommended next action
Build Option A for one town guard or shopkeeper, then measure usable-line rate before automating more.

## Acceptance criteria
- Every generated line includes speaker role, location, quest state, and lore tags.
- The template includes explicit forbidden claims.
- At least ten candidate lines are generated for one NPC role.
- Manual review labels lines as accepted, edit, or reject.
- No line is used at runtime until approved.
