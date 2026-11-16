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

## Movable images, stickers and ink selection — 15 November 2026

- The notebook **remains embedded directly beside the active CMA or IFRS lesson** at widths ≥900 px; on smaller screens it opens as the lesson's drawer, **never as a standalone page**.
- Four built-in, completely offline sticker packs: **Accounting, Study, Medical and Markers**. Tap a sticker to insert it on the current sheet, choose **Select**, drag its body to move it and drag the corner handle to resize it. Selected items can be duplicated or deleted.
- Add a locally chosen **PNG/JPEG/WebP image** through the notebook controls. The browser decodes and compresses it to bounded WebP/raster data and embeds it in the existing local notebook JSON. Only supported raster file types are accepted; SVGs, external URLs and scripts are rejected. The image can be moved/resized with the same touch/pen/mouse gestures.
- The new **Select** tool also selects existing pen strokes, straight lines, rectangles, ovals and highlights via geometric hit testing. Drag to relocate the selected stroke; use the corner handle to resize, or duplicate/delete from the inline selection controls. Changes preserve vector stroke data. Stroke edits participate in the existing ink undo/redo history.
- All placed images/stickers are exported with the paper and ink to the **local multi-page PDF**, and preserved in JSON backup, restore, page duplicate and cross-session local storage. Older version-1 notebooks without `objects` hydrate with empty objects while leaving their typed notes and ink untouched.
- The app enforces per-page caps (24 objects, up to five raster images), checks file types and size (up to 8 MB before compression) and bounds embedded image data to avoid uncontrolled browser storage consumption. Storage is still browser-local; a full device quota may prevent saving and is surfaced to the learner.

### Limitations and follow-up testing
- Image and sticker data are **part of the notebook backup**. They are not uploaded to servers, searchable from the site, or automatically synced between devices.
- Canvas compression quality varies with the browser and artwork. Complex photographs might need a smaller source image. Rasterizing multi-page PDFs with many images can consume memory.
- Unit/integrity and production checks verify geometry/storage interfaces; hands-on S Pen, Apple Pencil, mobile Safari and Chrome QA remain important for actual gesture precision, emoji rendering and PDF fidelity.
- The handwritten text recognition service still depends on native browser support; adding stickers/images does not provide a paid AI handwriting service.

## Editable accounting study widgets — 15 November 2026

The side notebook now offers **six selectable learning-card templates** in addition to all drawing tools, stickers and images. The experience remains **inside the same CMA/IFRS lesson**, with a wide-screen split view and a temporary drawer on narrow screens.

| Template | Example and behavior |
| --- | --- |
| Sticky note | Editable multi-line takeaway card, with four color options |
| Formula | Editable plain-text formula card for calculations, discount rates or definitions |
| Checklist | Editable and tickable revision items, with add/remove controls |
| Journal entry | Accounting table with Account, Debit and Credit columns |
| T-account | Two-column Debit/Credit ledger-style table |
| Comparison | Three-column comparison table for standards or reporting periods |

**To use:** select **Study elements** in the notebook tools and insert the template. Switch to **Select** (usually active automatically), tap the inserted card, then edit text or cells in the inspector **under the paper**. Cards can be moved, resized, duplicated and deleted like images and stickers. The color dropdown selects yellow, mint, rose or blue. Checklist items can be checked and changed; table rows/columns can be added/removed up to bounded limits.

Structured contents are saved locally with existing page objects; they are included in the same JSON backups/restores and in local print/PDF snapshots. Page search now includes card titles, checklist items and all table cells. The data schema remains version 1 and still accepts older notebooks without these objects. A malformed or oversized widget cannot inject HTML: all content is text-only and bounded during hydration.

**Important limitations:** the formula card is an editable *text* card, not a symbolic mathematics engine or an IFRS/CMA answer checker. Journal/T-account templates provide study grids, not double-entry validation or posting to an actual general ledger. The on-device handwriting recognizer still depends on browser/OS support. Lists and tables on the paper are visual references; detailed editing is kept in the side panel to prevent accidental pen gestures from changing values. This update requires real-device visual review for exact font spacing and PDF pagination of dense tables.

## Study Elements direct editing fix — 15 November 2026

A user identified that **Study Elements looked like stickers, not editable learning tools**. The source audit confirmed the old paper layer was a pointer-disabled visual representation, while the only real editors were buried in an inspector below the paper. In Select mode, the whole card's pointer handler also interpreted touches as drag gestures, which interfered with editing.

**Fixed interaction (inside the existing CMA/IFRS side notebook, NOT a separate screen):**

