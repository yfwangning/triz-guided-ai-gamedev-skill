#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_DIR="${1:-$PWD}"
TARGET="$PROJECT_DIR/AGENTS.md"
SOURCE="$ROOT_DIR/codex/AGENTS.md"

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  echo "Usage: bash scripts/install-codex-agents.sh [game-repo-root]"
  echo "Run from the game repository root or pass the target path explicitly."
  exit 0
fi

if [[ ! -d "$PROJECT_DIR" ]]; then
  echo "Error: target directory does not exist: $PROJECT_DIR" >&2
  echo "Run from your game repository root, or pass a valid path." >&2
  exit 1
fi

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: missing source instructions: $SOURCE" >&2
  exit 1
fi

if [[ -f "$TARGET" ]]; then
  BACKUP="$PROJECT_DIR/AGENTS.md.backup.$(date +%Y%m%d%H%M%S)"
  cp "$TARGET" "$BACKUP"
  echo "Existing AGENTS.md backed up to $BACKUP"
fi

cp "$SOURCE" "$TARGET"

echo "Installed Codex instructions to $TARGET"
echo "Try: The HUD is noisy but players still miss important stuff. Propose the smallest playable test."
