# Guided Output: HUD Clarity Without Clutter

Prototype brief:
- Improve: Help players notice the one HUD signal that matters right now.
- Watch out: More clarity can worsen clutter, screen coverage, and attention fatigue.
- Useful pattern: Reveal information by priority and context instead of adding another permanent panel.
- Smallest test: In one combat room, keep health and stamina permanent, then reveal status, objective, and pickup hints only when their priority changes.
- Check: Capture desktop and small-screen screenshots for idle, damaged, buffed, pickup-nearby, and objective-updated states.

Implementation slice:
- Add a `hudSignalPriority` config with `persistent`, `urgent`, `recentChange`, and `hidden` states.
- Reuse one compact signal slot for status effects, objective hints, and pickup prompts.
- Add debug labels that show why each signal is currently visible or hidden.
- Keep timing values configurable: reveal duration, urgent threshold, fade delay, and max stacked signals.

Non-goals:
- Do not add a new permanent quest panel.
- Do not redesign the whole HUD.
- Do not add a settings menu in the first prototype.
- Do not create final art assets before the priority rules are tested.

Acceptance criteria:
- The most urgent decision is visible within one glance.
- HUD elements do not cover the player, enemy, or primary attack lane.
- Small-screen screenshots have no overlapping text.
- A playtester can explain which signal mattered and why it appeared.
