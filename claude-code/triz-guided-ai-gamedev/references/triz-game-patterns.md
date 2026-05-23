# TRIZ GameDev Pattern Reference

Use this reference when a game-dev request needs more than the short passive brief: full design passes, principle selection, contradiction mapping, or "why this TRIZ principle fits" explanations.

Do not dump this whole reference into user-facing output. Select the few principles and patterns that fit the current contradiction.

## Table of Contents

1. How to use this reference
2. TRIZ core moves for game development
3. Inferring contradictions from natural prompts
4. Contradiction types
5. Ideal final result
6. Separation principles
7. 40 inventive principles as game-dev patterns
8. Common game-dev contradictions and solution patterns
9. Coding-agent translation checklist

## 1. How to use this reference

Use this sequence:

1. State the desired improvement.
2. Name what might get worse.
3. Classify the contradiction.
4. Pick two to four principles.
5. Translate each principle into a concrete game-dev move.
6. Build the smallest prototype that tests the contradiction.
7. Add debug, review, or playtest evidence before scaling.

Good output should say "use the same attack input, but change outcomes by enemy state", not just "apply Local quality".

## 2. TRIZ core moves for game development

TRIZ is useful here because games are full of tradeoffs:

- More depth can create more cognitive load.
- More content can create less consistency.
- More visual polish can create higher production cost.
- More automation can create lower control and debuggability.
- More player freedom can create weaker pacing.
- Faster development can create technical debt.

The core move is not "add a feature". The core move is "resolve or reduce the contradiction with the smallest testable change".

## 3. Inferring contradictions from natural prompts

Users rarely state contradictions cleanly. Infer the contradiction from ordinary game-dev language, but keep the inference visible and modest.

| Natural prompt | Likely desired improvement | Likely worsening risk |
|---|---|---|
| "Boss phase 2 is boring; make it more exciting, but not cheap" | Surprise, tension, variation | Unfair deaths, weak learnability |
| "Combat gets repetitive after a few minutes" | More depth, more decisions | More controls, balance complexity |
| "The HUD is noisy but players miss important things" | Better clarity | More clutter, attention fatigue |
| "The level feels like a corridor" | More freedom, discovery | Lost pacing, player confusion |
| "AI icons are fast but all over the place" | More content volume | Style drift, review cost |
| "I want to prototype faster" | Development speed | Technical debt, messy architecture |
| "NPCs repeat themselves too much" | Dialogue variety | Lore inconsistency, QA burden |
| "New players get lost" | Guidance and onboarding | Hand-holding, reduced autonomy |

When the prompt is vague, use wording like:

```markdown
Inferred contradiction:
You likely want to improve <benefit>, but the risk is <worsening parameter>.
```

Do not pretend the inference is certain. If the inferred risk would change the implementation heavily, ask one concise clarification before coding.

## 4. Contradiction types

### Technical contradiction

Improving one property worsens another.

Game examples:

- Improve combat depth, but worsen input complexity.
- Improve HUD clarity, but worsen screen clutter.
- Improve content volume, but worsen style consistency.

Use principles like Segmentation, Dynamics, Local quality, Feedback, Prior action, and Intermediary.

### Physical contradiction

The same thing appears to need opposite properties.

Game examples:

- A tutorial should be visible to new players and invisible to expert players.
- A level should be open for exploration and directed for pacing.
- A boss should be predictable enough to learn and surprising enough to stay exciting.

Use separation principles: separate in time, space, condition, or between whole and parts.

### Management contradiction

The development process has conflicting needs.

Game examples:

- Move fast without creating unmaintainable prototypes.
- Generate AI assets quickly without reviewing hundreds of files manually.
- Let AI write code while keeping design control.

Use Prior action, Feedback, Beforehand cushioning, Mechanics substitution, Intermediary, and Segmentation.

## 5. Ideal final result

The ideal final result asks:

> Can we get the desired benefit without adding a new system, new input, new UI surface, or new production burden?

Game-dev examples:

- More combat depth without new buttons: reuse existing input and add contextual outcomes.
- More HUD clarity without more panels: reveal information only when it is decision-relevant.
- More level freedom without lost pacing: add contained loops that reconnect before key beats.
- More content without style drift: generate from one approved canonical anchor and review in batches.

Use IFR as a pressure test. If the first idea adds a big subsystem, ask whether the existing system can carry the new behavior.

## 6. Separation principles

Use separation when the same object or system seems to need opposite properties.

