# AGENTS.md

## Active work

A `PR-NOTES.md` file in this repo root tracks planned contributions back to
`sveltia/sveltia-cms`. It is not committed — local tracking only.

Current items in PR-NOTES.md:
- `logo.show_in_intro` config option (references issue #29)
- Theme CSS variable overrides (`themes/` folder, also references issue #29)

## Repo layout

| Path | Purpose |
|---|---|
| `src/` | Svelte source — edit here, then rebuild |
| `package/dist/` | Build output — `pnpm build` from repo root (requires Node ≥22) |
| `package/schema/` | JSON schema — auto-regenerated on build from `src/lib/types/public.js` |
| `themes/` | CSS variable theme overrides for use in admin pages; `themes/index.html` is the preview page |

## Build

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm build
```

## Theme files

CSS files in `themes/` are the source of truth.
`cms/themes/index.html` loads them from `/sveltia-cms/themes/`.
Do not duplicate them back into localsite.
