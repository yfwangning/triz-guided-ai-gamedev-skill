# Sample Output: Double-Diamond Boss

Double-diamond pass:

## 1. Problem diverge

The complaint "Boss phase 2 is boring, but do not make it cheap" might mean:

1. The player already mastered the phase 1 attack timing.
2. The arena does not change, so phase 2 has no new pressure.
3. The boss has no new identity or emotional beat.
4. The player has no new decision, only more dodging.
5. Previous difficulty spikes felt unfair because telegraphs were weak.

## 2. Problem converge

Chosen first tradeoff:

- Improve phase 2 tension without creating unreadable deaths.

Why this one first:

- It is the fastest to test with one attack family before adding new assets or systems.

Non-goals:

- Do not add a full new moveset.
- Do not add random one-shot attacks.
- Do not rebuild the boss AI.

## 3. Solution diverge

### Safe option

- Idea: Teach one Ground Slam, then add a delayed version.
- Why it fits: It adds surprise while preserving the same readable telegraph family.
- Risk: It may feel too small if the boss needs a stronger identity shift.

### Weird option

- Idea: The boss pauses and punishes repeated early dodges with a readable feint.
- Why it fits: It creates mind-game tension without adding a new button.
- Risk: It can feel unfair if the feint has weak feedback.

### Systemic option

- Idea: The arena slowly narrows safe zones during familiar attacks.
- Why it fits: The same attack pattern becomes tense through space pressure.
- Risk: It may require more level and camera tuning.

### Content-light option

- Idea: Add a late-dodge reward window that gives a short counterattack opening.
- Why it fits: It changes player decision timing without new boss assets.
- Risk: It may reward expert players too much.

### Ambitious option

- Idea: The boss adapts to the player's most common dodge direction.
- Why it fits: It makes phase 2 feel reactive and personal.
- Risk: It is harder to debug and can feel like cheating.

## 4. Solution converge

Smallest playable test:

- One Ground Slam family with a base version and one delayed variant.

Why this test:

- It tests the core uncertainty: can phase 2 become more tense while deaths remain explainable?

What would prove it works:

- Players hit by the delayed variant can say "I dodged too early."
- Players start delaying their dodge without needing a tutorial.

What would prove it failed:

- Players describe the hit as random.
- Players cannot identify the delayed variant from its telegraph.
