# Install

## Claude Code

One-command personal install:

```bash
bash scripts/install-claude-skill.sh
```

Personal skill:

```bash
mkdir -p ~/.claude/skills/
cp -R claude-code/triz-guided-ai-gamedev ~/.claude/skills/
```

Project skill:

```bash
bash scripts/install-claude-skill.sh --project .
```

## Codex

One-command project install:

```bash
bash scripts/install-codex-agents.sh .
```

Run it from the game repository root, or pass the target game repository path explicitly:

```bash
bash scripts/install-codex-agents.sh ../my-game
```

Manual install option:

```bash
cp codex/AGENTS.md ./AGENTS.md
```

## Validate This Repository

```bash
bash scripts/validate.sh
```

## First Test Prompt

```text
Combat gets repetitive after a few minutes. I want it to feel deeper, but I do not want more buttons or long tutorials. Propose the smallest playable test.
```
