---
title: Performance-First Pages
description: Shipping less JavaScript while keeping interactions where they matter.
publishDate: 2026-03-05
draft: false
---

The easiest way to make a page fast is to ship less to it. Astro's architecture makes that the default rather than something you have to opt into — static HTML is the baseline, and JavaScript is layered in only where it's genuinely needed.

## Static by Default

Every Astro component runs at build time on the server. The output is plain HTML. There's no client-side framework loading, no virtual DOM reconciling, no hydration waiting to happen before the page becomes usable.

For content-heavy pages — articles, marketing pages, documentation — this is exactly the right model. The browser parses HTML natively and quickly. There's nothing faster to ship.

## Islands Architecture

When you do need interactivity, Astro uses a pattern called islands. Each interactive component is an isolated island that hydrates independently. The rest of the page remains static HTML.

You control when an island loads using client directives:

```astro
<!-- Hydrate immediately -->
<Counter client:load />

<!-- Hydrate when visible in the viewport -->
<Chart client:visible />

<!-- Hydrate only when the browser is idle -->
<Comments client:idle />

<!-- Never hydrate (server render only, no JS) -->
<StaticWidget />
```

The `client:visible` and `client:idle` directives are particularly useful. A comments section below the fold doesn't need to load its JavaScript until the user scrolls near it. Deferring that work meaningfully improves Time to Interactive for the content above.

## Measuring What Matters

Core Web Vitals give you three numbers that correlate with how a page actually feels to use:

- **LCP (Largest Contentful Paint)** — how fast the main content loads. Keep it under 2.5s.
- **INP (Interaction to Next Paint)** — how quickly the page responds to input. Under 200ms.
- **CLS (Cumulative Layout Shift)** — how much the layout moves unexpectedly. Under 0.1.

Astro's default approach helps all three. Less JavaScript means faster LCP. Fewer event listeners means lower INP. Static HTML with explicit image dimensions means minimal CLS.

## Practical Rules

A few guidelines that hold up well in practice:

- Reach for a client directive only when the component genuinely requires browser APIs or user interaction.
- Prefer `client:visible` over `client:load` for anything below the fold.
- Avoid importing large libraries into client components — check the bundle cost first.
- Use Astro's built-in `<Image>` component for automatic format conversion, sizing, and lazy loading.

Performance isn't a feature you add at the end — it's a consequence of the decisions you make throughout. Starting with a framework that defaults to static HTML means you're starting from a good position.
