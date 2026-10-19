# Design System Master File — Althea-Lapuz Lying-In Clinic

> **LOGIC:** When building or refining any page or component, check this file first. These rules are derived from UI/UX Pro Max (`Healthcare / Medical Clinic`, `Trust & Authority`, `Figtree + Noto Sans` typography, and `WCAG AA/AAA` accessibility standards), tailored specifically to the clinic's signature **Professional Rose Pink** maternal and newborn care identity.

---

##Project Overview

- **Project:** Althea-Lapuz Lying-In Clinic
- **Domain:** Maternal & Newborn Healthcare / PhilHealth-Accredited Lying-In Clinic (Tilapayong, Baliwag, Bulacan)
- **Visual Direction:** Warm, trustworthy, clinical-grade maternal care with a refined **Professional Rose Pink (`#D93678`)** brand identity balanced against **Warm Ivory (`#FFFCFA`)** canvases, **Soft Blush (`#FFF0F5` / `#FCE4EC`)** highlights, and **Deep Navy (`#172033`)** typography.
- **Core Principles:**
  1. **Balanced & Elegant Pink Identity:** Primary brand actions, active navigation states, badges, and key interactive highlights use Professional Rose Pink (`#D93678`) and Deep Rose (`#B92760`), while 80%+ of the viewport remains clean Warm White (`#FFFCFA`), Pure White (`#FFFFFF`), and Soft Blush (`#FFF0F5`). Never make every section bright pink.
  2. **Restrained Geometry:** Moderate corner radii (`rounded-lg`, `rounded-xl`, `rounded-2xl`) for cards, buttons, and containers. Reserve `rounded-full` strictly for small status pills, avatars, and icon badges.
  3. **Scannable Medical Hierarchy:** Clear typographic contrast (`Figtree` headings + `Noto Sans` body), generous whitespace, structured comparison grids, and high-contrast text (`#172033` and `#475569`).
  4. **Zero Fabricated Claims:** Only verified clinic services, real facility/clinical photography, actual PhilHealth accreditation details, and authentic contact channels are presented.

---

## Color Palette & Tokens

| Token (`tailwind.config.js`) | CSS Variable | Hex | Role & Usage | Contrast / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `brand.primary` | `--color-primary` | `#D93678` | Primary CTAs, active nav indicator, key brand icons, focus rings | **4.68:1** on `#FFFFFF` (WCAG AA pass) |
| `brand.primary-hover` | `--color-primary-hover` | `#B92760` | Primary button hover, link hover, active interactive accents | **5.92:1** on `#FFFFFF` (WCAG AA pass) |
| `brand.primary-active` | `--color-primary-active` | `#9E1F50` | Active/pressed button state, high-contrast pink text on blush pills | **7.45:1** on `#FFFFFF` (WCAG AAA pass) |
| `brand.primary-dark` | `--color-primary-dark` | `#4A1228` | Deep Rose-Plum / Burgundy for dark utility bars, footer, and callout banners | **13.8:1** on `#FFFFFF` (WCAG AAA pass) |
| `brand.soft` | `--color-soft` | `#FFF0F5` | Soft Lavender Blush for icon containers, secondary button hover, and subtle tint cards | Soft, calming maternal warmth |
| `brand.light` | `--color-light` | `#FCE4EC` | Pale Rose Pink for selected states, active filter tabs, and subtle badge fills | Clear visual selection state |
| `brand.subtle` | `--color-subtle` | `#FFF8FA` | Warm Blush-Ivory surface for alternating section backgrounds | Keeps page airy and clean |
| `brand.canvas` | `--color-canvas` | `#FFFCFA` | Main page background (Warm White / Ivory) | Eliminates harsh sterile glare |
| `brand.surface` | `--color-surface` | `#FFFFFF` | Card, modal, navbar, and form control surfaces | Crisp elevation against canvas |
| `brand.border` | `--color-border` | `#F2D6E0` | Subtle blush-tinted structural borders for cards, inputs, and dividers | Harmonious warm border |
| `brand.muted` | `--color-muted` | `#F4B8CE` | Muted rose accent border for emphasized callouts and active cards | Subtle structural emphasis |
| `text.primary` | `--color-text-primary` | `#172033` | Main headings and primary body copy (Deep Navy) | **16.2:1** on `#FFFCFA` (WCAG AAA) |
| `text.secondary` | `--color-text-secondary` | `#475569` | Secondary descriptions, table copy, and supporting details (Muted Slate Gray) | **7.4:1** on `#FFFCFA` (WCAG AAA) |
| `text.muted` | `--color-text-muted` | `#64748B` | Captions, metadata, helper labels, and timestamps | **4.7:1** on `#FFFCFA` (WCAG AA) |
| Status Green (`emerald-*`) | — | `#10B981` / `#059669` | **Strictly** for small live status dots/badges (`Open 24/7`, `PhilHealth NBB`, `Copied`) | Never used as a theme or button color |

---

## Typography Rules

- **Heading Font (`font-heading`):** `Figtree` (600, 700, 800) — warm, approachable, geometric sans-serif that conveys modern medical competence.
- **Body Font (`font-body`):** `Noto Sans` (400, 500, 600, 700) — engineered for maximum clinical legibility across mobile and desktop screens.
- **Type Scale & Rhythm:**
  - **H1 (Hero / Page Title):** `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]`
  - **H2 (Section Heading):** `text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight`
  - **H3 (Card / Subsection Title):** `text-lg sm:text-xl font-bold leading-snug`
  - **Body Copy:** `text-base leading-relaxed text-text-secondary` (`max-w-[68ch]` for optimal reading comfort)
  - **Eyebrow / Category Label:** `text-xs font-semibold uppercase tracking-wider text-brand-primary`

---

## Component & Shape Specifications

1. **Buttons (`BaseButton.vue`):**
   - Shape: `rounded-xl` (never oversized pills for main CTAs) with `min-h-[44px]` touch target.
   - **Primary Variant:** `bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-active shadow-brand-sm hover:shadow-brand`
   - **Secondary Variant:** `bg-white border border-brand-border text-brand-primary hover:bg-brand-soft hover:border-brand-primary/50 active:bg-brand-light shadow-card`
   - **Outline Variant:** `border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-soft active:bg-brand-light`
2. **Cards & Containers:**
   - Shape: `rounded-2xl` with `border border-brand-border/80 bg-white shadow-card hover:shadow-card-hover transition-all duration-200`.
3. **Badges & Selected States:**
   - Pale pink (`bg-brand-soft` or `bg-brand-light`) with deep pink text (`text-brand-primary` or `text-brand-primary-active`) and subtle blush border (`border-brand-border`).
4. **Accessibility & Focus:**
   - `:focus-visible` uses a `2px solid #D93678` outline with `2px` offset.
   - Respects `@media (prefers-reduced-motion: reduce)`.
   - All decorative icons use `aria-hidden="true"`, and icon-only controls include explicit `aria-label` attributes.
