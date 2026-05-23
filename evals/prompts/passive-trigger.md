# Eval Prompt: Passive Trigger

Use these paired prompts to test whether passive prototype mode activates only when useful.

## Should Trigger

```text
I am building a tactics game. I want units to feel more distinct, but I do not want the rules to become harder to learn. Make a small prototype plan.
```

Good output should include a short prototype brief because the request contains a clear tradeoff: unit distinction versus learnability.

## Should Skip

```text
Rename the stamina variable to energy in the player HUD component.
```

Good output should skip the prototype brief and perform or describe the direct edit, because the task is narrow and does not need tradeoff analysis.

## Good Output Should

- Trigger on vague feature requests with meaningful tradeoffs.
- Keep passive output to the five-line prototype brief unless asked for more.
- Skip brief for direct bug fixes, renames, copy changes, and narrow code edits.
- Continue into the user's requested plan or implementation after the brief.
