---
name: triz-guided-ai-gamedev
description: Use this skill when the user is doing vibe coding, AI game development, gameplay prototyping, game UI, game systems, level design, AI-assisted art pipelines, GPT Image 2 / image-generation prompts, or Unity/Godot/Web game coding and needs help turning natural-language feature requests like "combat is repetitive", "the HUD is noisy", "the boss is boring", "levels feel too linear", "AI art style drifts", "the generated image adds wrong text", or "the character has extra limbs" into a small prototype, controlled image prompt, tradeoff analysis, implementation plan, tests, and iteration loop. Also use it passively and briefly when a non-trivial request has an obvious tradeoff, such as depth versus complexity, clarity versus clutter, visual richness versus prompt fidelity, content volume versus consistency, speed versus technical debt, or freedom versus pacing. Use formal framework terminology only when the user asks for underlying principles or a full design pass.
---

# Natural GameDev Prototype Skill

## Purpose

This skill converts ordinary game-development language into a repeatable prototype workflow.

User-facing shape:

**What should feel better -> What might get worse -> Smallest playable test -> Verification -> Iteration**

Image-generation shape:

**Desired image -> What must not break -> Content budget -> Prompt -> Review -> Narrow retry**

Internal tradeoff-solving shape:

**Goal → Core tradeoff → solution pattern → AI task brief → prototype → test → iteration**

Use it for vibe coding, AI-assisted indie game development, gameplay systems, combat, UI, levels, narrative, art pipelines, GPT Image 2 prompts, and content generation.

Do not treat any framework as a magic answer generator. The goal is to structure the problem, generate constrained options, build the smallest useful prototype, and validate through testing.

## Passive mode

Use this skill as a low-noise passive check for non-trivial game-dev requests.

When a request has a meaningful tradeoff, start with a short five-line brief:

```markdown
Prototype brief:
- Improve:
- Watch out:
- Useful pattern:
- Smallest test:
- Check:
```

Then continue with the requested implementation or recommendation.

For GPT Image 2 or other image-generation requests, use a short image brief:

```markdown
Image brief:
- Must show:
- Must avoid:
- Content budget:
- Text/anatomy risk:
- Check:
```

Skip the brief when the user asks for a simple bug fix, rename, copy change, asset replacement, direct code edit, or narrow explanation where no design tradeoff needs analysis.

Expand into a full design pass only when the user asks for options, strategy, system design, a coding-agent prompt, underlying principles, or help clarifying a vague feature idea.

## Bundled resources

- Use `references/using-guided-gamedev.md` first when deciding whether to skip, use passive prototype mode, run a full design pass, create a coding-agent prompt, or show explicit underlying principles.
- Use `templates/contradiction-brief.md` when the user needs a structured design pass.
- Use `templates/double-diamond-pass.md` and `references/double-diamond-gamedev.md` when the user wants brainstorming, more creative directions, or asks not to converge too quickly.
- Use `templates/coding-agent-prompt.md` when the user wants a task prompt for Claude Code, Codex, or another coding agent.
- Use `references/triz-game-patterns.md` when the user asks about underlying principles, solution patterns, full principle mapping, ideal final result, separation principles, or when principle selection is not obvious.
- Use `references/gpt-image-2-generation.md` when the user asks for GPT Image 2 prompts, character art, posters, icons, UI mockups, image text, anatomy control, style consistency, or ways to avoid unwanted details.
- Use `examples/` only when a similar game-dev tradeoff would make the answer more concrete. Do not load every example by default.

## Core Workflow

### 1. Clarify the development target

Capture:
- Game genre and engine/framework.
- Target feature or system.
- Desired player experience.
- Current limitation or pain point.
- Constraints: time, skill level, assets, performance, platform, codebase maturity.

Output:

```markdown
## Target
- Feature:
- Desired improvement:
- Current limitation:
- Constraints:
```

### 2. Identify the core tradeoff

```markdown
## Core tradeoff
We want to improve: <desired benefit>
But this may worsen: <cost / risk / complexity / maintainability / player burden>
```

Use the ideal final result as a pressure test:

```markdown
Can we get the desired benefit without adding a new system, new input, new UI surface, or new production burden?
```

If the same object seems to need opposite properties, use separation:

- Time: different behavior at different moments.
- Space: different behavior in different places.
- Condition: different behavior under different states.
- Whole/parts: the whole stays simple while parts adapt locally.

Common AI GameDev tradeoffs:

| Improve | May worsen |
|---|---|
| Gameplay depth | Cognitive load / balance complexity |
| Content volume | Consistency / quality control |
| Visual quality | Style coherence / production cost |
| Visual richness | Prompt fidelity / anatomy / text accuracy |
| Development speed | Architecture quality / technical debt |
| AI automation | Debuggability / control |
| Player freedom | Level pacing / narrative coherence |

### 3. Select relevant solution patterns

