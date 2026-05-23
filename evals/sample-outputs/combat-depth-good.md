# Sample Output: Combat Depth

Prototype brief:
- Improve: Make combat feel deeper after the first few minutes.
- Watch out: More depth can add buttons, tutorials, and balance work.
- Useful pattern: Reuse the existing attack input, but let enemy state change the outcome.
- Smallest test: One arena, one enemy, three states: guarding, exposed, charging.
- Check: Play for five minutes and record whether players react differently without new controls.

Smallest prototype:

- Add `guarding`, `exposed`, and `charging` to one test enemy.
- Keep the current attack button.
- Hitting `guarding` breaks guard, hitting `exposed` deals bonus damage, and hitting `charging` interrupts.
- Put state duration and damage multipliers in config.
- Show a debug label for current state and hit result.

Non-goals:

- Do not add a skill tree.
- Do not add new player buttons.
- Do not rebalance the whole combat system.

Acceptance criteria:

- A player can see the enemy state before attacking.
- The same attack produces three readable outcomes.
- The prototype can be disabled or removed cleanly.
