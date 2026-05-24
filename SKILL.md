---
name: triz-guided-ai-gamedev
description: Use this skill when the user is doing AI-assisted game development, vibe coding, gameplay prototyping, game UI, game systems, level design, AI-assisted art pipelines, or Unity/Godot/Web game coding and needs help turning natural-language feature requests like "combat is repetitive", "the HUD is noisy", "the boss is boring", "levels feel too linear", or "AI art style drifts" into a small prototype, tradeoff analysis, implementation plan, tests, and iteration loop. Also use it passively and briefly when a non-trivial game-dev request has an obvious tradeoff, such as depth versus complexity, clarity versus clutter, content volume versus consistency, speed versus technical debt, or freedom versus pacing. Use formal framework terminology only when the user asks for underlying principles or a full design pass.
---

# Natural GameDev Prototype Skill

This root `SKILL.md` makes the repository directly cloneable into a skill directory.

Full Claude Code skill files live in:

```text
claude-code/triz-guided-ai-gamedev/
```

Use `claude-code/triz-guided-ai-gamedev/SKILL.md` as the canonical detailed operating guide when more depth is needed.

## Purpose

Turn ordinary game-development language into a small, testable prototype path before an AI coding agent expands the request into a large feature system.

User-facing shape:

```text
What should feel better -> What might get worse -> Smallest playable test -> Verification -> Iteration
```

Use it for vibe coding, AI-assisted indie game development, gameplay systems, combat, UI, levels, narrative, art pipelines, and content generation.

## Passive Mode

Use this as a low-noise passive check for non-trivial game-dev requests.

When a request has a meaningful tradeoff, start with a short brief:

```markdown
Prototype brief:
- Improve:
- Watch out:
- Useful pattern:
- Smallest test:
- Check:
```

Then continue with the requested implementation or recommendation.

Skip the brief when the user asks for a simple bug fix, rename, copy change, asset replacement, direct code edit, or narrow explanation where no design tradeoff needs analysis.

## When To Expand

Expand beyond the short brief when the user asks for:

- brainstorming or more creative range;
- a full design pass;
- a coding-agent prompt;
- underlying TRIZ or Double Diamond principles;
- a vague feature idea that needs clarification before implementation.

Use these bundled resources when needed:

- `claude-code/triz-guided-ai-gamedev/references/using-guided-gamedev.md`
- `claude-code/triz-guided-ai-gamedev/templates/contradiction-brief.md`
- `claude-code/triz-guided-ai-gamedev/templates/double-diamond-pass.md`
- `claude-code/triz-guided-ai-gamedev/templates/coding-agent-prompt.md`
- `claude-code/triz-guided-ai-gamedev/references/triz-game-patterns.md`
- `claude-code/triz-guided-ai-gamedev/references/double-diamond-gamedev.md`
- `claude-code/triz-guided-ai-gamedev/examples/`

## Core Rules

- Prefer the smallest playable test before adding a big system.
- Name the tradeoff in plain game-dev language.
- Keep formal theory hidden unless the user asks for it.
- Preserve creative divergence when the user asks for brainstorming, then converge before implementation.
- Include acceptance criteria or a verification check before scaling the idea.