- **Sticky notes and formulas:** tap directly inside the card to enter/change multiline text using the keyboard or tablet touch keyboard.
- **Checklists:** tick/untick items and edit descriptions **within the card**; the + / − buttons add/remove items. An advanced inspector below the paper remains available as an alternative.
- **Journal entry, T-account and comparison tables:** edit debit/credit/accounts and other cells **in place**; add rows and columns directly within the card using bounded controls.
- **Card colours:** choose from yellow, mint, rose and blue via the small visible colour dots inside the card.
- **Move and resize:** the **⠿ header strip is a dedicated drag handle**. Touching a text box is no longer a drag; the existing bottom-right corner handle resizes the selected item.
- **Usability:** newly inserted templates are wider so table cells can be edited without being microscopic in the docked notebook. Existing saved items keep their earlier positions and sizes. Keyboard notes, vector pen, sketches, paper textures, separate CMA/IFRS collections, export PDF and JSON backup stay unchanged.

**Technical details:** real input controls are rendered in `StudyNotebookEditableWidget.tsx`, passed a bounded `NotebookObject` and writing direction, and update the same stored source values via React's controlled `onChange`. There is no `contenteditable` HTML injection, server dependency or copy of an image standing in for editable data. If the tool is Pen/Highlighter, the card becomes an uninteractive display so drawing on top is still possible. Switch to Type or Select to edit the paper card.

**Verification:** executable regression checks simulate controlled text, formula, checklist, table and color events, plus explicit no-drag-on-input guards. Device-level touch and PDF visual checks remain necessary for narrow tablets and actual OS keyboards.

## Flowing journal tables and inline formulas — 15 November 2026

**Reason for the change:** An editable floating accounting *card* is still not a proper study-document element. Journal entries, T-accounts and financial tables must flow between written paragraphs; a formula should appear as editable text at the learner's caret, followed by continuing prose.

### New study workflow

1. Open the **same CMA or IFRS lesson** and its **adjacent side notebook**. Choose the Type tool, place the cursor in the existing note.
2. Choose **Insert into text** (separate from movable **Study elements**).
3. A formula preset (PV, NPV, accounting equation or current ratio) or user-written formula is inserted **in the paragraph at the cursor**. It remains ordinary, editable Unicode text and is not a static image or chip. Subsequent keyboard typing continues immediately afterwards.
4. **Journal entry / T-account / comparison / blank table** inserts an **actual editable HTML table between paragraphs**. If the cursor is in the middle of a paragraph, text before remains before the table and the remainder stays in an editable paragraph after it. Table cells, headers, title and row/column controls can be edited directly inside the sheet.
5. Selecting the corresponding option from the older **Study elements** palette now also inserts **formulas into text and accounting tables into document flow** (rather than creating a floating card). Floating sticky notes, checklists, stickers and images remain available for annotations.

### Preservation and integration

- The page model has an optional, typed `flow` list of paragraphs and tables. Existing plain-text pages are **not rewritten until the learner intentionally inserts a structured item**. Conversion keeps existing text and inserts the new item at the remembered selection.
- Each flow edit synchronizes the `page.text` fallback so **page search, plain-text download and legacy previews remain useful**. Structured `flow` data is the editable source and is serialized in normal local JSON backups; restoration validates the block type, IDs, maximum size, table columns, rows and cell text.
- Page duplication makes deep copies of table rows and gives fresh paragraph/table IDs. Existing pen ink, paper backgrounds, photos, stickers, and split-view layout are unaffected.
- Local PDF export now prints the paragraphs and real tables **in flow order**, followed by paper ink and artwork in the same coordinate layers. Typed content uses the existing paper line-height and optional Arabic or English fonts.
- No new login, backend, network, rich-editor dependency or AI API is required.

**Explicit limitations:** Inline formula presets are Unicode mathematical text, not a computer-algebra engine or financial answer checker. Complex superscript layouts/MathML and spreadsheet formulas are not computed. Structured tables are editable learning aids; they do not validate balanced journal entries. Very long mixed text-and-table pages may scroll inside the fixed-size sheet, and PDF is a visual page capture bounded by its selected page size rather than automatically paginated multi-page typesetting. Use a new notebook page when the layout becomes dense.

### Regression tests

New tests execute pure caret insertion for English and Arabic, splitting text around tables without losing characters, independent CMA/IFRS state, safe flow storage limits, table language, editable paragraph and journal-cell input events, flow-aware PDF output, and the unchanged lesson-side split view.

## Streamlined side-notebook controls — 15 November 2026

The notebook UI has been reorganized without changing its **in-lesson CMA/IFRS side panel**, local file format, or the available writing/financial tools.

The upper notebook bar always shows the current page selector, next/previous page buttons, a new-page action, and the editable page title. A single **six-section navigation bar** replaces the long continuous strip of unrelated controls:

