# Example: Data-driven Combat Skill System

## Target
- Feature: Skill system for an indie RPG / action RPG.
- Desired improvement: More combat depth and skill variety.
- Current limitation: Hard-coded attacks become difficult to extend.
- Constraints: Solo developer, rapid prototyping, avoid large architecture rewrite.

## Core contradiction
We want to improve gameplay depth and skill variety.
But this may worsen code complexity, debugging difficulty, and balance workload.

## TRIZ principles selected
1. Segmentation — split skill data, effect logic, animation/VFX, UI, and debug output.
2. Dynamics — make cooldown, range, tags, and effects configurable.
3. Beforehand cushioning — add debug logs, sample test skill, and validation checks before adding many skills.
4. Cheap disposables — use placeholder VFX and test animations before final assets.

## Recommended option
Build a minimal data-driven skill runner:
- SkillDefinition data object.
- Effect modules: DamageEffect, StatusEffect, MovementEffect.
- SkillExecutor to read definition and execute modules.
- Debug overlay/log showing selected skill, target, damage, cooldown, and effect tags.
- One sample test scene with three skills.

## Acceptance criteria
- A new skill can be added without changing SkillExecutor.
- Skill parameters are editable through data/config.
- Debug output shows each effect execution.
- The project still builds and existing attacks still work.
