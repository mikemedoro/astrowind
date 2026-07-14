---
title: A Modern CSS Workflow
description: Layered styles, utility classes, and fluid scale working together.
publishDate: 2026-03-04
draft: false
---

A maintainable CSS strategy starts with clear separation of concerns. This project splits styles across four files, each with a distinct responsibility. That boundary makes it easy to find what you're looking for and harder to accidentally introduce side effects.

## The Four Layers

**`theme.css`** defines design tokens as CSS custom properties inside Tailwind's `@theme` block. Colors, font stacks, spacing scales, and easing functions all live here. Because they're CSS custom properties, they're available everywhere — in Tailwind utilities, in vanilla CSS, and at runtime via JavaScript if needed.

**`typography.css`** handles base element styles and type scale utilities. Heading sizes are defined as `@utility` classes like `type-h1` through `type-h6`, which use fluid text sizes that scale between a minimum and maximum based on viewport width. Base element defaults (body color, link offsets) live in `@layer base`.

**`components.css`** contains higher-level patterns: the `.container-fluid` layout class, `.article-card`, `.prose-content`, and similar reusable structures. These are things that appear repeatedly with the same shape, where a utility class alone would require too much repetition at the call site.

**`utilities.css`** holds single-purpose composable classes like `.stack` and `.eyebrow`. These are concepts that Tailwind doesn't have built-in names for but that you want to reuse semantically rather than as a string of utility classes.

## CSS Cascade Layers

Tailwind v4 uses `@layer` to manage specificity cleanly. Styles in `base` are the lowest priority, then `components`, then `utilities`. This means a utility class will always win over a component default, which is the correct order — components set a baseline, utilities refine it.

The practical benefit: you never need `!important` to override a component style with a utility. The cascade handles it correctly by design.

## Fluid Scale

The `fluid-tailwindcss` plugin generates fluid variants of Tailwind's spacing and typography utilities. The syntax `fl-text-2xl/5xl` means: start at `text-2xl` at the minimum viewport and grow to `text-5xl` at the maximum, interpolating linearly between them.

This replaces the older approach of writing explicit breakpoints for type and spacing:

```css
/* Before: manual breakpoints */
.heading {
  font-size: 1.5rem;
}
@media (min-width: 768px) {
  .heading {
    font-size: 2rem;
  }
}
@media (min-width: 1280px) {
  .heading {
    font-size: 3rem;
  }
}

/* After: fluid scale */
.heading {
  @apply fl-text-2xl/5xl;
}
```

The result is smoother scaling and significantly less code to maintain.

## Keeping It Intentional

The goal of this structure isn't to be prescriptive — it's to give every style a clear home. When something feels out of place, that's a signal to reconsider the abstraction. A well-organized stylesheet is one where you always know where to look.