| Section | Visible actions |
| --- | --- |
| **Write / كتابة** | Keyboard writing and selecting/moving existing objects; notebook typing guidance |
| **Draw / رسم** | Pen, highlighter, eraser, straight line, rectangle, ellipse and Select; contextual ink colour/width; ink Undo/Redo |
| **Insert / إدراج** | One expandable insertion palette at a time: in-text formulas and real accounting tables; study elements; offline stickers; compressed local images |
| **Paper / الورق** | Ruled/graph/dotted/plain background, paper shade, A4/A5/Letter, Arabic/English direction, matched writing spacing, handwritten/regular typeface, and dock-width control on wide screens |
| **Pages / الصفحات** | Search in page titles/content, duplicate, reorder earlier/later, and delete selected page (confirmation remains); navigation is accessible above the section bar |
| **Export / الحفظ** | Local PDF exports (selected page or all notebook pages), JSON backup and restoration, and plain-text TXT export |

Opening one section hides the others' auxiliary controls, not the actual paper. The real study page and notebook remain visible as adjacent CSS-grid siblings from 900 px onward; on narrower screens the notebook is a temporary drawer attached to the lesson, not a separate route.

The new navigation uses semantic buttons, visible bilingual labels, pressed states and keyboard-focus outlines. All previously existing controls retain their original handlers and persistence. Opening **Insert** defaults to in-text insertion when no other insertion palette is expanded. The three insertion submenus are mutually exclusive. Inserting a formula, accounting table, local photo, sticker or study object returns the learner to the **Write** section so the content is immediately visible. Page navigation and adding/duplicating a page similarly return to writing.

Ink Undo/Redo was moved to the **Draw** section directly above the sheet instead of duplicating it below the paper; browser text editing retains native keyboard undo. Handwriting recognition is still offered after the paper when supported; it depends on the browser, not this navigation refactor.

This is a **presentation and interaction refactor** rather than a rewrite of the accounting notebook data model. Long flow pages and device-specific pen precision limitations stated earlier continue to apply.

## Validation

`node --test scripts/tests/study-notebook.test.mjs` covers page isolation, JSON round-trip, malformed data handling, paper backgrounds, curve geometry, unsupported browser behavior, mocked successful device recognition, and layout integration. The accounting GitHub Actions workflow also checks IFRS/CMA content, the production build, TypeScript and ESLint.

## Split-view and mixed-input review — 15 November 2026

- Replaced fixed desktop notes and article padding with a **two-column sibling grid** within the existing lesson. The IFRS or CMA route remains the same, not a notebook page. Study content grows and shrinks alongside a continuously visible sticky notebook at ≥900 px.
- Added a desktop/tablet-landscape pane-width slider (320–470 px). Tablets below 900 px and phones retain a closable side drawer attached to the current lesson; resizing across 900 px closes the mobile overlay safely.
- On overflow, the typed-text continuation command measures the real styled text editor before splitting. It preserves Unicode and whitespace, and moves **only text**. Pen strokes, stickers/diagrams already drawn and the original page identity remain intact. The maximum 40 pages per curriculum still applies.
- On-device recognition previews no longer clear diagrams/ink by default. Keeping ink is checked initially; the learner may explicitly choose to remove the strokes after accepting recognized words.
- Remaining limitations: exact pen/typed baselines can differ by font on real tablet devices, and extremely long typed notes require one click to continue to the next page (no automatic ink pagination). Device-level tests are still needed to confirm stylus latency and Arabic on-device recognition.


## Accounting journal check and tablet edit improvements — 15 November 2026

- Inline **journal entry** tables display live debit and credit totals in the learner's current language, with a balanced/out-of-balance status and the absolute difference. Empty journals remain in a neutral state.
- The checker identifies invalid rows (missing account name, both debit and credit entered on one row, missing amount, invalid numbers or zero amounts). It does **not** change accounting entries, auto-post to a ledger, or imply a formally audited journal.
- Amounts support Western digits, Arabic-Indic and Persian digits, Arabic decimal/thousands separators, regular comma-grouped thousands, and two-place comma decimals. Computations use integer minor units to avoid floating-point rounding mistakes. Unrecognized and ambiguous formats are rejected instead of guessed.
- Inline table cell inputs are at least 40px high with 16px text to improve on-screen keyboard behavior and tap accuracy on tablets. Debit/credit cells request the numeric/decimal keyboard and render left-to-right, while account titles continue to respect page writing direction.
- No additional account, backend, database or network dependency is introduced; existing v1 notebook storage, data format and JSON recovery are unchanged.
- **Release gate:** automated source regression coverage was added, but actual CI execution, desktop/tablet visual QA, and confirmation of production publication are still required.


## PDF journal summaries and efficient table navigation — 15 November 2026

