# Design System

## Direction

The interface uses an editorial, restrained visual language intended to signal craft, patience, and connoisseurship. Large serif display type carries the brand voice; compact uppercase sans-serif labels provide product and interface structure. Photography remains the dominant visual asset.

## Color Tokens

| Token | Value | Use |
| --- | --- | --- |
| Background | `#0C100E` | Primary canvas |
| Elevated background | `#121815` | Cards and bands |
| Panel | `#161D1A` | Form and modal surfaces |
| Border | `#222B27` | Dividers and card outlines |
| Strong border | `#39463F` | Active and hover boundaries |
| Primary text | `#ECEAE1` | Headlines and primary copy |
| Secondary text | `#A7A99E` | Body copy |
| Tertiary text | `#6C6E64` | Credits and metadata |
| Accent | `#6FA98D` | Actions and labels |
| Light accent | `#8FC3A8` | Emphasis and hover states |
| Dim accent | `#3C5A4C` | Low-emphasis accent borders |

## Typography

- Display: Cormorant Garamond, weights 300–600, with Georgia fallback
- Interface and body: Overpass, weights 300–900, with system sans-serif fallback
- Hero: fluid `54px–116px`, tight line height, restrained italic accent
- Section headings: fluid `32px–52px`
- Interface labels: `9px–12px`, uppercase, semibold/bold, expanded tracking

Fonts are loaded from Google Fonts. If they are unavailable, the documented fallbacks keep the site readable.

## Layout and Spacing

- Content maximum width: `1240px`
- Desktop horizontal padding: `40px`
- Mobile horizontal padding: `22px`
- Default section spacing: `110px` desktop, `72px` mobile
- Primary breakpoint: `980px`; compact breakpoint: `560px`
- Cards use narrow gaps, one-pixel borders, and two-pixel corner radii to maintain an understated product-editorial feel.

## Interaction

- Motion is brief and purposeful: reveal, hover lift, image scale, and modal entrance.
- `prefers-reduced-motion` removes transitions and reveals content immediately.
- Keyboard focus uses a two-pixel light-accent outline with four-pixel offset.
- Desktop navigation remains fixed; mobile navigation exposes an announced toggle state.

## Photography

Photography is treated as product evidence, not decoration. Hero crops prioritize flower structure and cultivation context. Product cards use consistent aspect ratios; credits remain visible where provided in the source.

## Constraints

- Preserve brand copy and image attribution from the supplied source unless the rights holder approves a change.
- Do not introduce generic stock cannabis imagery.
- Avoid promotional mechanics that weaken the premium editorial tone.
- No external Figma file was supplied for this release.
