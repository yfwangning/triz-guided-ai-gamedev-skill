# Tiny Roguelite HUD Repo

This is a self-contained small repo used to test the workflow on the same starting project.

Shared request:

```text
Players miss important information, but the HUD is already noisy.
Make important information clearer without adding another big UI panel.
```

Structure:

- `baseline/` - the same starting project for both runs.
- `runs/no-workflow/` - direct implementation without the workflow guardrail.
- `runs/guided/` - implementation using the prototype-brief workflow.
- `transcripts/` - recorded implementation path for each run.
- `scripts/compare.mjs` - automated comparison.

Run:

```bash
npm test
```

This test is intentionally small. It does not claim to replace live playtests or full model transcript A/B testing. It checks whether the workflow changes the implementation direction on a realistic, runnable mini repo.
