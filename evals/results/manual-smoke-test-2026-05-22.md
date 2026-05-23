# Manual Smoke Test - 2026-05-22

This is a lightweight manual test of whether the guided prototype workflow produces actionable prototype plans from vague game-dev prompts.

## Validation

- Command: `python3 <codex-home>/skills/.system/skill-creator/scripts/quick_validate.py claude-code/triz-guided-ai-gamedev`
- Result: `Skill is valid!`

## Scoring Method

Each output is scored with `evals/checklist.md`.

- 0: missing or vague.
- 1: present but not actionable.
- 2: clear and actionable.
- Pass threshold: 13 out of 16.

Categories:

- Target clarity.
- Tradeoff quality.
- Solution-pattern fit.
- Solution-pattern concreteness.
- Prototype smallness.
- Implementation usefulness.
- Verification usefulness.
- Scope control.

## Results

| Eval prompt | Score | Pass | Notes |
|---|---:|---|---|
| Combat depth | 16/16 | Yes | Keeps existing input, adds state-based reactions, includes debug and playtest checks. |
| HUD clarity | 15/16 | Yes | Uses priority and contextual reveal instead of adding more UI. Needs project-specific viewport targets for a perfect score. |
| AI art style | 16/16 | Yes | Requires canonical style approval, batch review, normalization, and in-game scale verification. |
| Passive trigger | 16/16 | Yes | Triggers on meaningful feature tradeoffs and skips narrow direct edits. |
| Explicit TRIZ principle mapping | 16/16 | Yes | Translates surprise vs learnability into separation, periodic action, feedback, and concrete boss-pattern variants. |

## Test Output Summaries

### Combat Depth

Prototype brief:

- Improve: Make action RPG combat less repetitive.
- Watch out: More tactical depth may increase input complexity, tutorials, balance burden, and cognitive load.
- Useful pattern: Reuse the same attack input, but change outcomes by enemy state.
- Smallest test: One greybox arena with three enemy states.
- Check: Debug labels and a five-minute playtest.

Smallest prototype:

- Add `guarding`, `exposed`, and `charging` states.
- Existing attack breaks guard, deals bonus damage, or interrupts depending on state.
- State windows, damage multipliers, and interrupt timing live in config.
- Add debug readout for enemy state, hit result, multiplier, and interrupt success.

Acceptance criteria:

- No new player input or long tutorial is added.
- The prototype can be tested in one encounter.
- Players make at least two distinct decisions using existing controls.
- Debug output makes state reactions visible.

Score: 16/16.

### HUD Clarity

Prototype brief:

- Improve: Help players notice the most important roguelite information.
- Watch out: More clarity may worsen clutter and attention fatigue.
- Useful pattern: Show information by priority and context instead of adding another permanent panel.
- Smallest test: One combat scenario with contextual HUD reveal.
- Check: Capture screenshots at idle, combat warning, pickup, status expiry, and quest update states.

Smallest prototype:

- Keep health and stamina persistent.
- Convert status effects, pickups, quest hints, and warnings into priority events.
- Show only the highest priority transient elements when the screen is busy.
- Reuse one compact indicator pattern for timed effects.
- Add desktop and small-screen screenshot checks.

Acceptance criteria:

- No permanent UI panel is added for the first prototype.
- The most urgent event is readable within one glance.
- UI elements do not overlap the playfield focus.
- Screenshot review covers normal and overloaded states.

Score: 15/16.

### AI Art Style

Prototype brief:

- Improve: Generate many fantasy item icons faster.
- Watch out: Higher content volume may worsen style consistency, review cost, and integration quality.
- Useful pattern: Approve one canonical icon before batching and review variants together.
- Smallest test: One approved icon, four controlled variants, normalization, and one contact sheet.
- Check: Contact-sheet review plus in-game scale check.

Smallest pipeline:

- Define canvas size, transparent background, silhouette rules, palette, lighting, outline, and naming.
- Generate one canonical icon first and approve it before batching.
- Generate four variants from the approved style anchor.
- Normalize size, trim, background, and export naming before import.
- Review candidates in one contact sheet and in a real inventory slot.

Acceptance criteria:

- No batch starts before one canonical icon is approved.
- Every asset has the same canvas, background, and naming rules.
- Rejection reasons are recorded.
- Icons are checked at actual in-game size.

Score: 16/16.

### Passive Trigger

Trigger case:

- Prompt: Make tactics-game units more distinct without making rules harder to learn.
- Expected behavior: Include a five-line prototype brief, then propose a small prototype.
- Result: Pass. The useful tradeoff is distinction versus learnability.

Skip case:

- Prompt: Rename `stamina` to `energy` in the player HUD component.
- Expected behavior: Skip the prototype brief and perform the direct edit.
- Result: Pass. There is no meaningful design tradeoff.

Score: 16/16.

### TRIZ Principle Mapping

Prompt:

```text
The boss phase 2 feels a bit boring. Make it more exciting, but do not make it feel like cheap random one-shots.
```

Prototype brief:

- Improve: Make boss phase 2 more exciting.
- Watch out: More excitement needs surprise/tension, but avoiding cheap random deaths needs readable learning.
- Useful pattern: Teach one readable attack, then add a delayed variant.
- Smallest test: One attack family with a readable base version and one delayed variant.
- Check: Log hit causes and playtest whether players can explain why they died.

Concrete solution pattern:

- Separation in time: teach the base attack early, then introduce the delayed variant later.
- Periodic action: repeat attacks in learnable cycles rather than randomizing every action.
- Feedback: use the same telegraph family and record hit causes.
- Partial or excessive action: exaggerate the timing window in the prototype to find readable limits.

Score: 16/16.

## Conclusion

The workflow is effective for early-stage game-dev planning. It consistently redirects vague requests away from broad feature expansion and toward:

- a named tradeoff,
- a small playable or reviewable prototype,
- concrete constraints,
- debug or review visibility,
- and acceptance criteria.

Remaining weakness: the eval is still manual. A stronger next step would be to add recorded model outputs or a small script that checks whether generated markdown contains the required sections.
