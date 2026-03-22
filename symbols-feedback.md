# Symbols Framework Feedback

This report highlights framework-level usage issues and DOMQL v3 compliance violations discovered in the components (`main.js`, `WineCard.js`, `CategoryPill.js`).

## Executive Audit Summary
- **Overall Compliance Score**: Very Low (Avg 3.5/10)
- **Total Critical Violations**: 27
- **Total Warnings**: 12

## Severity Breakdown

### 1. Critical Violations (DOMQL v3 Syntax & Tokens)
- **Event Handler Misuse (v2 Syntax)**
  - Multiple components (`WineCard.js`, `CategoryPill.js`) are using the deprecated v2 syntax for event handlers: `on: { click: ... }`.
  - **Fix**: Flatten event handlers with the `onX` prefix (e.g., `onClick: (ev, el, s) => { ... }`).
- **Hardcoded Pixel Values (Rule 28)**
  - 25+ instances across components using raw pixel values (`px`) instead of design system scaling tokens (`A`, `B`, `C`, etc.) for `padding`, `margin`, `borderRadius`, `gap`, `width`, `height`, and `fontSize`.
  - **Fix**: Replace all instances like `padding: '24px'` with token equivalents like `padding: 'C'`.

### 2. Structural & Systemic Warnings 
- **Legacy Component Inheritance (Rule 26)**
  - `extends: 'Flex'` is heavily used across components. In DOMQL v3, the preferred pattern is to use the `flow` prop to indicate flexbox context.
  - **Fix**: Replace `extends: 'Flex'` with `flow: 'x'` (for row) or `flow: 'y'` (for column) directly on the component.
- **Color Token Misuse (Rule 27)**
  - Copious use of raw hex (`#ffffff`, `#f5f5f5`, `#1e1e1e`) and `rgba` values instead of design system color tokens (`primary`, `secondary`, `white`, `gray.X`).
  - **Fix**: Migrate all color declarations to semantic or scaled design system tokens defined in the theme.

## Refactor Roadmap
1. **Immediate Syntax Fixes**: Refactor all `on: {}` blocks to `onClick`.
2. **Structural Updates**: Remove `extends: 'Flex'` and replace with `flow: 'x'` or `flow: 'y'`.
3. **Design System Integration**: Identify the project's actual token variables for spacing, typography, and color, and perform a global replacement of all hardcoded `px`, `hex`, and `rgba` values.
