# Using Guided GameDev

Use this router before choosing how much process to show. The user should be able to speak naturally; do not require TRIZ terms.

## Routing Decision

| User request | Route | User-facing output |
|---|---|---|
| Simple bug fix, rename, copy edit, direct value change | Skip | Do the task directly |
| Natural game-dev complaint with a likely tradeoff | Passive prototype brief | Five-line `Prototype brief`, then continue |
| GPT Image 2 or image-generation request with wrong text, extra limbs, unwanted details, or style drift | Image brief | Five-line `Image brief`, then final prompt and review checklist |
| Vague feature request asking for ideas/options | Full design pass | Target, tradeoff, patterns, three options, recommended prototype |
| User asks to brainstorm, explore, or avoid early convergence | Double-diamond pass | Problem diverge, problem converge, solution diverge, solution converge |
| User asks for implementation prompt | Coding-agent prompt | Implementation-ready brief with files, data, runtime behavior, debug, tests |
| User explicitly asks for TRIZ principles | Explicit TRIZ mode | Include principle names and concrete game-dev translation |
| Task is already specified in detail | Implementation mode | Preserve the user's design, add verification and non-goals |

## Natural-Language Trigger Examples

Trigger passive prototype mode:

- "Combat gets repetitive after a few minutes."
- "The HUD is noisy but players still miss important stuff."
- "Boss phase 2 is boring, but do not make it cheap."
- "The level feels like a corridor."
- "AI-generated icons are fast, but the style is all over the place."
- "GPT Image 2 keeps adding fake text and extra limbs."
- "The poster looks cool, but the hands and labels are wrong."
- "I want to prototype faster, but I am worried the code will become messy."

Skip passive prototype mode:

- "Rename `stamina` to `energy`."
- "Fix the null reference in the inventory screen."
- "Change this button label to Continue."
- "Set jump speed to 420."
- "Explain what this function does."

## Passive Prototype Brief

Use this shape by default:

```markdown
Prototype brief:
- Improve:
- Watch out:
- Useful pattern:
- Smallest test:
- Check:
```

Rules:

- Keep each line short.
- Avoid TRIZ principle names unless requested.
- Make the useful pattern concrete enough to implement.
- Do not ask the user to choose between many options unless the request is genuinely ambiguous.

## Passive Image Brief

Use this shape for GPT Image 2 or other image-generation prompts:

```markdown
Image brief:
- Must show:
- Must avoid:
- Content budget:
- Text/anatomy risk:
- Check:
```

Rules:

- Prefer a small content budget over a long prompt.
- Keep exact text out of the generated image unless the user explicitly wants to test text rendering.
- If anatomy matters, reduce subject count, pose complexity, and occlusion.
- Include non-goals such as no extra characters, no signage, no UI labels, or no decorative writing when those are likely failure modes.

## Full Design Pass

Use this shape when the user asks for ideas, options, strategy, system design, or "how should I approach this":

```markdown
## Target
- Feature:
- Desired improvement:
- Current limitation:
- Constraints:

## Tradeoff
We want to improve:
But this may worsen:

## Useful patterns
1.
2.
3.

## Options
### Option A - Low-cost prototype
### Option B - Balanced path
### Option C - Ambitious version

## Recommended next action

## Acceptance criteria
```

## Explicit TRIZ Mode

Use explicit TRIZ terminology only when the user asks for it.

When using TRIZ terms, always translate them:

```markdown
- Separation in time: teach the base attack first, then introduce the delayed variant later.
- Feedback: reuse the same telegraph family so players understand why they were hit.
```

Never leave a principle name without a game-dev consequence.

## Completion Gate

Before saying the task is done, include:

- How to run or playtest it.
- What to observe.
- What result means the prototype worked.
- What result means the approach failed or needs revision.
