# Eval Prompt: TRIZ Principle Mapping

```text
The boss phase 2 feels a bit boring. Make it more exciting, but do not make it feel like cheap random one-shots. Use TRIZ principles and explain the concrete solution pattern for each principle.
```

## Good Output Should

- Respect that the user only needs to ask naturally; TRIZ terms appear because this prompt explicitly asks for principles.
- Infer that "more exciting" points to surprise, tension, or variation.
- Infer that "cheap random one-shots" points to unfair deaths and weak learnability.
- Identify the tradeoff between surprise/tension and learnability/fairness.
- In the explicit TRIZ explanation, note that this can be treated as a physical contradiction if the same boss pattern needs to be predictable and surprising.
- Use separation in time, condition, or whole/parts.
- Translate each principle into a concrete boss design pattern.
- Avoid abstract principle names without implementation consequences.
- Suggest a smallest prototype, such as one attack family with a readable base version and one delayed variant.
- Include verification, such as hit-cause logs, player failure notes, or a short playtest checklist.
