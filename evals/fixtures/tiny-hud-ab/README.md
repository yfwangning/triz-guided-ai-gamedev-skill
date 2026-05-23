# Tiny HUD A/B Fixture

This fixture tests the project on a tiny but runnable game UI task.

Shared request:

```text
The HUD is noisy but players still miss important stuff.
Make important information clearer without adding another big UI panel.
```

Versions:

- `baseline/` - a small starting HUD with too many competing signals.
- `no-workflow/` - a generic "add more UI" implementation.
- `guided/` - a tradeoff-guided implementation with priority reveal rules.

Run the check:

```bash
node evals/fixtures/tiny-hud-ab/check.mjs
```

The check expects the no-workflow version to demonstrate scope creep and the guided version to preserve a small, testable slice.
