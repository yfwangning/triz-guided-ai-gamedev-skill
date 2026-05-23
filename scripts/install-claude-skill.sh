#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/claude-code/triz-guided-ai-gamedev"
SKILL_NAME="$(basename "$SOURCE_DIR")"

if [[ "${1:-}" == "--project" ]]; then
  PROJECT_DIR="${2:-$PWD}"
  if [[ ! -d "$PROJECT_DIR" ]]; then
    echo "Error: project directory does not exist: $PROJECT_DIR" >&2
    exit 1
  fi
  TARGET_PARENT="$PROJECT_DIR/.claude/skills"
elif [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  echo "Usage: bash scripts/install-claude-skill.sh [--project [project-root]]"
  echo "Default installs to ~/.claude/skills."
  exit 0
elif [[ -n "${1:-}" ]]; then
  echo "Error: unknown argument: $1" >&2
  echo "Usage: bash scripts/install-claude-skill.sh [--project [project-root]]" >&2
  exit 1
else
  TARGET_PARENT="$HOME/.claude/skills"
fi

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Error: missing source skill directory: $SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$TARGET_PARENT"
TARGET_DIR="$TARGET_PARENT/$SKILL_NAME"

if [[ -d "$TARGET_DIR" ]]; then
  BACKUP="$TARGET_DIR.backup.$(date +%Y%m%d%H%M%S)"
  mv "$TARGET_DIR" "$BACKUP"
  echo "Existing skill backed up to $BACKUP"
fi

cp -R "$SOURCE_DIR" "$TARGET_PARENT/"

echo "Installed triz-guided-ai-gamedev to $TARGET_PARENT"
echo "Try: Combat gets repetitive after a few minutes. Propose the smallest playable test."
