# FAQ

## Do users need to know TRIZ?

No. Users can describe the problem naturally:

```text
Boss phase 2 is boring, but do not make it cheap.
```

The workflow should infer the hidden tradeoff and respond with plain game-dev language.

## Why not just write a better prompt?

You can. For a one-off task, a prompt like "propose the smallest playable test first" may be enough.

This project is useful when you want that behavior to be reusable:

- across many game-dev prompts;
- across Claude Code and Codex;
- across teammates or repeated sessions;
- with examples, evals, and installable project instructions;
- with explicit skip rules for simple tasks.

It turns a good prompting habit into a project-level guardrail.

## Is this a game framework?

No. It does not provide runtime systems, components, assets, scenes, or engine code. It is a pre-implementation thinking guardrail for AI coding agents.

The intended sequence is:

```text
vague game-dev complaint
-> tradeoff brief
-> smallest playable test
-> implementation
-> screenshot/playtest verification
```

## When should the workflow trigger?

Trigger it for non-trivial game-dev requests with a tradeoff:

- deeper combat without more controls;
- clearer HUD without more clutter;
- more level freedom without lost pacing;
- more AI-generated content without style drift;
- faster prototyping without technical debt.

Skip it for direct tasks:

- bug fixes;
- renames;
- copy changes;
- simple numeric tuning;
- narrow explanations.

## Will this make the agent verbose?

It should not. Passive mode uses only five lines:

```markdown
Prototype brief:
- Improve:
- Watch out:
- Useful pattern:
- Smallest test:
- Check:
```

Use a full design pass only when the user asks for options or strategy.

## How do I know it is installed correctly?

After installing, ask:

```text
The HUD is noisy but players still miss important stuff. Propose the smallest playable test.
```

You should see a short `Prototype brief` with:

- Improve;
- Watch out;
- Useful pattern;
- Smallest test;
- Check.

If the agent skips the brief, say:

```text
Use passive prototype mode before implementation.
```

## Will the smallest-test mindset reduce creativity?

It can if used too early. Use double-diamond mode when you want creative range:

```text
Use double-diamond mode. Do not converge too early.
```

That mode first explores possible meanings of the complaint, then explores varied solution directions, and only then chooses the smallest playable test.

## How does this relate to TRIZ?

TRIZ is the internal reasoning library. The default user-facing language is:

- what should feel better;
- what might get worse;
- useful pattern;
- smallest playable test;
- verification.

Use explicit TRIZ principle names only when the user asks for them.

## How does this relate to TDD or code review?

This workflow chooses a safer prototype direction. TDD, debugging, and code review still handle implementation quality.

Recommended order:

```text
natural game-dev request
-> prototype brief
-> implementation plan / TDD
-> code
-> verification / playtest gate
```

## Does it work with Unity, Godot, Phaser, Unreal, or web games?

Yes. The workflow is engine-agnostic. Engine-specific details belong in the implementation prompt:

- files/modules likely involved;
- data structures;
- runtime behavior;
- debug visibility;
- tests or manual playtest.

## What counts as a good result?

A good result is not "more features". A good result is a small test that can prove or disprove the design direction.

For example:

```text
One attack family with a base version and one delayed variant.
```

is better than:

```text
Eight new boss attacks, summons, and a rage phase.
```

when the question is whether phase 2 can become more exciting without feeling unfair.

## Do the eval scores prove design quality?

No. The evals are smoke tests for structure and scope control. They can catch missing tradeoffs, missing verification, over-broad outputs, and excessive user-facing theory terms.

They do not replace:

- screenshots;
- playtest notes;
- code review;
- tuning;
- human design judgment.

See [../evals/results/tiny-hud-project-2026-05-23.md](../evals/results/tiny-hud-project-2026-05-23.md) for a small realistic UI comparison, and [../evals/checklist.md](../evals/checklist.md) for the review checklist.
