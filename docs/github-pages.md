# GitHub Pages Demo

The playable comparison demo is static and can be hosted directly from GitHub Pages.

This repository includes `.nojekyll` so GitHub Pages serves static files without Jekyll processing.

## Local Preview

From the repository root:

```bash
python3 -m http.server 8765
```

Open:

```text
http://localhost:8765/demo/boss-fight-comparison/
```

## GitHub Pages Setup

The simplest setup is:

1. Push this repository to GitHub.
2. Open the repository settings.
3. Enable GitHub Pages.
4. Choose the main branch and repository root as the source.
5. Open:

```text
https://<owner>.github.io/<repo>/demo/boss-fight-comparison/
```

Replace `<owner>` and `<repo>` with the actual GitHub owner and repository name.

## Suggested README Badge Text

```markdown
[Try the playable demo](https://<owner>.github.io/<repo>/demo/boss-fight-comparison/)
```

## Social Preview

Use `assets/social-preview.png` as the GitHub repository social preview. Keep `assets/social-preview.svg` as the editable source artwork.

## What The Demo Shows

The demo compares two responses to the same natural prompt:

```text
Boss phase 2 is boring, but do not make it cheap.
```

- Generic version: adds random attacks.
- Guided version: teaches one attack family, then adds a delayed variant.

The point is to show that the workflow does not require users to know TRIZ terminology.