- Inline journal tables now show the **same bilingual debit/credit totals, status and validation warnings** in locally exported PDF snapshots as in the live editor. The PDF uses a shared display formatter rather than duplicating balance formulas.
- The PDF surface is generated from editable note data without modifying saved rows, and each table's status is printed after its table. The JSON backup stays the canonical editable format; PDFs are rasterized print copies.
- On desktop/tablet keyboards, **Enter** and **ArrowDown** move to the same column in the next available row; **Shift+Enter** and **ArrowUp** move to the previous row. The target cell is focused and its text selected for replacement. The default **Tab/Shift+Tab** browser traversal stays available. IME composition, Cmd/Ctrl and Alt key combinations do not override text entry.
- The new behavior is limited to in-page editable tables; it introduces neither an external accounting service nor a database.
- **Known limitation:** if a large inline table plus totals exceeds the fixed page height, the existing page clipping/overflow limitation still applies. Verify exported pages visually on small-tablet devices.
- CI regression tests cover computed PDFs in English and Arabic, invalid/unbalanced states, data immutability, keyboard focus, and IME/Tab behavior. Physical tablet stylus tests remain necessary.


## Lossless continuation of rich study notes — 16 November 2026

- When a formatted note with inline tables exceeds its physical paper height, an **explicit "Move overflowing rich notes to next page"** action measures each rendered paragraph/table relative to the current sheet. It leaves the fitting blocks in place and moves all subsequent blocks to a newly inserted page with matching paper, direction and typeface.
- For a partially fitting **paragraph**, the existing browser textarea measurement is reused to find the last fitting character, preserving all remaining Unicode text (including Arabic, whitespace and punctuation) in a new paragraph block with a fresh ID.
- For a partially fitting **table**, the entire table moves to the continuation page. An existing journal table and its editability remain intact; it is never flattened into a screenshot or silently truncated.
- Pen strokes, images, stickers and other floating objects are **not** transferred automatically. They remain on the original sheet so existing drawings cannot be lost. The selected page changes to the new continuation after the user invokes the action.
- If the first block itself cannot fit (or the 40-page cap is reached), a visible warning instructs the user to reduce it manually rather than creating an endless chain of empty pages.
- PDF export now checks measured document content against each print sheet before rasterizing; if the content overflows, it refuses to produce an incomplete PDF and identifies the offending page in the page's writing language. The original editable notes and local JSON backup remain unchanged.
- This is **deliberate continuation, not automatic layout reflow**. Browser font metrics, oversized freehand notes, ink overlays and actual stylus support still require on-device QA. The PDF exporter is intentionally conservative rather than hiding content beyond the page border.


## Oversized editable tables: safe row-level continuation — 16 November 2026

- In the existing side notebook, a table that straddles the visible sheet boundary can now move its **overflowing whole rows** to a continuation page while keeping at least one data row on each sheet. The original heading remains with the first segment; the next segment is labelled **continued / تابع**, repeats the table's header row and retains fully editable cells.
- The break is based on the actual rendered row heights plus title/footer/control height, rather than an assumed fixed number of rows. If there is not enough space to retain a header and data row, the existing full-block move is attempted instead.
- **Accounting safety at the initial release:** journal-entry tables were not split until a shared cross-page balance check was available. The follow-up implementation below adds an explicitly linked two-part journal with one validated result for the whole entry.
- This is a **manual** action; it preserves each original data row exactly once and does not silently post or recalculate accounting entries. Drawings and images remain on their original pages. The v1 notebook backup format and local browser storage key are unchanged.
- PDF export continues refusing truncated content. Extra-long continuation pages may require repeating the same action; automatic multipage journal balancing and physical tablet stylus acceptance remain outside this change.


## Linked journal-entry continuation and full-entry review — 16 November 2026

- A long journal-entry table may now be split once at a measured **whole-row** boundary across **two notebook pages**. Both editable fragments carry a stable group ID and an explicit start/end marker. The original first fragment stays on its page; the second repeats the headers and is labeled as a continuation.
- **One accounting entry, one balance check:** totals are calculated from the combined original data rows, not from the fragments independently. Both pages show the **same entire-entry debit/credit totals**, difference and warnings. Repeated headers are never treated as accounting entries.
- If the other page is deleted, copied incorrectly, the saved link is invalid, or more than two fragments claim the same group, the status becomes **Incomplete linked entry**. Partial totals are labeled unsafe and never described as a balanced transaction.
- Selected-page PDF exports receive the full CMA or IFRS page collection as read-only context. They therefore display the same combined result as exporting the entire notebook. A PDF rendered without its complete journal context explicitly warns that the entry is incomplete.
- The v1 notebook format and localStorage key stay unchanged; optional link fields are validated during JSON restoration. Existing standalone journals continue to behave exactly as before. Duplicating a sheet creates an independent unlinked journal copy rather than corrupting the original linked entry.
- **Current limitation:** the linked-entry workflow supports two fragments only. A single segment that still cannot fit a physical page needs a shorter entry or manual layout adjustment. It does not automatically move ink or objects and does not constitute accounting approval or posting. Browser-based tests and real-tablet visual/stylus tests are separate requirements.
