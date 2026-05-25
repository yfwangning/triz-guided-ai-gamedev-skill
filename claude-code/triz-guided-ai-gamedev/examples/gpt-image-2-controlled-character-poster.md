# Example: GPT Image 2 Poster Without Wrong Text Or Extra Limbs

## Target

- Asset: Fantasy game key art / store poster draft.
- Desired improvement: Make the image feel polished and marketable.
- Current limitation: Broad prompts often add broken title text, extra symbols, crowded props, or bad hands and limbs.
- Constraints: Keep the image usable as a design base and add final typography outside the generated image.

## Core tradeoff

We want to improve visual richness and production speed.
But this may worsen text accuracy, anatomy, composition clarity, and review cost.

## Useful patterns

1. Taking out - remove generated text, logos, UI labels, extra characters, and extra weapons from the first image.
2. Prior action - define content budget and rejection criteria before generating.
3. Segmentation - generate artwork first, add typography later, and move hand closeups to a second pass.
4. Feedback - review text, anatomy, subject count, props, and style before expanding the scene.

## Image brief

- Must show: One readable fantasy warrior key-art draft.
- Must avoid: Wrong text, fake letters, extra limbs, extra characters, extra weapons, busy UI.
- Content budget: One character, one sword, one doorway, one lighting idea.
- Text/anatomy risk: No in-image text; use a simple pose with visible arms, legs, and hands; no separate hand closeup panels in pass one.
- Check: One head, two arms, two legs, one sword, no words, no decorative writing, no invented macro hands.

## GPT Image 2 prompt

```text
Create a vertical fantasy game key art draft for a small indie RPG. One warrior only, three-quarter standing pose, holding one sword at rest, clear readable silhouette, ruined stone doorway in the background, cool moonlight with one warm rim light, painterly but clean, high contrast focal character.

No visible words, letters, numbers, logos, signage, captions, UI, watermarks, extra characters, extra weapons, decorative writing, banners, or posters. Leave the upper third visually calm and empty for typography added later. Do not include separate hand closeup panels in this first sheet; show hands only on the main full-body character in a simple relaxed pose.

Before accepting the image, check that the character has one head, two arms, two legs, plausible hands, one sword, no invented text, no invented hand macro panel, and no unwanted props.
```

## Acceptance criteria

- No readable or fake text appears inside the image.
- The subject count is exactly one character.
- The weapon count is exactly one sword.
- Arms, legs, hands, and silhouette are plausible at final preview size.
- The first sheet does not include a separate hand closeup panel; hand/nail design is deferred to a second pass or local edit.
- The upper third has enough calm space for later title typography.
- If only one region fails, use an edit pass instead of regenerating the full poster.
