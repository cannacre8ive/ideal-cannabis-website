# Architecture

## Overview

Ideal Cannabis is a static, client-side website designed for simple hosting and long-term portability. It has no database, API, server function, secret, framework runtime, or build dependency.

## Stack

- HTML5 semantic structure
- CSS custom properties, grid, fluid type, and responsive media queries
- Vanilla JavaScript for view routing, filtering, modal rendering, form validation, and reveal behavior
- Local JPEG photography
- Google Fonts with documented system fallbacks
- Vercel static hosting

## Directory Structure

```text
assets/images/          Local production photography
documentation/assets/  README screenshots and social preview source
scripts/                Dependency-free release verification
source/                 Untouched input artifact
index.html              Complete production application
social-preview.png      Public 1200 × 630 share image
favicon.svg             Brand favicon
robots.txt              Crawler policy
sitemap.xml             Canonical route declaration
vercel.json             Hosting headers and cache policy
```

## Runtime Model

The browser loads `index.html` and the image/font assets. The strain catalog is an in-memory JavaScript object. UI state consists of the active page hash, selected strain filter, open/closed modal, mobile navigation state, and local form field values. Refreshing the page restores only the hash-addressable view.

## Routes

The public origin serves one document at `/`. Internal views use client-side hashes:

- `/#home`
- `/#story`
- `/#strains`
- `/#findus`
- `/#wholesale`

No API endpoints exist. The wholesale form uses a `mailto:` URL, and the newsletter control is explicitly a local demonstration state.

## Data Model

Each strain record contains an identifier, name, type, cultivation method, lineage, breeder, image, THC/CBD/terpene display values, flavor, aroma, effect, terpene notes, package formats, and batch note. Values are presentation content retained from the supplied prototype and are not fetched or independently verified.

## Deployment

Vercel serves the repository root. `vercel.json` adds stable response headers and long-lived immutable caching for versioned images. The HTML and social assets use a shorter revalidation policy so release changes propagate predictably.

## Security and Privacy

- There are no credentials or environment variables.
- No form data is stored or transmitted by the site itself.
- External requests are limited to Google Fonts and user-initiated links.
- Response headers disable MIME sniffing, restrict referrer detail, and disable unnecessary browser permissions.
