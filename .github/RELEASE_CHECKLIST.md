# Release checklist

Use this checklist after feature freeze and before publishing a new KUI Vue version.

- [ ] Run `pnpm verify` from a clean checkout.
- [ ] Review visual changes with `pnpm test:visual`; update snapshots only for intentional changes with `pnpm test:visual:update`.
- [ ] Install the packed package in one existing Vite application and exercise forms, overlays, dropdowns, route changes, dark mode, and locale switching.
- [ ] Check the generated package with `npm pack --dry-run` and confirm no source-only or private files are included.
- [ ] Confirm the changelog, package version, and Git tag use the same version.
- [ ] Publish only from a clean commit after every required CI job passes.
