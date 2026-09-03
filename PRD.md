# Product Requirements Document

## Product

Ideal Cannabis Website — portfolio release 1.0.

## Problem

Premium craft cannabis is difficult to evaluate online when producer websites rely on generic lifestyle imagery, shallow strain descriptions, or wholesale-only language. The experience needs to communicate cultivation quality to consumers while giving licensed retailers a direct path to product details and inquiries.

## Audience

- Oregon adults aged 21+ researching craft cannabis products
- Budtenders and dispensary buyers evaluating cultivars and formats
- Portfolio reviewers assessing CannaCre8ive's strategy, photography, design, and development work

## Goals

- Establish a premium, credible, image-led brand presence.
- Make the strain range understandable and easy to filter.
- Connect consumers with retail availability guidance.
- Give dispensary buyers a clear wholesale inquiry path.
- Present the work as a polished, shareable portfolio case study.

## Core User Stories

1. As a consumer, I can understand the producer's values and browse current strains on any screen size.
2. As a connoisseur, I can filter cultivars and review lineage, potency, terpene, aroma, flavor, effect, and format information.
3. As a retail buyer, I can understand the wholesale proposition and create a pre-filled inquiry email.
4. As a portfolio reviewer, I can immediately preview the interface, open a stable live demo, and understand the project scope.

## Functional Requirements

- Home, story, strains, find-us, and wholesale views must be reachable from global navigation.
- Hash URLs must restore the corresponding view on page load.
- Strain filters must correctly update the visible count.
- Every strain must open a detailed, dismissible dialog.
- Wholesale inquiries must require name, business, and email before opening an email client.
- The interface must remain usable at 320px width and with keyboard navigation.

## Non-Goals

- E-commerce, delivery, online ordering, or age-gated transactions
- Live inventory, COA, METRC, CRM, or email-marketing integrations
- Authentication, saved user profiles, or analytics dashboards
- Independent substantiation of supplied commercial or regulatory claims

## Success Metrics

- Production root and social image return public HTTP 200 responses.
- No browser console errors during the verified core flow.
- All five views, six filters, six strain dialogs, and wholesale validation work in production.
- Desktop and 320px screenshots are committed to the repository.
- All Master Codex release artifacts are present and the release audit passes.