| Separation | Game-dev translation | Example |
|---|---|---|
| Time | Different behavior at different moments | Tutorial hints appear after failure, then fade after mastery |
| Space | Different behavior in different places | Open exploration pockets between directed critical-path beats |
| Condition | Different behavior under different states | Same attack interrupts only when the enemy is charging |
| Whole/parts | The whole has one property, parts have another | Overall HUD stays minimal, individual alerts expand briefly |

## 7. 40 inventive principles as game-dev patterns

| # | Principle | Game-dev solution pattern |
|---:|---|---|
| 1 | Segmentation | Split data, logic, presentation, debug, and tests; make feature slices small |
| 2 | Taking out | Remove non-essential UI, rules, steps, or dependencies from the first prototype |
| 3 | Local quality | Change behavior only for a specific enemy, zone, state, UI layer, or asset type |
| 4 | Asymmetry | Give factions, classes, enemy states, or encounters different rules instead of mirroring them |
| 5 | Merging | Combine compatible loops, resources, inputs, or reward channels |
| 6 | Universality | Make one component serve multiple uses, such as one alert pattern for several statuses |
| 7 | Nested doll | Put content inside templates, prefabs, data packs, or reusable containers |
| 8 | Anti-weight | Offset difficulty, cost, or risk with assists, tutorials, recovery, or compensation |
| 9 | Prior counteraction | Add safeguards before risk appears, such as validation before content import |
| 10 | Prior action | Prepare schemas, style rules, test scenes, and contracts before generating or scaling |
| 11 | Beforehand cushioning | Add rollback, debug views, logs, fixtures, and tests before broad changes |
| 12 | Equipotentiality | Reduce unnecessary transitions or friction between states, screens, or tools |
| 13 | The other way around | Reverse the mechanic or workflow: let enemies expose themselves instead of adding player inputs |
| 14 | Spheroidality | Replace rigid linear structures with loops, cycles, radial layouts, or orbiting choices |
| 15 | Dynamics | Make parameters, layouts, encounters, and AI behaviors adjustable by data or runtime state |
| 16 | Partial or excessive action | Prototype a deliberately limited or exaggerated version to reveal tuning boundaries |
| 17 | Another dimension | Add verticality, layers, tabs, lanes, depth, or timeline views instead of crowding one plane |
| 18 | Mechanical vibration | Use pulses, rhythm, flashing, shake, or periodic windows to create feedback or timing |
| 19 | Periodic action | Use cooldowns, cycles, waves, rotations, and scheduled events instead of constant pressure |
| 20 | Continuity of useful action | Keep useful loops active, such as background crafting, passive hints, or continuous feedback |
| 21 | Skipping | Bypass slow steps with shortcuts, presets, fast travel, quick retry, or batch actions |
| 22 | Blessing in disguise | Turn failure, damage, scarcity, or constraints into choices, rewards, or comeback windows |
| 23 | Feedback | Add telemetry, debug overlays, logs, playtest questions, screenshots, and review gates |
| 24 | Intermediary | Use adapters, importers, facades, converters, or staging scenes to avoid direct coupling |
| 25 | Self-service | Let systems maintain themselves through validation, auto-layout, auto-tagging, or self-tests |
| 26 | Copying | Use templates, clones, variants, prefabs, proxies, thumbnails, or reference assets |
| 27 | Cheap disposables | Use greybox levels, placeholder VFX, temp UI, and throwaway prototypes before polish |
| 28 | Mechanics substitution | Replace manual work with generation scripts, data-driven rules, or editor tooling |
| 29 | Pneumatics and hydraulics | Use flow, pressure, capacity, charge, decay, and resource reservoirs as design metaphors |
| 30 | Flexible shells | Use wrappers, skins, overlays, themes, and presentation layers around stable logic |
| 31 | Porous materials | Add slots, sockets, tags, extension points, and optional hooks into systems |
| 32 | Color changes | Use color, contrast, icons, outlines, and state tinting to make conditions readable |
| 33 | Homogeneity | Keep related assets, rules, and UI elements consistent within the same family |
| 34 | Discarding and recovering | Temporarily remove, hide, pool, reset, respawn, or recycle entities and UI elements |
| 35 | Parameter changes | Tune scale, timing, probability, thresholds, range, cooldown, and intensity |
| 36 | Phase transitions | Change mode or state: calm/combat, stealth/alert, vulnerable/armored, draft/final |
| 37 | Thermal expansion | Scale behavior based on pressure, heat, threat, tension, or encounter intensity |
| 38 | Strong oxidants | Add catalysts that accelerate a loop: boosts, incentives, batch tools, or power moments |
| 39 | Inert atmosphere | Isolate risky prototypes in sandboxes, flags, test scenes, branches, or safe modes |
| 40 | Composite materials | Combine data, authored content, procedural rules, and AI generation into hybrid systems |

