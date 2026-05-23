# Mode Comparison: Boss Phase 2 - 2026-05-22

Prompt:

```text
Boss phase 2 is boring, but do not make it cheap.
```

## Generic Output

File: `evals/sample-outputs/boss-generic-output.md`

Automatic eval:

```text
Score: 6/14
Result: failed
```

Behavior:

- Adds more attacks, randomness, summons, speed, and VFX.
- Mentions tuning risk, but does not define what "cheap" means.
- Does not isolate a smallest playable test.
- Does not define what would prove the change worked.

Result:

- More creative surface area, but high scope and weak verification.

## Passive Prototype Output

File: `evals/sample-outputs/boss-passive-prototype-good.md`

Automatic eval:

```text
Score: 14/14
Result: passed
```

Behavior:

- Infers the tradeoff: tension versus readable deaths.
- Picks one concrete pattern: teach one attack, then vary timing.
- Ends in a small test: one Ground Slam family with a delayed variant.
- Includes non-goals and acceptance criteria.

Result:

- Strong for implementation safety and fast validation.
- Less broad creatively than double-diamond mode.

## Double-Diamond Output

File: `evals/sample-outputs/double-diamond-boss-good.md`

Automatic eval:

```text
Score: 22/22
Result: passed
```

Behavior:

- Diverges on possible meanings of "boring".
- Converges on the first tradeoff: tension without unreadable deaths.
- Diverges on safe, weird, systemic, content-light, and ambitious directions.
- Converges on the same small Ground Slam test, but keeps rejected ideas as follow-ups.

Result:

- Best when the real problem is unclear or the user wants more creative range.
- More verbose than passive mode, so it should be opt-in.

## Summary

| Mode | Strength | Weakness | Best use |
|---|---|---|---|
| Generic | More immediate ideas | Scope creep, weak proof | Loose brainstorming only |
| Passive prototype | Fast, safe, testable | Can converge early | Default for vague game-dev requests |
| Double-diamond | Creative range plus convergence | More verbose | When user asks to explore before choosing |

## Conclusion

The workflow should not replace creativity with premature minimization. The default passive mode protects implementation from scope creep. Double-diamond mode restores creative divergence when the user wants exploration.
