# GPT Image 2 Controlled Output

Prototype brief:
- Improve: Make a fantasy poster asset look polished enough for a store-page draft.
- Watch out: More visual richness can create fake text, extra limbs, extra props, and review cost.
- Useful pattern: Remove in-image typography, limit the content budget, and check anatomy before adding more scene detail.
- Smallest test: Generate one textless warrior poster with one character, one sword, one doorway, and empty title space.
- Check: Reject outputs with any words, extra characters, extra weapons, missing limbs, extra limbs, or unreadable hands.

Non-goals:
- Do not generate final title typography inside the image.
- Do not add monsters, UI buttons, banners, shops, books, screens, or decorative signs.
- Do not make a multi-character battle scene in the first pass.

GPT Image 2 prompt:

```text
Create a vertical fantasy game key art draft for a small indie RPG. One warrior only, three-quarter standing pose, holding one sword at rest, clear readable silhouette, ruined stone doorway in the background, cool moonlight with one warm rim light, painterly but clean, high contrast focal character.

No visible words, letters, numbers, logos, signage, captions, UI, watermarks, extra characters, extra weapons, decorative writing, banners, or posters. Leave the upper third visually calm and empty for typography added later.

Before accepting the image, check that the character has one head, two arms, two legs, plausible hands, one sword, no invented text, and no unwanted props.
```

Acceptance criteria:
- The poster has exactly one character and one sword.
- There is no visible text or fake lettering.
- Hands, arms, legs, and silhouette are plausible at preview size.
- The upper third can accept real typography later.
- If the composition works but one hand fails, use an edit pass on that region instead of making the whole prompt longer.
