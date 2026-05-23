# Live Codex A/B Run: Tiny Roguelite HUD

Date: 2026-05-23

This run used the same tiny static HTML/CSS/JS repo, the same model (`gpt-5.4`), and the same natural-language prompt twice.

The only intended difference:

- `no-workflow`: no project `AGENTS.md`
- `guided`: includes this project's TRIZ + Double Diamond `AGENTS.md`

## Prompt

```text
Players miss important information, but the HUD is already noisy.
Make important information clearer without adding another big UI panel.

Modify this tiny HTML/CSS/JS repo directly. Keep it runnable. Run npm test before finishing.
Do not write a report in the workspace; implement the change.
```

## Saved Evidence

| Artifact | no-workflow | guided |
| --- | --- | --- |
| Complete Codex transcript | [transcripts/no-workflow.jsonl](transcripts/no-workflow.jsonl) | [transcripts/guided.jsonl](transcripts/guided.jsonl) |
| Stderr log | [transcripts/no-workflow.stderr](transcripts/no-workflow.stderr) | [transcripts/guided.stderr](transcripts/guided.stderr) |
| Final workspace | [workspaces/no-workflow](workspaces/no-workflow) | [workspaces/guided](workspaces/guided) |
| Screenshot | [screenshots/no-workflow-desktop.png](screenshots/no-workflow-desktop.png) | [screenshots/guided-desktop.png](screenshots/guided-desktop.png) |

The JSONL transcripts preserve the full Codex turn structure, tool calls, patches, and final messages. Local machine paths and internal service URLs were sanitized before publishing.

## Screenshot Preview

### no-workflow

![no-workflow desktop result](screenshots/no-workflow-desktop.png)

### guided

![guided desktop result](screenshots/guided-desktop.png)

## Test Results

Both final workspaces passed:

```text
npm test
Smoke test passed.
```

## What Changed

| Dimension | no-workflow | guided |
| --- | --- | --- |
| Transcript length | 59 JSONL lines | 97 JSONL lines |
| Main implementation files | `src/hud.js`, `src/styles.css` | `src/hud.js`, `src/styles.css` |
| Test file | unchanged simple smoke test | expanded smoke test with render assertions |
| Final LOC checked | 512 lines across HUD/CSS/smoke | 467 lines across HUD/CSS/smoke |
| Visual direction | More expressive, denser, strong survival cards plus objective/pickup/danger cue | More compact edge layout, clearer conditional threat callout, quieter secondary chips |
| Verification behavior | Ran existing test; attempted browser check but environment blocked it | Ran existing test, attempted browser check, then improved test assertions and reran |

## Observed Difference

This was not a "good vs bad" result. The no-workflow run was already competent because Codex automatically used its built-in `game-ui-frontend` skill for a HUD task.

The guided run still showed a different pattern:

- It first translated the vague user request into a small design brief: improve, risk, useful pattern, smallest test, check.
- It was more explicit about the paradox: "clearer important info" vs "avoid more clutter".
- It made the verification surface better by expanding `scripts/smoke.mjs` to check the rendered HUD hierarchy and the calm-state hide/show behavior.
- Its final UI used less CSS and kept the result more compact.

The strongest measured advantage here is not raw visual quality. It is problem framing and verification pressure: the workflow nudged Codex to turn the request into a testable design hypothesis.

## Caveats

- Both runs used `gpt-5.4`, because the default `gpt-5.5` required a newer Codex CLI and `gpt-5` was not available for this account mode.
- Browser verification inside the nested Codex runs was blocked by local runtime/tooling limits.
- Screenshots were generated afterward through a local HTTP server plus headless Chrome. Direct `file://` screenshots were discarded because module scripts did not render the HUD.
- This is one small repo and one prompt. It is evidence of behavior, not a statistically meaningful benchmark.
