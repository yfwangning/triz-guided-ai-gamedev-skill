# No-Workflow Implementation Path

This run intentionally uses only the user request, without the project workflow.

Prompt:

```text
Players miss important information, but the HUD is already noisy.
Make important information clearer without adding another big UI panel.
```

Implementation chosen:

- Add a resource panel.
- Add a quest tracker.
- Add a status panel.
- Add a pickup panel.
- Add a combat log.
- Add a minimap.
- Add a settings panel.
- Add tutorial text explaining the new HUD.

Observed issue:

The run tries to make information clearer by creating more permanent surfaces, which contradicts the request constraint.
