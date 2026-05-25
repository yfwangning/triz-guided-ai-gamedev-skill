# Natural GameDev Prototype Instructions

Use these instructions when working on this repository with Codex.

## Purpose

Apply a plain-language tradeoff workflow for AI-assisted game development.

User-facing shape:

**What should feel better → What might get worse → useful pattern → smallest playable test → verification → iteration**

Internal tradeoff-solving shape:

**Goal → Core tradeoff → solution pattern → implementation plan → smallest prototype → verification → iteration**

This is intended for vibe coding, AI game development, gameplay systems, UI, levels, narrative tools, asset pipelines, GPT Image 2 prompts, controlled image generation, and rapid prototyping.

## Default behavior

Use this as a low-noise passive workflow.

For non-trivial game-dev requests, silently check whether there is a meaningful tradeoff. If there is, include a short prototype brief before implementation. Keep it to five lines unless the user asks for a full design pass. Use plain game-dev language by default; use formal framework terminology only if the user asks for underlying principles.

Routing:

- Simple bug fix, rename, copy edit, direct value change: skip the brief and do the task.
- Natural game-dev complaint with a likely tradeoff: use the five-line prototype brief.
- GPT Image 2 or image-generation request with risk of wrong text, extra limbs, unwanted objects, or style drift: use a short image brief before writing the final prompt.
- Vague feature request asking for ideas/options: use a full design pass.
- User asks to brainstorm, explore, get more creative options, or avoid early convergence: use a double-diamond pass.
- User asks for implementation prompt: produce a coding-agent prompt.
- User explicitly asks for underlying principles: include principle names and concrete game-dev translations.
- User already specified the design in detail: preserve that design, add verification and non-goals.

Skip the prototype brief for simple, direct tasks such as:

- fixing a clearly scoped bug;
- renaming a field, file, variable, or asset;
- changing a color, label, number, or copy string;
- applying a user-specified implementation exactly;
- answering a narrow question without code changes.

Use a full design pass only when the user explicitly asks for strategy, options, design exploration, system design, a coding-agent prompt, underlying principles, or help with a vague feature idea.

Use double-diamond mode only when the user asks for creative exploration:

```markdown
Double-diamond pass:
1. Problem diverge: possible meanings of the complaint.
2. Problem converge: the first tradeoff to solve.
3. Solution diverge: safe, weird, systemic, content-light, and ambitious options.
4. Solution converge: smallest playable test and what would prove it works.
```

For image-generation requests, use:

```markdown
Image brief:
- Must show:
- Must avoid:
- Content budget:
- Text/anatomy risk:
- Check:
```

## Passive trigger

Before implementing a non-trivial game feature, briefly identify:

1. Desired improvement.
2. Risk or worsening parameter.
3. 2–4 relevant plain-language solution patterns.
4. Smallest useful implementation slice.
5. Verification method.

Use concise notes; do not create long theory sections unless the user asks.

## Core tradeoff checks

Use the ideal final result as a pressure test:

```text
Can we get the desired benefit without adding a new system, new input, new UI surface, or new production burden?
```

If the same thing seems to need opposite properties, use separation:

- Time: different behavior at different moments.
- Space: different behavior in different places.
- Condition: different behavior under different states.
- Whole/parts: the whole stays simple while parts adapt locally.

## Common solution patterns

- Segmentation: split data, logic, presentation, debug, and tests.
- Beforehand cushioning: add logs, debug tools, tests, and rollback points before scaling.
- Dynamics: make values configurable through data/assets instead of hard-coding.
- Cheap disposables: use placeholder assets and greybox prototypes before final polish.
- Feedback: add telemetry, assertions, debug overlays, playtest checks.
- Mechanics substitution: replace repetitive manual work with scripts, generators, or data-driven systems.
- Intermediary: use adapters/importers/facades to avoid coupling.
- Local quality: solve a problem in a specific subsystem instead of changing global behavior.
- Taking out: remove non-essential rules, UI, content, or dependencies from the first prototype.
- Prior action: define schemas, style rules, acceptance criteria, and test scenes before scaling.
- Copying: use templates, variants, prefabs, proxies, and canonical examples.
- Parameter change: tune scale, timing, probability, thresholds, cooldowns, and intensity.

## Common tradeoff patterns

- Depth vs cognitive load: reuse existing inputs and change contextual outcomes.
- Clarity vs clutter: reveal information only when it affects a decision.
- Freedom vs pacing: add contained optional loops that reconnect before key beats.
- Content volume vs consistency: approve one canonical example before generating batches.
- Visual richness vs prompt fidelity: reduce subject count, props, text, and pose complexity before asking for polish.
- Typography vs image quality: keep exact text out of the generated image unless the text is short, large, and central to the test.
- Dynamic anatomy vs correctness: use simpler poses, fewer characters, visible structure, and reference images when anatomy matters.
- Detail panels vs anatomy correctness: avoid separate hand closeups in the first full concept sheet; use a second pass or local edit after the main pose is approved.
- Speed vs technical debt: isolate prototypes behind flags, test scenes, and config.
- Automation vs control: put validators, staging files, and review gates between AI output and runtime assets.

## Implementation rules

- Prefer small vertical slices over broad rewrites.
- Do not rewrite unrelated systems.
- Keep game-specific parameters configurable.
- Add or update tests, sample scenes, debug commands, fixtures, or manual verification steps when practical.
- Preserve existing project architecture and naming conventions.
- If a change affects gameplay feel, include a short playtest checklist.
- If a change affects assets/UI, include a style-consistency checklist.
- If a task affects generated images, include a review checklist for exact text, unwanted text, extra limbs, missing limbs, extra subjects, unwanted props, and style drift.
- If uncertain between two approaches, implement the lower-risk prototype first.

## Response format for tasks

When starting a task, use:

```markdown
Prototype brief:
- Improve:
- Watch out:
- Useful pattern:
- Smallest test:
- Check:
```

When finishing, include:

```markdown
Summary:
- What changed:
- How to verify:
- Next tradeoff / follow-up:
```
