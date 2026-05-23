# Boss Fight Comparison Demo

This tiny browser demo tests the difference between a generic feature-addition response and a tradeoff-guided prototype response.

## Test Prompt

```text
The boss phase 2 feels a bit boring. Make it more exciting, but do not make it feel like cheap random one-shots.
```

What the workflow infers:

- "More exciting" usually means more surprise, tension, or variation.
- "Cheap random one-shots" implies the risk: unfair deaths and weak learnability.
- The hidden tradeoff is surprise versus fair learning.

## Generic Version

The generic version tries to solve "surprise" by adding more random attacks:

- quick burst;
- wide slam;
- fake telegraph;
- side laser;
- short and inconsistent telegraph windows.

This raises novelty, but weakens learnability. The player often cannot explain why a death was fair.

## Tradeoff-Guided Version

The guided version infers the hidden tradeoff:

- Goal: make phase 2 more exciting.
- Watch out: surprise needs some unpredictability, but avoiding cheap deaths needs readable learning.
- Useful patterns: teach first then vary, repeat a readable rhythm, reuse feedback, exaggerate timing during the prototype.
- Prototype slice: one Ground Slam attack family with a base version and one delayed variant.

This keeps the prototype small while testing whether one readable pattern can support both learning and surprise.

## Run

From the repository root:

```bash
python3 -m http.server 8765
```

Open:

```text
http://localhost:8765/demo/boss-fight-comparison/
```

Direct guided mode:

```text
http://localhost:8765/demo/boss-fight-comparison/?mode=triz
```

## Controls

- Move: `A/D` or arrow keys.
- Dash: `Space`.

The goal is not to win. The goal is to observe whether the hit reason is learnable.
