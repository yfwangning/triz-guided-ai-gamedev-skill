# Showcase: Before / After Prompts

Use these examples in the README, launch posts, demos, and short videos.

## 1. Boss Phase 2

Natural prompt:

```text
Boss phase 2 is boring, but do not make it cheap.
```

Generic AI usually adds:

- more attacks;
- rage mode;
- random explosions;
- summons;
- faster projectiles.

Guided output:

```markdown
Prototype brief:
- Improve: Make phase 2 feel more tense.
- Watch out: More surprise can become unreadable punishment.
- Useful pattern: Teach one readable attack, then vary its timing.
- Smallest test: One Ground Slam family with a base version and a delayed variant.
- Check: Players hit by the variant can explain "I dodged too early."
```

Shareable line:

```text
Instead of adding six boss attacks, it tests one readable attack variant.
```

## 2. Repetitive Combat

Natural prompt:

```text
Combat gets repetitive after a few minutes. I want more depth, but not more buttons.
```

Generic AI usually adds:

- combo chains;
- skill trees;
- elemental damage;
- more weapons;
- ultimates.

Guided output:

```markdown
Prototype brief:
- Improve: Add more tactical decisions.
- Watch out: More depth can add input and balance complexity.
- Useful pattern: Reuse the same attack input, but change outcomes by enemy state.
- Smallest test: One enemy with guarding, exposed, and charging states.
- Check: Players make different decisions without learning a new control.
```

Shareable line:

```text
Same button. More decisions. Smaller prototype.
```

## 3. Noisy HUD

Natural prompt:

```text
The HUD is already noisy, but players still miss important stuff.
```

Generic AI usually adds:

- larger panels;
- more icons;
- more text;
- more warnings;
- more permanent UI.

Guided output:

```markdown
Prototype brief:
- Improve: Make important information easier to notice.
- Watch out: More clarity can make the screen even busier.
- Useful pattern: Show information by priority and context.
- Smallest test: One combat scene with persistent health/stamina and transient priority alerts.
- Check: Screenshot idle, combat, pickup, warning, and status-expiry states.
```

Shareable line:

```text
It does not add another panel. It decides what deserves attention now.
```

## 4. AI Icon Style Drift

Natural prompt:

```text
AI item icons are fast, but they look like they belong to different games.
```

Generic AI usually does:

- more prompt tweaking;
- more batch generation;
- manual picking;
- inconsistent cleanup.

Guided output:

```markdown
Prototype brief:
- Improve: Generate icons faster.
- Watch out: Higher volume can create style drift and review cost.
- Useful pattern: Approve one canonical icon before batching.
- Smallest test: One approved icon, four variants, one contact sheet, one in-game scale check.
- Check: Reject any variant that fails style, canvas, or real-size readability.
```

Shareable line:

```text
Generate less first, so the next hundred assets do not drift.
```

## 5. GPT Image 2 Wrong Text And Extra Limbs

Natural prompt:

```text
GPT Image 2 keeps making my fantasy poster look cool, but it adds wrong title text and weird extra limbs.
```

Generic AI usually does:

- longer prompts;
- more style adjectives;
- more negative wording;
- more characters and props;
- final typography inside the image.

Guided output:

```markdown
Image brief:
- Must show: One polished fantasy warrior poster draft.
- Must avoid: Fake text, extra limbs, extra characters, extra weapons.
- Content budget: One character, one sword, one doorway, one lighting idea.
- Text/anatomy risk: Generate textless art and add typography later.
- Check: One head, two arms, two legs, plausible hands, no invented words.
```

Shareable line:

```text
Do not ask the image model for the poster, title design, UI, crowd scene, and anatomy test all at once.
```
