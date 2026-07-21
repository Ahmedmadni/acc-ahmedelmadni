---
name: motion-interaction-system
description: Create a coherent, consistent motion language across the Ahmed Elmadni website. Use when adding or reviewing animations, transitions, reveals, parallax, hover/interaction states, or reduced-motion handling.
---

# Motion Interaction System

## Goal

Create a coherent motion language across the entire website.
Motion must be consistent.

## Motion Principles

1. Enter with purpose.
2. Move less than expected.
3. Use timing to establish hierarchy.
4. Keep interaction responsive.
5. Respect reduced motion.

## Timing

- Small UI: 150–250ms
- Content reveal: 400–700ms
- Large section transitions: 700–1000ms

Avoid excessive delays.

## Reveal Pattern

For sections, prefer:

- opacity
- y translation
- optional subtle blur

Recommended:

```
opacity: 0 → 1
y: 24 → 0
```

## Stagger

Use stagger for:

- Navigation items
- Service lists
- Metric groups
- Tool grids

Do not stagger huge lists excessively.

## Text Reveal

Use line or word reveal only for:

- Hero headline
- Major section headings
- Important statements

Do not animate every paragraph.

## Parallax

Use subtle parallax for:

- Hero image
- Project imagery
- Decorative background elements

Keep movement restrained.

## Reduced Motion

When `prefers-reduced-motion` is enabled:

- Remove parallax
- Reduce transforms
- Remove complex sequencing
- Preserve usability

## Performance

Avoid:

- Expensive continuous animation
- Unnecessary scroll listeners
- Layout thrashing
- Animations on large DOM trees

Prefer transform and opacity.

## Interaction Quality

Buttons should have:

- Clear hover state
- Clear focus state
- Mobile-safe interaction

A button must remain understandable without animation.
