# Guided Implementation Path

This run uses the workflow before implementation.

Prototype brief:

- Improve: Help players notice the one HUD signal that matters right now.
- Watch out: More clarity can worsen clutter, screen coverage, and attention fatigue.
- Useful pattern: Keep core resources permanent; reveal contextual signals by priority and state.
- Smallest test: One contextual signal slot with five verification states.
- Check: Idle, damaged, buffed, pickup-nearby, and objective-updated states never show more than one contextual signal.

Implementation chosen:

- Keep health and stamina permanent.
- Add `priority`, `tuning`, and `verificationStates`.
- Add one contextual signal slot.
- Add debug visibility for why a signal appears.
- Add non-goals rejecting a quest panel, settings menu, minimap, full redesign, and final art pass.

Observed behavior:

The run does not simply write fewer lines. It changes the implementation surface from multiple permanent panels to one priority-driven reveal rule.
