# Side Study Notebook — CMA and IFRS

This component is part of the accounting library. It is intentionally **not** a cloud application or a separate notebook project.

## What is implemented

- **A real split-view within the study page:** when visiting `/library/cma`, `/library/standards` or a nested IFRS study lesson at widths **900 px and wider**, the lesson and notebook are sibling columns in one CSS grid. The notebook is sticky and independently scrollable, with adjustable **320–470 px** width. There is **no separate notebook route or standalone screen**. On narrower screens, the same notebook remains attached to the current lesson as a temporary side drawer; closing it resumes the identical lesson and scroll position. Other library sections keep their original layout.
- Separate collections for **CMA** and **IFRS**, each with up to 40 selectable pages, titles and protected delete confirmation.
- Keyboard notes and SVG pen/eraser input via Pointer Events; accepts mouse, touch and pressure-capable styluses. Bézier smoothing is used for the vector ink. Stroke colors and widths can be customized, and the latest stroke can be undone.
- Four paper patterns (ruled, graph, dotted, blank), four textured colors (white, ivory, warm cream, pale blue), A4/A5/US Letter, adjustable ruler pitch and left/right writing direction.
- Typed notes use the **same computed spacing** as the ruled/grid background. The line-height and page background interval use the shared `page.spacing * renderedWidth / 760` formula; resizing a sheet retains the intended pitch. English handwriting uses `Caveat`; Arabic uses `Aref Ruqaa Ink`. Both are optional webfonts with installed/system fallbacks when offline.
- Browser-only handwriting recognition when both `navigator.createHandwritingRecognizer()` and `HandwritingStroke` are supported. The recognition feature requires explicit user activation; supported languages depend on the OS/browser. Text candidates remain **editable**. The original ink **stays on the sheet by default** when the learner inserts a recognized text preview; discarding original ink requires an explicit unchecked option. If a recognizer is absent, the button is disabled and pen writing/smoothing remain available without network connectivity.
- Local storage key `study-notebook-pages-v1`; separate page sets per curriculum. JSON backup of both curricula plus plain-text export for the current page. User drawings are not submitted to the accounting site backend, translation providers or AI APIs.
- Data schema validates imported/restored storage records on load: caps text/pages/ink, rejects unsafe colors, clamps sizes, ignores malformed records.

## Known limitations

- Handwriting recognition is **not universal**: on some ChromeOS installations only English recognition is available. The web platform does not guarantee Arabic recognition. We do not promise semantic/grammar correction or a complete handwritten-text engine where the API is absent.
- The professional typeface applies to **typed or accepted recognized text**, while smoothing improves the **drawn stroke contours**. Arbitrary drawings are not silently changed into letters.
- Each page has a fixed visual boundary. When keyboard text exceeds that height, a **Continue overflow on next page** control appears: it measures the exact font/layout of the actual textarea, splits at the last fitting point (preferring a nearby word/paragraph break), copies remaining text to a new sheet while preserving every character, and leaves **all ink on the original page**. The operation requires a click; it does not silently rearrange handwritten drawings or automatically move strokes between sheets. Text can still scroll when the learner declines to paginate.
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
6. **Right-to-left controls:** the floating notebook opener now stays on the right so it cannot overlap the existing left-positioned Focus Mode control when the study interface switches to Arabic. Editable handwriting recognition results explicitly use native browser spellchecking when available.
7. **Protect unreadable saved notes:** invalid or incompatible data in localStorage no longer gets silently replaced with the default blank notebook. The writer suspends saving until the learner intentionally restores a compatible JSON backup or explicitly confirms starting a new notebook. This prevents the hydration race from destroying a damaged but potentially recoverable local record.

### Still dependent on real-device testing

- Browser/OS handwriting recognition support varies. A mocked recognizer demonstrates correct API data handling; it cannot validate recognition accuracy on an actual Apple Pencil/S Pen tablet, nor guarantee Arabic recognition.
- Browser-font rendering/baselines may differ between installed fonts. Paper row pitch and keyboard line-height share a formula, but a real-device visual baseline inspection is recommended.
- Very long typed passages can scroll inside a single paper view while ink is anchored to the physical sheet. Use separate notebook pages for lengthy content and do not treat this as infinite canvas pagination.
- Local storage has device/browser quota and offers no multi-device sync. Save JSON backups before clearing browser data.

