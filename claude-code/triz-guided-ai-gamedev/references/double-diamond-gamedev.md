# Double-Diamond GameDev Mode

Use this reference when the user wants creativity, brainstorming, more options, or says not to converge too quickly.

This mode protects creative range while still ending in a small test.

```text
Problem diverge -> Problem converge -> Solution diverge -> Solution converge
```

## When To Use

Use double-diamond mode when the user says:

- "Explore more directions."
- "Do not converge too fast."
- "Give me creative options."
- "Brainstorm first."
- "What else could this mean?"
- "I am not sure what the real problem is."

Do not use it by default for simple implementation, debugging, or narrow edits.

## Output Shape

```markdown
Double-diamond pass:

## 1. Problem diverge
- Possible real problem:
- Possible real problem:
- Possible real problem:

## 2. Problem converge
- Chosen first tradeoff:
- Why this one first:
- Non-goals:

## 3. Solution diverge
- Safe option:
- Weird option:
- Systemic option:
- Content-light option:
- Ambitious option:

## 4. Solution converge
- Smallest playable test:
- Why this test:
- What proves it works:
- What proves it failed:
```

## Divergence Rules

During problem divergence:

- Treat the user's wording as evidence, not a final diagnosis.
- Generate multiple possible hidden problems.
- Include at least one emotional/player-experience interpretation.
- Include at least one systems/production interpretation.

During solution divergence:

- Produce options that are meaningfully different, not small variations.
- Include one safe option and one weird option.
- Include one content-light option that changes rules or feedback instead of adding assets.
- Include one ambitious option, clearly marked as higher risk.

## Convergence Rules

When converging:

- Choose the prototype that tests the most important uncertainty with the least implementation.
- Explain what evidence would change the recommendation.
- Preserve one or two rejected ideas as follow-ups, not as immediate scope.

## Example

Prompt:

```text
Boss phase 2 is boring, but do not make it cheap.
```

Problem diverge:

- The attack pattern is mastered too early.
- The arena does not change between phases.
- The boss has no new identity or emotional beat.
- The player has no new decision in phase 2.
- The difficulty spike is feared because previous attacks had weak telegraphs.

Problem converge:

- First tradeoff: add surprise/tension without unfair deaths.

Solution diverge:

- Safe: same attack family with delayed variant.
- Weird: boss punishes repeated dodge direction with a readable feint.
- Systemic: arena pressure changes safe zones over time.
- Content-light: scoring window rewards late dodges.
- Ambitious: boss adapts to the player's most common response.

Solution converge:

- Smallest playable test: one readable Ground Slam plus one delayed variant.
- Works if players can explain "I dodged too early".
- Fails if players call the hit random or unreadable.
