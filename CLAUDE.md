# Ahmed Elmadni Website — Claude Code Project Rules

## Project Identity

This is the production website of Ahmed Elmadni, a Saudi Arabia-based accounting and financial professional.

The website is Arabic-first and RTL.

The website represents:

- Senior Accounting
- Financial Reporting
- Cost Accounting
- Financial Analysis
- Tax and Zakat Services
- Accounting Systems
- Financial Tools
- Professional Experience
- Knowledge and Educational Content

The website must feel like a premium personal financial professional brand.
It must not feel like a generic SaaS dashboard or a template.

## Technology

The project may use technologies such as:

- React
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- Motion / Framer Motion style animation library
- Lucide React
- Supabase

Do not assume the exact stack blindly.
Always inspect the actual repository before modifying code.

Before modifying anything:

1. Inspect the existing implementation.
2. Identify the actual dependencies.
3. Preserve existing functionality.
4. Preserve data contracts.
5. Preserve routes.
6. Preserve SEO metadata.
7. Preserve authentication.
8. Preserve Supabase behavior.
9. Preserve existing integrations.

## Primary Redesign Objective

Transform the existing website into a premium Arabic-first editorial financial website.

The visual direction should be:

- Editorial
- Cinematic
- Premium
- Calm
- Trustworthy
- Modern
- Human
- Financial
- Awwwards-inspired

The website should communicate:

> "أحوّل الأرقام المعقدة إلى رؤية أوضح وقرارات أفضل."

The design must feel intentional and art-directed.
It must not look like an AI-generated template.

## Theme Rule

Remove the user-facing Light Mode / Dark Mode switch.
The website must use one permanent visual language.

The visual system combines:

- White
- Warm off-white
- Deep charcoal
- Warm brown
- Soft bronze accents

The website should intentionally alternate between light and dark sections.

Example:

```
LIGHT
↓
DARK STATEMENT
↓
LIGHT CONTENT
↓
DARK PORTFOLIO
↓
LIGHT TOOLS
↓
DARK CTA
```

Do not make the entire website dark.
Do not create a traditional theme toggle.

## Color Direction

Use semantic design tokens rather than scattered raw colors.

Suggested palette:

| Token | Value |
| --- | --- |
| Canvas | `#F6F4F0` |
| White | `#FFFFFF` |
| Ink | `#1C1C1A` |
| Deep Charcoal | `#151514` |
| Warm Brown | `#76543F` |
| Soft Brown | `#A88A73` |
| Bronze | `#B99A78` |
| Border | `#E3DED7` |
| Muted | `#77716B` |

These are design direction references, not mandatory values if the existing design system has better compatible tokens.

Avoid:

- Neon colors
- Cyberpunk aesthetics
- Excessive gradients
- Bright blue fintech aesthetics
- Overly shiny gold
- Fully black pages
- Generic SaaS blue-purple gradients

## Typography

Arabic is the primary language.

The application must remain:

```
lang="ar"
dir="rtl"
```

Arabic typography must provide:

- Excellent readability
- Correct line height
- Comfortable paragraph width
- Strong hierarchy
- Good mobile readability

Use a high-quality Arabic font already available in the project where possible.
Do not replace fonts blindly.
Do not introduce a new font dependency without a clear reason.

## Motion

Use the existing motion system where possible.

Motion should be:

- Smooth
- Purposeful
- Premium
- Responsive
- Performance-conscious

Preferred patterns:

- Page entrance
- Text reveal
- Staggered children
- Masked line reveal
- Scroll reveal
- Image parallax
- Magnetic button hover
- Spring interactions
- Shared layout transitions
- Number counters

Always support:

```
prefers-reduced-motion
```

Do not animate every element.
Do not add motion merely for decoration.

## Responsive Design

Every redesigned section must be tested for:

- Desktop
- Tablet
- Mobile

Mobile is not simply a reduced desktop layout.

The mobile experience must preserve:

- Hierarchy
- Readability
- CTA visibility
- Performance

Avoid:

- Horizontal overflow
- Unusable hover-only interactions
- Excessive animation on mobile
- Tiny typography
- Overcrowded layouts

## Component Architecture

Prefer reusable components when they genuinely reduce duplication.

Possible components include:

- EditorialSection
- SectionHeading
- RevealText
- RevealSection
- MagneticButton
- MetricCard
- ServiceCard
- ProjectCard
- ToolCard
- LogoCard
- PageTransition
- SectionDivider
- Marquee
- Timeline

Do not create unnecessary abstractions.
Do not duplicate animation logic unnecessarily.
Do not create a component only to move a few lines of markup.

## Data and Functionality

Do not delete working functionality.

Preserve:

- Supabase
- Authentication
- Tools
- Forms
- Existing routes
- Existing SEO
- Existing content
- Existing integrations
- Existing data contracts

Visual redesign must not become a functional rewrite.
If a visual change requires a functional change, explain the reason first.

## Development Process

Work in phases.

Before each phase:

1. Inspect relevant files.
2. Identify dependencies.
3. Create a concise implementation plan.
4. Modify only the required files.

After each major phase:
Run the actual project validation commands defined by `package.json`.

Do not blindly assume that the project uses `npm run lint` or `npm run build`.
First inspect `package.json` scripts.
Fix all errors before continuing.
Do not continue if the build is broken.

## Git Safety

Work only on:

```
claude/saudi-accounting-content-rm076q
```

Never modify `main` directly.
Create focused commits.

Suggested commit style:

```
feat(ui): redesign navigation and hero
feat(ui): redesign homepage sections
feat(ui): redesign services experience
feat(ui): redesign financial tools
refactor(ui): unify motion system
fix(ui): responsive layout issues
```

## Redesign Order

- PHASE 0 — Audit
- PHASE 1 — Design System
- PHASE 2 — Navigation + Global Layout
- PHASE 3 — Homepage
- PHASE 4 — About / Experience
- PHASE 5 — Services
- PHASE 6 — Tools
- PHASE 7 — Projects / Portfolio
- PHASE 8 — Library / Knowledge
- PHASE 9 — Skills / Certifications
- PHASE 10 — Contact
- PHASE 11 — Final QA

Do not redesign all pages at once.

## Quality Bar

The final result should feel:

- Designed, not generated
- Premium, not flashy
- Calm, not empty
- Modern, not trendy
- Professional, not corporate
- Human, not robotic

Every section must have a clear purpose.
Every animation must support hierarchy or feedback.
Every page must feel like part of the same system.

## Final Validation

Before considering the redesign complete:

- Validate the actual project build
- Validate the actual lint command if available
- Check all routes
- Check all forms
- Check all tools
- Check mobile
- Check RTL
- Check reduced motion
- Check keyboard navigation
- Check image loading
- Check SEO metadata

Never claim completion if the build is broken.
