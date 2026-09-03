# User Flow

## Global Navigation

1. The visitor lands on `#home` or a deep-linked hash view.
2. The fixed navigation exposes Home, Our Story, Strains, Find Us, Wholesale, and Contact.
3. Selecting a destination swaps the active view, updates the hash, returns to the top, and closes the mobile menu.
4. The footer repeats the primary routes and contact paths.

## Consumer Discovery

1. Home communicates the brand proposition and cultivation principles.
2. “Explore Our Strains” opens the strain catalog.
3. The visitor chooses All, Indica Dominant, Sativa Dominant, Balanced Hybrid, Indoor, or Sun-Grown.
4. Nonmatching cards are hidden and the result count updates.
5. Selecting a card opens its detailed profile dialog.
6. The dialog can be dismissed with the close control, overlay, or Escape key.

## Retail Availability

1. The visitor opens Find Us.
2. The page explains rotating availability and presents supplied partner examples.
3. The visitor can use the supplied email or Instagram contact, or continue to Wholesale.

## Wholesale Inquiry

1. The buyer opens Wholesale and reviews the partnership proposition.
2. They enter name, dispensary/business, email, and an optional message.
3. Missing required values produce an inline instruction and do not launch another application.
4. Valid input opens the visitor's email client with the recipient, subject, and body pre-filled.
5. A direct email fallback remains visible.

## Newsletter Demonstration State

1. A visitor enters any nonempty email value and selects Join.
2. The input clears and shows a local confirmation placeholder.
3. No data leaves the browser. This must be connected to an approved provider before production marketing use.

## Empty and Error States

- The supplied strain dataset always contains six entries; there is no remote loading state.
- Every current filter has at least one result. If future data produces zero results, the count reports `0 strains`; a designed empty-state message is a Phase 2 improvement.
- Missing hash routes are ignored and leave the current page unchanged.
- External email and social actions depend on the visitor's installed apps and network.

## Accessibility Path

- A skip link moves keyboard users to the page content.
- Navigation links have real hash destinations.
- Strain cards are buttons, and detail content is announced as a modal dialog.
- The mobile menu exposes expanded/collapsed state to assistive technology.
