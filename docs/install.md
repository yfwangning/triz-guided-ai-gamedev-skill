# Install

## Direct Clone From GitHub

This repository can be installed by cloning it directly into a skill directory.

Claude Code personal skill:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/yfwangning/triz-guided-ai-gamedev-skill.git ~/.claude/skills/triz-guided-ai-gamedev
```

Codex local skill:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/yfwangning/triz-guided-ai-gamedev-skill.git ~/.codex/skills/triz-guided-ai-gamedev
```

Update later:

```bash
git -C ~/.claude/skills/triz-guided-ai-gamedev pull
git -C ~/.codex/skills/triz-guided-ai-gamedev pull
```

The root `SKILL.md` exists so the cloned repository itself can be recognized as a skill.

## Helper Script For Claude Code

If you already cloned this repository, you can also install only the Claude Code skill folder.

One-command personal install from this repository:

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

## Codex Project Instructions

The direct clone above installs this as a Codex skill. If you instead want project-level instructions inside a specific game repository, copy `codex/AGENTS.md` into that repo.

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

Or from a fresh GitHub clone:

```bash
git clone https://github.com/yfwangning/triz-guided-ai-gamedev-skill.git /tmp/triz-guided-ai-gamedev-skill
bash /tmp/triz-guided-ai-gamedev-skill/scripts/install-codex-agents.sh /path/to/your-game
```

## Validate This Repository

```bash
bash scripts/validate.sh
```

## First Test Prompt

```text
Combat gets repetitive after a few minutes. I want it to feel deeper, but I do not want more buttons or long tutorials. Propose the smallest playable test.
```
