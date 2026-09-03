# Contributing

## Local Setup

```bash
npm run serve
```

No installation, build, environment file, or account is required.

## Branches

- Features: `feature/short-description`
- Fixes: `fix/short-description`
- Documentation: `docs/short-description`

## Change Standards

1. Preserve the untouched source artifact in `source/`.
2. Keep business and product facts source-backed; mark unknowns rather than guessing.
3. Retain photography and attribution unless the rights holder approves a change.
4. Maintain keyboard, reduced-motion, 320px, and no-horizontal-overflow behavior.
5. Update `CHANGELOG.md` and the README Recent Updates section for each release.
6. Refresh desktop, mobile, and social screenshots after material visual changes.
7. Keep the stable production URL consistent across metadata and documentation.

## Pull Request Checklist

- Run `npm run check` and `git diff --check`.
- Test the complete changed flow in a real browser.
- Include before/after screenshots for visual changes.
- Confirm no credentials, customer data, analytics identifiers, or unlicensed assets were added.
- Describe content claims that still require owner confirmation.
