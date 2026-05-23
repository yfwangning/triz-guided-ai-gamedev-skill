# Contributing

Thanks for helping improve TRIZ-Guided AI GameDev.

This project is most useful when contributions are concrete, testable, and grounded in real game-development problems.

## Good Contributions

- New examples that start from a real game-dev contradiction.
- Better prompt templates for Claude Code or Codex.
- Engine-specific task briefs for Unity, Godot, Unreal, Phaser, Three.js, or custom engines.
- Evaluation prompts that expose vague, bloated, or non-actionable outputs.
- TRIZ principle mappings that translate abstract principles into concrete game-dev solution patterns.
- Clearer acceptance criteria and playtest checklists.

## Example Format

When adding an example, include:

- Target feature or system.
- Desired improvement.
- Current limitation.
- Core contradiction.
- Two to four TRIZ principles.
- Three options: low-cost prototype, balanced path, ambitious version.
- Recommended next action.
- Acceptance criteria.

Use the files in `claude-code/triz-guided-ai-gamedev/examples/` as the style guide.

## Pull Request Checklist

- The contribution supports small prototypes over broad rewrites.
- The example or template includes a verification method.
- TRIZ terms are translated into concrete game-dev decisions.
- New principle mappings are added to `claude-code/triz-guided-ai-gamedev/references/triz-game-patterns.md` when relevant.
- New examples are linked from `README.md`.
- New eval prompts are linked from `evals/checklist.md`.
- Markdown files use clear headings and concise bullets.

## Scope

Please avoid adding generic game design theory unless it directly helps an AI agent produce a smaller, safer, more testable prototype.
