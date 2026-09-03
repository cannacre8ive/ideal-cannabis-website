# Testing and Release Verification

## Automated Release Audit

Run:

```bash
npm run check
```

The dependency-free audit verifies required Master Codex documents, deployment files, screenshot placeholders, crawler/social metadata, local image references, source preservation, and the absence of Wix image hotlinks.

## Pre-Deployment Checklist

- [ ] `npm run check` passes.
- [ ] `git diff --check` passes.
- [ ] Root document loads without browser console errors.
- [ ] All local images and Google Fonts load successfully.
- [ ] Home, Story, Strains, Find Us, and Wholesale views render.
- [ ] Direct loading of every documented hash opens the intended view.
- [ ] Every filter returns the expected subset and updates the count.
- [ ] Every strain detail dialog opens and closes by close button, overlay, and Escape.
- [ ] Required wholesale fields block an incomplete inquiry.
- [ ] A complete wholesale inquiry creates the intended mailto destination and encoded content.
- [ ] Newsletter demonstration state clearly remains local-only.
- [ ] Keyboard focus reaches navigation, filters, cards, modal close, form fields, and footer links.
- [ ] Reduced-motion mode exposes content without animation dependency.
- [ ] 1440px desktop layout has no overflow or clipping.
- [ ] 320px mobile layout has no horizontal overflow, clipped copy, or inaccessible menu controls.

## Production Verification

- [ ] Stable alias returns unauthenticated HTTP 200.
- [ ] `/social-preview.png` returns unauthenticated HTTP 200 and is exactly 1200 × 630.
- [ ] Deployed HTML includes the production canonical URL and complete Open Graph/Twitter metadata.
- [ ] `robots.txt`, `sitemap.xml`, and `favicon.svg` return HTTP 200.
- [ ] Browser console remains free of errors on desktop and mobile.
- [ ] Production screenshots match the released interface and are committed in `documentation/assets/`.
- [ ] GitHub sidebar contains the stable live URL and a concise description.

## Current Content Limitations

Packaging QA does not independently validate supplied potency, terpene, batch, availability, retailer, business, contact, licensing, testing, or compliance statements. Confirm those values with the site owner before commercial use.
