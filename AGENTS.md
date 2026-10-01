# Ahmed Elmadni Website — Engineering Notes

## Rules

- Visitor downloads of files from a private storage bucket go through a public API route that verifies the record is published, then redirects to a short-lived signed URL. Why: buckets then need no caller-unbound read rule, so no signed-in user can read files they do not own.
- Browser-only modules are reached through `createClientOnlyFn` with dynamic imports instead of static imports. Why: a static import of a browser-only module into the SSR graph fails the production build.
