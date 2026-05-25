# GPT Image 2 Controlled Image Generation

Use this reference when the task is about GPT Image 2 prompts, game assets, character art, posters, UI mockups, typography in images, anatomy control, style drift, or unwanted extra details.

## Core Idea

Image generation fails when the prompt asks for too many benefits at once: more visual richness, more characters, more props, more text, more action, and more style polish. The tradeoff is usually:

```text
Make the image richer and more impressive
without reducing prompt fidelity, text accuracy, anatomy, or style consistency.
```

Treat the prompt like a prototype. Generate the smallest image that can prove the important visual choice before adding more content.

## Passive Image Brief

Use this shape before writing the final prompt:

```markdown
Image brief:
- Must show:
- Must avoid:
- Content budget:
- Text/anatomy risk:
- Check:
```

Keep it short. The user should not need to know TRIZ or Double Diamond.

## Common Tradeoffs

| User wants | Common failure | Safer move |
|---|---|---|
| More epic composition | Extra objects, noisy layout, unreadable focal point | Limit to one focal subject, one action, one setting |
| Exact text | Misspellings, invented words, broken Chinese or UI labels | Generate textless art and add text later as a design layer |
| Character action pose | Extra limbs, fused hands, broken weapons | Use simpler pose, fewer occlusions, visible silhouette, reference image when available |
| Multiple characters | Limb mixing, identity drift, wrong count | Generate one character first, then compose or edit |
| Batch assets | Style drift and inconsistent scale | Approve one canonical asset before variants |
| UI mockup | Hallucinated labels and unusable controls | Generate layout without exact copy, then rebuild UI text in code/design tools |

## Useful Patterns

- Taking out: remove text, extra characters, props, background detail, or secondary actions from the first prompt.
- Prior action: define canvas, subject count, exact text policy, style rules, and rejection criteria before generation.
- Segmentation: split character, background, typography, UI, and VFX into separate passes.
- Feedback: review every output against a checklist before making the prompt more ambitious.
- Copying: generate variants only after one canonical image is approved.
- Local quality: solve a risky region with edit/inpaint instead of regenerating the whole image.

## Prompt Construction

Build prompts in this order:

1. Subject and purpose: what the image is for, such as game icon, character portrait, store capsule, poster, UI background, or sprite reference.
2. Content budget: one subject, one action, one environment, and only necessary props.
3. Invariants: exact count, posture, silhouette, colors, camera angle, and what must remain simple.
4. Text policy: no text by default. If text is required, one exact short phrase, large and isolated.
5. Style: medium, lighting, palette, rendering style, and level of finish.
6. Non-goals: no logos, labels, captions, extra characters, extra weapons, extra signs, or decorative writing unless requested.
7. Review criteria: text accuracy, anatomy, subject count, unwanted objects, style consistency, final-size readability.

## Text Policy

Default rule: avoid generated text inside the image.

Use one of these paths:

- Textless art: generate the illustration without words, then add typography in code, Figma, Photoshop, or a design layer.
- Isolated text test: if text must be generated, ask for one short exact phrase on a simple surface with high contrast.
- UI mockup: generate visual hierarchy and layout only; rebuild labels and data as real UI.

Safer prompt fragment:

```text
No visible words, letters, numbers, logos, signage, captions, watermarks, or UI labels.
Leave the title area blank for later typography.
```

When text is required:

```text
Include exactly the text "START" once, centered, large, clean, high contrast.
No other words, letters, numbers, logos, or labels.
```

## Anatomy Policy

Default rule: reduce pose and subject complexity before adding polish.

Safer prompt fragments:

```text
One character only, clear readable silhouette, relaxed hands, both arms and legs anatomically plausible, no occluded limb pileups.
```

```text
Simple three-quarter standing pose, full body visible, hands separated from the torso, no extra characters, no extra weapons.
```

If the output has extra limbs or broken hands, do not add a long list of anatomical negatives first. Narrow the task:

- reduce to one character;
- simplify the pose;
- remove secondary objects;
- use a reference image;
- edit only the broken region when possible.

## Template

```markdown
## GPT Image 2 prompt brief
- Goal:
- Must include:
- Must not include:
- Content budget:
- Text policy:
- Anatomy / structure check:
- Review criteria:

## Prompt
Create <asset type> for <game/use>.

Content: <one subject>, <one action>, <one setting>, <necessary props only>.
Composition: <camera/framing/silhouette>.
Style: <medium/palette/lighting>.
Text policy: <no text / exact text rule>.
Constraints: <no extra subjects/props/logos/labels>.

Review before accepting: <checklist>.
```

## Example

Weak prompt:

```text
Create an epic fantasy game poster with a hero, monsters, magic, title text, UI buttons, lots of weapons, cinematic lighting, and a dramatic battlefield.
```

Guided prompt:

```text
Create a vertical fantasy game key art draft. One warrior only, three-quarter standing pose, holding one sword at rest, clear silhouette, ruined stone doorway in the background, cool moonlight with one warm rim light. No visible words, letters, numbers, logos, signage, UI, captions, watermarks, extra characters, extra weapons, or decorative symbols. Leave the upper third visually calm and empty for later typography. Check that the character has one head, two arms, two legs, plausible hands, one sword, and no invented text.
```

Why it is safer:

- It removes in-image typography.
- It limits subject count and props.
- It chooses a simple pose before polish.
- It gives a review checklist.

## Retry Rules

- Wrong or garbled text: remove text from the image and add it as a separate layer.
- Extra limbs or broken anatomy: simplify pose, reduce occlusion, reduce subject count, or edit the bad region.
- Unwanted signs or labels: add a strict no-text policy and remove background shops, posters, books, screens, or banners.
- Too many props: cut to one focal prop and one supporting prop.
- Style drift: approve one canonical image, then ask for variants that match it.
- Composition is good but one area fails: use edit/inpaint instead of regenerating everything.
