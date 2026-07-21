---
name: production-refactor
description: Refactor the Ahmed Elmadni production website safely without breaking functionality. Use before and during any visual redesign to protect imports, state, data fetching, routes, Supabase, auth, and SEO, and to validate via the project's real scripts.
---

# Production Refactor Skill

## Principle

The existing application is production software.
Visual redesign must not break functionality.

## Before Editing

Inspect:

- imports
- props
- state
- hooks
- data fetching
- routes
- Supabase
- authentication
- SEO

## Safe Changes

Prefer:

- CSS changes
- layout refactors
- component extraction
- reusable animation components
- token migration

Avoid:

- deleting large files
- rewriting data logic
- changing APIs
- changing route contracts
- changing database behavior

## Validation

After each major change:

1. Inspect `package.json` scripts.
2. Run the appropriate lint command if available.
3. Run the appropriate build command.
4. Run tests if they exist.

If validation fails:

- Diagnose the root cause.
- Fix the issue.
- Re-run validation.

## Git

Make focused commits.

Never mix:

- visual redesign
- database changes
- unrelated bug fixes

in one commit.

## Completion

A phase is complete only when:

- Build passes
- Lint passes if available
- Routes work
- Mobile works
- No obvious regressions exist
