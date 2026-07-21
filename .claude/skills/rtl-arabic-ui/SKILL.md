---
name: rtl-arabic-ui
description: Ensure the Ahmed Elmadni website stays Arabic-first and correctly RTL. Use when building or reviewing layout, directional CSS, icons, typography, forms, tables, or mobile behavior for right-to-left Arabic content.
---

# RTL Arabic UI Skill

## Core Requirement

Arabic is the primary interface language.

The application must remain:

```
dir="rtl"
lang="ar"
```

## Directional CSS

Prefer logical properties:

- margin-inline
- padding-inline
- inset-inline
- border-inline
- text-align: start

Avoid hardcoded left/right where possible.

## Arabic Typography

Use:

- Comfortable line height
- Readable measure
- Clear hierarchy

Avoid:

- Narrow text columns
- Excessive letter spacing
- Forced uppercase
- Latin-style typography rules

## Icons

Icons must respect direction.
Directional icons may need mirroring.

Examples:

- arrows
- chevrons
- navigation icons

Do not mirror universal icons unnecessarily.

## Layout

RTL does not mean every visual element must be mirrored.
Preserve intentional compositions when they improve visual balance.

Always verify:

- navigation
- forms
- buttons
- timelines
- tables
- cards
- mobile layouts

## Content

Do not translate existing Arabic content automatically.
Preserve approved content unless explicitly asked to rewrite it.
When new content is required, write clear professional Arabic.
