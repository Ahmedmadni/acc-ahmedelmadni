# Side Study Notebook — CMA and IFRS

This component is part of the accounting library. It is intentionally **not** a cloud application or a separate notebook project.

## What is implemented

- Shared sidebar UI on desktop when visiting `/library/cma`, `/library/standards` or any nested IFRS standard lesson. A closeable drawer is used on smaller screens and tablets. Other library sections keep their original layout.
- Separate collections for **CMA** and **IFRS**, each with up to 40 selectable pages, titles and protected delete confirmation.
- Keyboard notes and SVG pen/eraser input via Pointer Events; accepts mouse, touch and pressure-capable styluses. Bézier smoothing is used for the vector ink. Stroke colors and widths can be customized, and the latest stroke can be undone.
- Four paper patterns (ruled, graph, dotted, blank), four textured colors (white, ivory, warm cream, pale blue), A4/A5/US Letter, adjustable ruler pitch and left/right writing direction.
- Typed notes use the **same computed spacing** as the ruled/grid background. The line-height and page background interval use the shared `page.spacing * renderedWidth / 760` formula; resizing a sheet retains the intended pitch. English handwriting uses `Caveat`; Arabic uses `Aref Ruqaa Ink`. Both are optional webfonts with installed/system fallbacks when offline.
- Browser-only handwriting recognition when both `navigator.createHandwritingRecognizer()` and `HandwritingStroke` are supported. The recognition feature requires explicit user activation; supported languages depend on the OS/browser. Text candidates remain **editable** and the ink is replaced **only** after the learner explicitly approves. If a recognizer is absent, the button is disabled and pen writing/smoothing remain available without network connectivity.
- Local storage key `study-notebook-pages-v1`; separate page sets per curriculum. JSON backup of both curricula plus plain-text export for the current page. User drawings are not submitted to the accounting site backend, translation providers or AI APIs.
- Data schema validates imported/restored storage records on load: caps text/pages/ink, rejects unsafe colors, clamps sizes, ignores malformed records.

## Known limitations

- Handwriting recognition is **not universal**: on some ChromeOS installations only English recognition is available. The web platform does not guarantee Arabic recognition. We do not promise semantic/grammar correction or a complete handwritten-text engine where the API is absent.
- The professional typeface applies to **typed or accepted recognized text**, while smoothing improves the **drawn stroke contours**. Arbitrary drawings are not silently changed into letters.
- A notebook page has a fixed visual boundary. If typed content extends past the available paper height, the editor scrolls. For the most consistent ruled-paper layout and pen alignment, use additional pages instead of typing many screen heights into one page.
- Notebook data is local to **the current browser/device**. Private browsing, clearing site storage or browser quotas may remove it. Download the JSON backup to retain important work. There is no account-based synchronization.
- Optional Google Fonts depend on a network connection for their initial load; offline fallback typefaces are provided.
- This notebook does not copy pages or ink from other projects such as MemoFlow.


## Functional review — 15 November 2026 (second pass)

A source audit identified and corrected these interaction defects:

1. **Pen eraser:** previously erased only at the initial press and only when the press was near a sampled vertex. The revised eraser captures the pointer for the whole drag and tests proximity against each complete polyline segment, so fast, sparse pen strokes can be erased consistently.
2. **Desktop/mobile opening:** previously the floating opener set mobile-dialog state unconditionally, even on a desktop. Desktop now opens the dock directly, while tablet/phone opens the modal drawer. The mobile drawer also suppresses background document scrolling while active.
3. **Handwriting timing:** old captured strokes restarted timestamps at zero independently. New input uses a common drawing start and, critically, transcription normalizes even older ink to an increasing timeline before handing it to the browser recognition API. Original stored ink point coordinates and times remain unchanged.
4. **JSON backup recovery:** exporting a JSON backup previously had no matching importer. An import control now accepts a validated version-1 backup, imposes a file-size limit, requires confirmation before overwriting both sections, and restores each page, ink and selected page.
5. **Regression checks:** new automated cases verify eraser hits between two pen samples, complete backup restore, existing-section isolation and nonmutating recognition after multiple old strokes.

### Still dependent on real-device testing

- Browser/OS handwriting recognition support varies. A mocked recognizer demonstrates correct API data handling; it cannot validate recognition accuracy on an actual Apple Pencil/S Pen tablet, nor guarantee Arabic recognition.
- Browser-font rendering/baselines may differ between installed fonts. Paper row pitch and keyboard line-height share a formula, but a real-device visual baseline inspection is recommended.
- Very long typed passages can scroll inside a single paper view while ink is anchored to the physical sheet. Use separate notebook pages for lengthy content and do not treat this as infinite canvas pagination.
- Local storage has device/browser quota and offers no multi-device sync. Save JSON backups before clearing browser data.

## Validation

`node --test scripts/tests/study-notebook.test.mjs` covers page isolation, JSON round-trip, malformed data handling, paper backgrounds, curve geometry, unsupported browser behavior, mocked successful device recognition, and layout integration. The accounting GitHub Actions workflow also checks IFRS/CMA content, the production build, TypeScript and ESLint.
