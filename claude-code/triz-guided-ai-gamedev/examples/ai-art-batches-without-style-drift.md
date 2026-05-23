# Example: AI Art Batches Without Style Drift

## Target
- Feature: AI-assisted icon, prop, or portrait batch production.
- Desired improvement: Generate more usable visual assets quickly.
- Current limitation: Manual production is slow.
- Constraints: Preserve style consistency and avoid reworking every asset by hand.

## Core contradiction
We want to improve content volume and production speed.
But this may worsen style coherence, review cost, and integration quality.

## TRIZ principles selected
1. Prior action - define style rules, canvas specs, naming, and acceptance criteria before generation.
2. Copying - produce controlled variants from one approved canonical example.
3. Intermediary - use a normalization script or import step between AI output and game assets.
4. Feedback - add visual review gates and rejection reasons.

## Options

### Option A - Low-cost prototype
- Concept: Generate one canonical asset and four variants in the same style.
- Implementation: Create prompt rules for silhouette, palette, lighting, outline, canvas size, and background.
- Risk: The first asset may not represent the final style well enough.
- Verify by: Place all five assets in a simple in-game UI or scene and compare at final size.

### Option B - Balanced production path
- Concept: Build a batch pipeline with review and normalization.
- Implementation: Generate candidates, remove backgrounds, resize, name, and place them in a contact sheet.
- Risk: Automation can hide subtle quality issues.
- Verify by: Review a contact sheet with pass/fail labels and in-game scale checks.

### Option C - Ambitious version
- Concept: Asset family generator for multiple categories with style anchors.
- Implementation: Maintain per-category prompt templates, reference boards, and import scripts.
- Risk: Style anchors may drift across categories.
- Verify by: Run cross-category review against a style bible.

## Recommended next action
Build Option A first: one canonical asset, four variants, one contact sheet, and one in-game placement screenshot.

## Acceptance criteria
- Canvas size, transparent background, naming, and import path are specified.
- At least one approved canonical example exists before batch generation.
- Variants are reviewed together, not one at a time.
- Rejection reasons are recorded.
- Final assets are checked at real in-game scale.