| Pattern family | GameDev interpretation |
|---|---|
| Segmentation | Split systems into data, logic, presentation, debug, and tests |
| Taking out | Remove non-essential complexity; isolate volatile code |
| Local quality | Make specific subsystems behave differently instead of global rules |
| Merging | Combine related loops, resources, or mechanics |
| Universality | Make one component serve multiple purposes |
| Nested doll | Build systems inside reusable containers or templates |
| Beforehand cushioning | Add tests, logs, debug panels, and rollback plans before scaling |
| Prior action | Prepare data schemas, config files, and interface contracts first |
| Dynamics | Make parameters configurable and runtime-adjustable |
| Cheap disposables | Use greybox assets, placeholder UI, and temporary effects first |
| Mechanics substitution | Replace manual production with AI/data-driven generation |
| Feedback | Add telemetry, playtest loops, assertions, and review gates |
| Intermediary | Use adapters, facades, importers, or generation scripts |
| Copying | Use templates, clones, prefabs, variants, and procedural copies |
| Parameter change | Change scale, frequency, cooldowns, thresholds, randomness |

Output:

```markdown
## Useful patterns selected
1. <Plain-language pattern> — why it fits this tradeoff
2. <Plain-language pattern> — why it fits this tradeoff
```

Only include formal principle names in this section when the user asked for underlying principles or a full design pass.

### 4. Generate three solution options

Always produce:
1. Low-cost prototype.
2. Balanced production path.
3. Ambitious version.

For each include:
- Concept.
- Implementation shape.
- Risks.
- Verification method.

### 5. Convert selected option into an AI coding brief

```markdown
## AI coding brief

Role:
You are a senior game engineer and technical designer.

Context:
<engine, codebase, game genre, current system>

Goal:
<what to build>

Tradeoff:
Improve <benefit> without worsening <risk>.

Design constraints:
- <pattern 1>: <how it constrains the solution>
- <pattern 2>: <how it constrains the solution>

Implementation requirements:
- Files/modules likely involved:
- Data structures:
- Runtime behavior:
- Debugging/logging:
- Tests or verification:

Non-goals:
- Do not rewrite unrelated systems.
- Do not introduce unnecessary dependencies.
- Do not hard-code values that should be configurable.

Acceptance criteria:
- <clear measurable result>
- <playtest or build verification>
```

### 6. Build the smallest useful prototype

For code:
- Prefer a small vertical slice.
- Add debug visibility.
- Add a test scene, sample data, or minimal reproduction.
- Avoid broad rewrites unless explicitly requested.

For art/UI:
- Create a style bible or component rule first.
- Generate one canonical example before batch production.
- Use a checklist to evaluate consistency.

For GPT Image 2 and image generation:
- Define a content budget before writing the final prompt.
- Keep text out of the image when exact typography matters; add it later as a UI or design layer.
- If text must be generated, use one short exact phrase, large simple placement, and a dedicated text review.
- Protect anatomy by reducing subject count, pose complexity, occlusion, and unnecessary props.
- Split character, background, typography, and UI elements when one prompt tries to do too much.

For game design:
- Define player decision, feedback, failure state, and reward.
- Propose a test encounter or greybox level.
- Identify what playtest evidence would confirm success.

### 7. Run a review gate before scaling

```markdown
## Review gate
- Does the prototype improve the target experience?
- What new problem appeared?
- Did complexity increase?
- Is the system configurable?
- Is it debuggable?
- Is it consistent with the game's style/world/rules?
- Next tradeoff:
```

## Output Modes

### Quick diagnosis

```markdown
## Quick diagnosis
- What should improve:
- What might get worse:
- Useful patterns:
- Best next step:
```

### Full design pass

```markdown
## Feature design
1. Target
2. Core tradeoff
3. Useful patterns
4. Three options
5. Recommended option
6. Prototype plan
7. Test plan
8. Next iteration
```

### Double-diamond pass

```markdown
## 1. Problem diverge
## 2. Problem converge
## 3. Solution diverge
## 4. Solution converge
```

Use this mode only when the user asks for exploration, brainstorming, or creative range before selecting the smallest playable test.

### Coding-agent prompt

```markdown
## Claude Code / Codex task prompt
<Role>
<Context>
<Goal>
<Tradeoff>
<Design constraints>
<Implementation requirements>
<Acceptance criteria>
```

### Image-generation prompt

```markdown
## GPT Image 2 prompt brief
- Goal:
- Must include:
- Must not include:
- Content budget:
- Text policy:
- Anatomy / structure check:
- Review criteria:

## Prompt
<final prompt>
```

## Special Guidance

### Combat systems
Prioritize Segmentation, Dynamics, Feedback, and Cheap disposables.

### UI / HUD
Prioritize Universality, Local quality, Taking out, and Beforehand cushioning.

### Level design
Prioritize Segmentation, Feedback, Cheap disposables, and Dynamics.

### Narrative / NPC dialogue
Prioritize Nested doll, Feedback, Local quality, and Taking out.

### AI asset pipeline
Prioritize Prior action, Copying, Feedback, and Intermediary.

### GPT Image 2 / controlled image generation
Prioritize Taking out, Prior action, Segmentation, Feedback, and Copying.

## Safety and Quality Rules

- Do not let AI generate large code changes without a small acceptance test.
- Do not solve a vague request by adding features; first identify the tradeoff.
- Do not overuse formal framework terminology in user-facing output unless helpful.
- Prioritize playable proof over theoretical completeness.
- Keep the developer in control: AI proposes, user chooses, prototype validates.
- Do not fix image-generation errors by adding many more details to the same prompt. First remove non-essential content, isolate text or anatomy risk, and retry with a narrower prompt or edit.
