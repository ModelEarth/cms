# PLAN.md — ModelEarth / sveltia-cms contribution roadmap

## Goal
Contribute improvements back to `sveltia/sveltia-cms` via PRs. Work happens in
this fork (`ModelEarth/sveltia-cms`). Source changes are built locally and
served from `package/dist/sveltia-cms.js`.

---

## PR 1 — Full theming support (issue #29 — one combined PR)

**Status:** Ready to submit.

### Done
- [x] `src/lib/types/public.js` — added `show_in_intro` to `LogoOptions` typedef
- [x] `src/lib/components/entrance/entrance-page.svelte` — wrapped logo `<img>`
      in `{#if $cmsConfig?.logo?.show_in_intro ?? true}`
- [x] `pnpm build` — schema and dist regenerated, `show_in_intro` confirmed in schema
- [x] `explore/config.yml` — `show_in_intro: false` added
- [x] `explore/index.html` — CSS logo hack removed; config key now handles it

### Remaining
- [ ] Test locally in browser: click EDIT PAGE, verify logo absent on sign-in page
- [ ] Open PR against `sveltia/sveltia-cms` — references #29, does not close it

---

### Also done (theming — originally planned as PR 2, merged into PR 1)
- [x] `themes/` folder — CSS files moved from `cms/themes/`
- [x] Each theme file — `--sui-base-hue` and `--sui-font-family-default` added
      so the Sveltia CMS UI (toolbar, inputs, buttons) inherits each theme
- [x] `themes/index.html` — preview page for all themes
- [x] `themes/README.md` — usage docs, theme table, `--sui-*` variable reference
- [x] `cms/themes/index.html` — updated to load from `/sveltia-cms/themes/`

---

## Later / backlog

- Explore whether a `custom_theme` config key makes sense (load a theme CSS by
  name from the `themes/` folder automatically)
- `logo.show_in_intro` naming: flag to maintainer — they may prefer
  `show_in_entrance` to match internal component naming
- Additional themes as needed

---

## Build reminder

```bash
source ~/.nvm/nvm.sh && nvm use 22
cd /path/to/webroot/sveltia-cms
pnpm build
```

`explore/index.html` loads from `/sveltia-cms/package/dist/sveltia-cms.js`.
