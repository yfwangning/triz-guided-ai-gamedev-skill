# Sample Output: Passive Prototype Boss Response

Prompt:

```text
Boss phase 2 is boring, but do not make it cheap.
```

Prototype brief:

- Improve: Make phase 2 feel more tense and less predictable.
- Watch out: More surprise can become unreadable or feel like random punishment.
- Useful pattern: Teach one readable attack first, then vary its timing.
- Smallest test: One Ground Slam family with a base version and one delayed variant.
- Check: Players hit by the variant can explain "I dodged too early."

Smallest prototype:

- Keep the existing Ground Slam telegraph.
- In phase 2, every third slam delays impact by 0.5 seconds.
- Use the same color and sound family, but add a slightly longer wind-up pose.
- Log hit cause: base slam, delayed slam, or player dodge timing.

Non-goals:

- Do not add a full new moveset.
- Do not add random one-shot attacks.
- Do not rebuild boss AI.

Acceptance criteria:

- Players recognize the delayed slam as a variant of the known attack.
- Players can adjust after one or two failures.
- If players call the hit random, the telegraph needs more feedback before adding more attacks.