## Added study notebook tools — 15 November 2026

The notebook remains **a split-screen sibling of the active CMA or IFRS lesson**. This update does not add a notebook route, navigation page, cloud service, account or database.

- **Seven drawing/writing tools:** keyboard, smooth ink pen, translucent highlighting, straight-line diagrams, rectangle outlines, ellipse outlines, and continuous stroke eraser. Pen colour and width are adjustable; highlighter offers four distinct colours. Shape dimensions remain vector geometry so backing up/restoring notes does not convert ink into screenshots.
- **Ink undo and redo:** up to 40 in-memory stroke/erase snapshots per active notebook page. Browser-native `Ctrl+Z`/`Cmd+Z` remains available in the typed text editor; these controls are specifically for the ink layer, not a combined text/ink document history.
- **Page management:** page list with title and text previews, search across titles and keyboard text, duplicate the selected sheet (text, paper format, strokes), move it earlier/later and preserve navigation by its stable ID. Freehand drawn words are not searched unless explicitly recognized and inserted as text.
- **Real PDF exports:** export all CMA or all IFRS pages from the current library, or just the selected page, directly in the browser using the project's existing `jspdf` and `html2canvas-pro` dependencies. Each exported page uses its selected A4/A5/Letter physical proportions, paper texture, text typeface, ink, highlighter and geometry. PDF exports are page images to preserve Arabic handwriting appearance, rather than selectable/searchable PDFs; JSON backup is the editable archival format. Nothing is uploaded to a server.
- **Per-page persistence:** new highlighter/shape types use an optional backward-compatible `kind` field on each ink stroke. Older backups with no kind continue rendering as ordinary pen ink. Page count, text and stroke caps and source validation remain enforced.
- **Handwriting recognition scope:** only pen strokes are passed to experimental device recognizers; highlighter strokes and geometric shapes are excluded from OCR.
- **Existing split view and pagination:** the adjacent panel continues to display beside the study material on screens ≥900 px and as a lesson-attached drawer on narrower screens. Typed overflow still moves to a following page without disturbing drawings.

### Known limits and recommended QA

- Device specific stylus latency, pen pressure, Arabic local handwriting recognition and exact baseline alignment need real-device inspection; passing unit tests does not certify an S Pen/Apple Pencil experience.
- PDF snapshots are rasterized to faithfully preserve page paper and visible typography. They are intended for viewing/printing, not copying text or editing. Large 40-page notebooks can take longer to capture locally or exhaust low-memory devices. Export fewer pages when needed.
- Undo/redo targets ink only. Native browser text editing undo/redo remains separate; a fully unified editor history would require redesigning the page editor.
- Per-page search searches typed text and page names, not pen ink, and there is no multi-device sync. JSON backup remains important for recovery.

## Validation

`node --test scripts/tests/study-notebook.test.mjs` covers page isolation, JSON round-trip, malformed data handling, paper backgrounds, curve geometry, unsupported browser behavior, mocked successful device recognition, and layout integration. The accounting GitHub Actions workflow also checks IFRS/CMA content, the production build, TypeScript and ESLint.

## Split-view and mixed-input review — 15 November 2026

- Replaced fixed desktop notes and article padding with a **two-column sibling grid** within the existing lesson. The IFRS or CMA route remains the same, not a notebook page. Study content grows and shrinks alongside a continuously visible sticky notebook at ≥900 px.
- Added a desktop/tablet-landscape pane-width slider (320–470 px). Tablets below 900 px and phones retain a closable side drawer attached to the current lesson; resizing across 900 px closes the mobile overlay safely.
- On overflow, the typed-text continuation command measures the real styled text editor before splitting. It preserves Unicode and whitespace, and moves **only text**. Pen strokes, stickers/diagrams already drawn and the original page identity remain intact. The maximum 40 pages per curriculum still applies.
- On-device recognition previews no longer clear diagrams/ink by default. Keeping ink is checked initially; the learner may explicitly choose to remove the strokes after accepting recognized words.
- Remaining limitations: exact pen/typed baselines can differ by font on real tablet devices, and extremely long typed notes require one click to continue to the next page (no automatic ink pagination). Device-level tests are still needed to confirm stylus latency and Arabic on-device recognition.