## 8. Common game-dev contradictions and solution patterns

### Gameplay depth vs cognitive load

Recommended principles:

- Local quality
- Dynamics
- Feedback
- Segmentation

Solution patterns:

- Reuse existing inputs and change contextual outcomes.
- Add enemy or environment states instead of new buttons.
- Keep rules readable with feedback before adding complexity.
- Put tuning values in data.

Prototype example:

- Same attack input plus enemy state gives break guard, interrupt, or bonus damage.

### HUD clarity vs screen clutter

Recommended principles:

- Taking out
- Universality
- Local quality
- Separation by condition

Solution patterns:

- Keep only critical information persistent.
- Reveal contextual information when it affects a decision.
- Use one compact alert grammar for multiple statuses.
- Verify with screenshots in overloaded states.

Prototype example:

- Persistent health/stamina plus transient priority alerts for warnings, pickups, and expiring statuses.

### Player freedom vs pacing

Recommended principles:

- Segmentation
- Local quality
- Separation in space
- Feedback

Solution patterns:

- Use contained optional loops rather than opening the whole level.
- Reconnect exploration paths before key beats.
- Use sightlines, landmarks, and soft gates.
- Track time lost, return rate, and player confusion.

Prototype example:

- One greybox side loop with a risk, reward, and reconnect point.

### Content volume vs consistency

Recommended principles:

- Prior action
- Copying
- Feedback
- Intermediary

Solution patterns:

- Approve one canonical example before generating batches.
- Use style rules, schemas, naming, and review tags.
- Normalize outputs before import.
- Review contact sheets or sample sets, not isolated assets.

Prototype example:

- One approved icon, four variants, one contact sheet, one in-game scale check.

### Development speed vs technical debt

Recommended principles:

- Segmentation
- Beforehand cushioning
- Dynamics
- Inert atmosphere

Solution patterns:

- Put risky work behind feature flags or test scenes.
- Keep prototype code isolated from production paths.
- Add debug readouts and rollback notes.
- Move values into config even in prototypes.

Prototype example:

- One feature flag, one sample scene, one config file, one debug panel.

### AI automation vs control/debuggability

Recommended principles:

- Intermediary
- Feedback
- Prior action
- Mechanics substitution

Solution patterns:

- Put importers, validators, and staging files between AI output and runtime assets.
- Require review states: draft, approved, rejected, imported.
- Generate logs and diffs for AI-made changes.
- Automate repetitive work, not final judgment.

Prototype example:

- AI generates candidate dialogue lines into a review CSV; approved rows are imported into the game.

### Visual polish vs production cost

Recommended principles:

- Cheap disposables
- Copying
- Composite materials
- Parameter changes

Solution patterns:

- Approve one polished reference before broad production.
- Use variants and overlays around stable base assets.
- Combine authored anchors with generated details.
- Test at real camera distance and UI size.

Prototype example:

- One polished spell VFX direction, three cheap variants, gameplay readability screenshot.

### Boss surprise vs learnability

Recommended principles:

- Separation in time
- Periodic action
- Feedback
- Partial or excessive action

Solution patterns:

- Make early patterns predictable, then introduce variations later.
- Use telegraphs and recovery windows.
- Prototype exaggerated timing windows to find readable limits.
- Log hit causes and failure points.

Prototype example:

- Boss repeats a readable attack twice, then adds a delayed variant with the same telegraph family.

### Tutorial guidance vs player autonomy

Recommended principles:

- Separation by condition
- Taking out
- Feedback
- Dynamics

Solution patterns:

- Show hints only after hesitation, failure, or repeated missed affordances.
- Fade guidance after mastery.
- Keep core controls discoverable through level design.
- Track whether players succeed without opening help.

Prototype example:

- Hint appears after two failed jumps, disappears after two successful jumps.

## 9. Coding-agent translation checklist

When converting TRIZ into an implementation prompt, include:

- Files or modules likely involved.
- Data structures and config values.
- Runtime behavior and state transitions.
- Debug visibility, logs, screenshots, or playtest checks.
- Non-goals that prevent scope creep.
- Acceptance criteria that can be tested.

Avoid:

- Abstract principle names without implementation consequences.
- Large rewrites before a prototype.
- Adding new systems when existing inputs, UI, assets, or states can carry the test.
