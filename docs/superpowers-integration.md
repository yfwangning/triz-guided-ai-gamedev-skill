# Superpowers Integration

This project complements Superpowers-style engineering workflows.

Use this mental split:

```text
Guided GameDev chooses the prototype direction.
Superpowers-style workflows make the implementation reliable.
```

## Recommended Order

```text
User request
-> Route the request
-> Guided GameDev prototype brief if there is a game-design tradeoff
-> Planning / TDD / implementation workflow
-> Verification / code review
-> Playtest gate and next tradeoff
```

## Routing Table

| Request type | First workflow | Notes |
|---|---|---|
| "Combat gets repetitive" | Guided GameDev | Infer depth vs complexity, then prototype |
| "Boss phase 2 is boring but not cheap" | Guided GameDev | Infer tension vs fairness |
| "Explore more creative directions first" | Double-diamond mode | Diverge before planning/TDD |
| "Fix this null reference" | Debugging workflow | Skip prototype brief |
| "Refactor this combat module" | Planning / refactor workflow | Use guided brief only if design direction is unclear |
| "Implement this already-decided feature" | Implementation workflow | Preserve the user's design, add verification |
| "Review this PR" | Code review workflow | Check whether the prototype has a verification path |

## Handoff Format

After the prototype brief, hand off to implementation with:

```markdown
Implementation target:
- Files/modules:
- Data/config:
- Runtime behavior:
- Debug visibility:
- Tests/playtest:
- Non-goals:
- Acceptance criteria:
```

## Completion Gate

Do not call a gameplay change done just because code was written.

Finish with:

- how to run it;
- what to observe;
- what outcome means the prototype worked;
- what outcome means the approach should change.
