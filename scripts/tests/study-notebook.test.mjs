import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

async function loadTypeScript(path, dependencies = {}) {
  const text = await readFile(path, "utf8");
  const compiled = ts.transpileModule(text, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    module, exports: module.exports,
    require: (id) => { if (Object.prototype.hasOwnProperty.call(dependencies, id)) return dependencies[id]; throw Error("Unexpected runtime dependency " + id); },
  }, { filename: path });
  return module.exports;
}

const notebook = await loadTypeScript("src/lib/study-notebook.ts");
const recognizer = await loadTypeScript("src/lib/study-notebook-recognition.ts");
const notebookWidgets = await loadTypeScript("src/lib/study-notebook-widgets.ts");

test("CMA and IFRS notebooks start with separate blank pages and a local-only storage key", () => {
  const state = notebook.emptyNotebook();
  assert.equal(state.version, 1);
  assert.equal(state.pages.cma.length, 1);
  assert.equal(state.pages.standards.length, 1);
  assert.notEqual(state.pages.cma[0].id, state.pages.standards[0].id);
  assert.notEqual(state.activePage.cma, state.activePage.standards);
  assert.match(notebook.NOTEBOOK_STORAGE_KEY, /notebook/);
  assert.deepEqual(JSON.parse(JSON.stringify(notebook.normalizeNotebook(state))), JSON.parse(JSON.stringify(state)));
});

test("Local pages round-trip text, two writing directions, paper types and strokes without altering ink", () => {
  const store = notebook.emptyNotebook();
  const cma = store.pages.cma[0];
  Object.assign(cma, {
    text: "FV = 100 / 1.05\nصافي القيمة الحالية",
    title: "NPV  — الفصل الثالث",
    size: "A5", pattern: "dots", shade: "blue", spacing: 54,
    typeface: "handwritten", direction: "rtl",
    strokes: [{
      id: "ink-test", color: "#24334a", width: 2.9,
      points: [{ x: 10, y: 20, pressure: .75, t: 1 },
        { x: 21, y: 33, pressure: .4, t: 15 }],
    }],
  });
  const parsed = notebook.normalizeNotebook(JSON.parse(JSON.stringify(store)));
  assert.equal(parsed.pages.cma[0].text, cma.text);
  assert.equal(parsed.pages.cma[0].direction, "rtl");
  assert.equal(parsed.pages.cma[0].size, "A5");
  assert.equal(parsed.pages.cma[0].pattern, "dots");
  assert.equal(parsed.pages.cma[0].shade, "blue");
  assert.equal(parsed.pages.cma[0].spacing, 54);
  assert.equal(parsed.pages.cma[0].strokes[0].points[1].pressure, .4);
  assert.equal(parsed.pages.standards[0].text, "");
});

test("Bad/legacy notebook storage is safely ignored; oversized and malformed input is bounded", () => {
  assert.equal(notebook.normalizeNotebook(null).pages.cma.length, 1);
  assert.equal(notebook.normalizeNotebook({ version: 9 }).pages.standards.length, 1);
  const malformed = {
    version: 1,
    activePage: { cma: "missing" },
    pages: { cma: [{
      id: "good",
      title: "A".repeat(300),
      text: "x".repeat(20000),
      size: "invalid",
      shade: "invalid",
      spacing: -100,
      strokes: [{
        id: "drawing", color: "javascript:alert(1)", width: 500,
        points: [{ x: 999999, y: -100, pressure: 900, t: 0 }],
      }],
    }], standards: [] },
  };
  const safe = notebook.normalizeNotebook(malformed);
  assert.equal(safe.pages.cma[0].id, "good");
  assert.equal(safe.activePage.cma, "good");
  assert.equal(safe.pages.cma[0].title.length, 90);
  assert.equal(safe.pages.cma[0].text.length, notebook.MAX_NOTE_TEXT_LENGTH);
  assert.equal(safe.pages.cma[0].size, "A4");
  assert.equal(safe.pages.cma[0].shade, "ivory");
  assert.equal(safe.pages.cma[0].spacing, 30);
  assert.equal(safe.pages.cma[0].strokes[0].color, "#24334a");
  assert.equal(safe.pages.cma[0].strokes[0].width, 26);
  assert.equal(safe.pages.cma[0].strokes[0].points[0].x, notebook.NOTEBOOK_DESIGN_WIDTH);
});

test("Ruled, graph, dotted and blank paper have distinct patterns and customizable gap", () => {
  for (const size of ["A4", "A5", "Letter"]) {
    assert.ok(notebook.NOTEBOOK_SIZES[size].height > 900);
    assert.ok(notebook.NOTEBOOK_SIZES[size].maxWidth.endsWith("%"));
  }
  const ruled = notebook.notebookPaperBackground("ruled", "ivory", 21);
  const grid = notebook.notebookPaperBackground("grid", "cream", 25);
  const dots = notebook.notebookPaperBackground("dots", "blue", 36);
  const blank = notebook.notebookPaperBackground("blank", "white", 20);
  assert.match(ruled.backgroundSize, /21px/);
  assert.match(grid.backgroundSize, /25px/);
  assert.match(dots.backgroundSize, /36px/);
  assert.match(grid.backgroundImage, /linear-gradient/);
  assert.match(dots.backgroundImage, /radial-gradient/);
  assert.doesNotMatch(blank.backgroundImage, /linear-gradient/);
});

test("Smooth path retains original points and avoids jagged corner-to-corner-only rendering", () => {
  const points = [
    { x: 0, y: 0, pressure: .5, t: 0 },
    { x: 20, y: 25, pressure: .9, t: 50 },
    { x: 50, y: 30, pressure: .6, t: 90 },
    { x: 60, y: 45, pressure: .5, t: 120 },
  ];
  const snapshot = JSON.stringify(points);
  assert.match(notebook.pageStrokePath(points), /^M 0 0 Q/);
  assert.match(notebook.pageStrokePath(points), /L 60 45$/);
  assert.match(notebook.pageStrokePath([points[0]]), /^M/);
  assert.equal(notebook.pageStrokePath([]), "");
  assert.equal(JSON.stringify(points), snapshot);
});

test("Device-only recognition reports unsupported devices instead of silently inventing a transcription", async () => {
  assert.equal(recognizer.supportsLocalHandwritingRecognition({}, {}), false);
  await assert.rejects(
    recognizer.recognizeNotebookInk([{
      id: "a", color: "#000000", width: 2,
      points: [{ x: 12, y: 50, pressure: .5, t: 0 }],
    }], "ltr", {}, {}),
    /unavailable/,
  );
});

test("Supported browser receives the original ink points and only previews its prediction", async () => {
  const received = [];
  let finished = 0, cleared = 0, requested = null;
  class MockStroke { addPoint(point) { received.push(point); } }
  const nav = {
    async createHandwritingRecognizer(settings) {
      requested = settings.languages[0];
      return {
        startDrawing() {
          return {
            addStroke() {},
            async getPrediction() { return [{ text: "  Accrual income " }, { text: "Accrual incomes" }]; },
            clear() { cleared++; },
          };
        },
        finish() { finished++; },
      };
    },
  };
  const strokes = [{
    id: "a", color: "#000000", width: 2,
    points: [{ x: 12, y: 50, pressure: .5, t: 0 }, { x: 35, y: 52, pressure: .9, t: 12 }],
  }];
  const result = await recognizer.recognizeNotebookInk(strokes, "ltr", nav, { HandwritingStroke: MockStroke });
  assert.equal(requested, "en");
  assert.equal(result[0], "Accrual income");
  assert.equal(result[1], "Accrual incomes");
  assert.equal(received.length, 2);
  assert.equal(received[1].t, 12);
  assert.equal(finished, 1);
  assert.equal(cleared, 1);
  assert.equal(strokes[0].points.length, 2, "Recognition does not erase any original ink");
});

test("Sidebar exists only for CMA and IFRS, leaves mobile lessons unobstructed and offers backups", async () => {
  const [route, component] = await Promise.all([
    readFile("src/routes/library.tsx", "utf8"),
    readFile("src/components/library/StudyNotebook.tsx", "utf8"),
  ]);
  assert.match(route, /\{studySection && \(/);
  assert.match(route, /<StudyNotebook/);
  assert.match(route, /data-study-split/);
  assert.match(route, /min-\[900px\]:grid/);
  assert.match(route, /gridTemplateColumns:/);
  assert.match(route, /<Outlet \/>/);
  assert.doesNotMatch(route, /xl:pe-\[416px\]/, "Notebook must not be a fixed overlay with artificial article padding");
  assert.match(component, /NOTEBOOK_STORAGE_KEY/);
  assert.match(component, /localStorage\.setItem/);
  assert.match(component, /onPointerDown=\{pointerDown\}/);
  assert.match(component, /onPointerMove=\{pointerMove\}/);
  assert.match(component, /recognizeNotebookInk\(page\.strokes\.filter/);
  assert.match(component, /keepOriginalInk \? \{\} : \{ strokes: \[\] \}/,
    "Recognized text should not delete diagrams or writing by default");
  assert.match(component, /onSplit=\{splitCurrentPage\}/);
  assert.match(component, /min-\[900px\]:sticky/);
  assert.match(component, /overflow-y-auto/);
  assert.match(component, /application\/json/);
});

test("Eraser hits line segments between sampled stylus points and ignores distant ink", () => {
  const strokes = [
    { id:"horizontal", width:3, points:[{x:10,y:20},{x:110,y:20}] },
    { id:"vertical", width:3, points:[{x:300,y:300},{x:300,y:420}] },
  ];
  assert.equal(notebook.nearestInkStrokeIndex(strokes, 63, 22, 15), 0);
  assert.equal(notebook.nearestInkStrokeIndex(strokes, 303, 370, 15), 1);
  assert.equal(notebook.nearestInkStrokeIndex(strokes, 200, 200, 15), -1);
  assert.equal(notebook.nearestInkStrokeIndex([], 40, 20), -1);
});

test("Restoring backup rejects unrelated JSON and preserves section pages and active selection", () => {
  assert.throws(() => notebook.validateNotebookBackup(null), /Invalid study notebook backup/);
  assert.throws(() => notebook.validateNotebookBackup({ version:1, pages: { cma:[] } }), /Invalid study notebook backup/);
  const original=notebook.emptyNotebook();
  original.pages.cma.push(notebook.createNotebookPage("another", "rtl"));
  original.activePage.cma="another";
  original.pages.standards[0].text="IFRS 17 note";
  const restored=notebook.validateNotebookBackup(JSON.parse(JSON.stringify(original)));
  assert.equal(restored.pages.cma.length, 2);
  assert.equal(restored.activePage.cma, "another");
  assert.equal(restored.pages.standards[0].text, "IFRS 17 note");
});

test("Handwriting timestamps stay monotonic across multiple legacy strokes, without changing ink", async () => {
  const received = [];
  let cleared = 0, finished = 0;
  class Stroke {
    addPoint(point) { received.push(point); }
  }
  const nav = { async createHandwritingRecognizer() { return {
    startDrawing() { return {
      addStroke() {},
      getPrediction: async () => [{ text: "hello" }],
      clear() { cleared++; },
    }; },
    finish() { finished++; },
  }; } };
  const strokes = [
    { id: "old1", points: [{ x: 1, y: 2, t: 0 }, { x: 2, y: 2, t: 30 }] },
    { id: "old2", points: [{ x: 9, y: 2, t: 0 }, { x: 11, y: 2, t: 10 }] },
  ];
  const before=JSON.stringify(strokes);
  const predicted=await recognizer.recognizeNotebookInk(strokes, "ltr", nav, { HandwritingStroke: Stroke });
  assert.equal(predicted[0], "hello");
  assert.deepEqual(received.map(point => point.t), [0,30,50,60]);
  assert.equal(JSON.stringify(strokes), before);
  assert.equal(cleared,1);
  assert.equal(finished,1);
});

test("Regression against basic press-and-release eraser and desktop modal-open mismatch", async () => {
  const component=await readFile("src/components/library/StudyNotebook.tsx","utf8");
  assert.match(component,/activeEraser\.current = e\.pointerId/);
  assert.match(component,/nearestInkStrokeIndex\(strokeBuffer\.current/);
  assert.match(component,/if \(tool === "eraser" && activeEraser\.current === e\.pointerId\)/);
  assert.match(component,/startTime\.current = e\.timeStamp/);
  assert.match(component,/if \(!startTime\.current\) startTime\.current = e\.timeStamp;/);
  assert.match(component,/window\.matchMedia\("\(min-width: 900px\)"\)\.matches/);
  assert.match(component,/validateNotebookBackup\(JSON\.parse\(await file\.text\(\)\)\)/);
  assert.match(component,/if \(saved\) setStore\(validateNotebookBackup\(JSON\.parse\(saved\)\)\)/,
    "Unrecognized stored data must not be silently replaced with the empty template");
  assert.match(component,/if \(!hydrated \|\| !storageWritable\) return;/,
    "Storage writes must not destroy an unreadable prior notebook");
  assert.match(component,/setStorageWritable\(true\)/,
    "Users can restore a valid backup and resume saving");
  assert.match(component,/bottom-5 right-5/,
    "Open notebook control must not collide with bottom-left Focus Mode in RTL");
  assert.match(component,/window\.confirm/);
});

test("Overflow split retains every bilingual character, whitespace and original paper notes", () => {
  const original="IAS 2 — inventory measurement\nتُقاس بالتكلفة\nMore English notes after a paragraph.";
  for (const requested of [4, 20, 30, 45, 58, original.length - 1]) {
    const pages=notebook.splitNotebookText(original,requested);
    assert.ok(pages && pages.first.length >= 1 && pages.continuation.length >= 1);
    assert.equal(pages.first+pages.continuation,original,
      "Page continuation must not drop a single space, newline or Arabic character");
  }
  assert.equal(notebook.splitNotebookText("",12),null);
  assert.equal(notebook.splitNotebookText("a",1),null);
  assert.equal(notebook.splitNotebookText("hello",NaN),null);
  const continuous="X".repeat(120);
  const split=notebook.splitNotebookText(continuous,90);
  assert.equal(split.first.length,90);
  assert.equal(split.continuation.length,30);
});

test("Notebook continues excess text to a following page, preserving existing ink and all lesson content", async () => {
  const [layout,component] = await Promise.all([
    readFile("src/routes/library.tsx","utf8"),
    readFile("src/components/library/StudyNotebook.tsx","utf8"),
  ]);
  assert.match(layout,/data-study-main/);
  assert.match(layout,/data-study-split/);
  assert.match(layout,/dockWidth=\{notebookWidth\}/);
  assert.match(component,/lastFittingTextIndex\(editor, page\.text\)/);
  assert.match(component,/editor\.scrollHeight <= editor\.clientHeight \+ 2/);
  assert.match(component,/updated\[index\] = \{ \.\.\.updated\[index\], text: split\.first/);
  assert.match(component,/updated\.splice\(index \+ 1, 0, continuationPage\)/);
  assert.match(component,/text: split\.continuation/);
  assert.match(component,/canAddPage=\{sectionPages\.length < MAX_NOTEBOOK_PAGES\}/);
  assert.match(component,/min-\[900px\]:sticky/);
  assert.match(component,/min-\[900px\]:top-16/);
  assert.match(component,/dockWidth\}/);
});

test("Stylus shape tools are vector paths and eraser can hit drawn shape outlines", () => {
  const one={ x:10,y:10,pressure:.5,t:0 };
  const two={ x:110,y:90,pressure:.5,t:50 };
  const base={ id:"shape",color:"#24334a",width:2,points:[one,two] };
  assert.match(notebook.notebookStrokePath({ ...base, kind:"line" }), /L 110 90/);
  const box=notebook.notebookStrokePath({ ...base, kind:"rectangle" });
  assert.match(box, /L 110 10 L 110 90 L 10 90 Z/);
  assert.match(notebook.notebookStrokePath({ ...base, kind:"ellipse" }), / a /);
  const rectStroke={...base,kind:"rectangle"};
  const ellipseStroke={...base,kind:"ellipse"};
  assert.equal(notebook.nearestInkStrokeIndex([rectStroke], 55, 10, 8), 0,
    "Eraser hits middle of rectangle top edge rather than only stored endpoints");
  assert.equal(notebook.nearestInkStrokeIndex([ellipseStroke], 110, 50, 8), 0,
    "Eraser hits ellipse right-hand outline");
  const page=notebook.emptyNotebook();
  page.pages.cma[0].strokes=[{...base,kind:"highlighter",width:18,color:"#f6d94e"}];
  const normalized=notebook.normalizeNotebook(page);
  assert.equal(normalized.pages.cma[0].strokes[0].kind,"highlighter");
  assert.equal(normalized.pages.cma[0].strokes[0].width,18);
});

test("PDF exporter uses existing local dependencies and renders full page size with notes and ink", async () => {
  const lib=await loadTypeScript("src/lib/study-notebook-pdf.ts",
    { "@/lib/study-notebook": notebook, "@/lib/study-notebook-widgets": notebookWidgets });
  const dim=JSON.parse(JSON.stringify(lib.STUDY_NOTEBOOK_PDF_MM));
  assert.deepEqual(dim,{A4:[210,297],A5:[148,210],Letter:[215.9,279.4]});
  assert.equal(lib.printableInkStyle({kind:"highlighter",color:"#f6d94e",width:18}).opacity,"0.32");
  assert.equal(lib.printableInkStyle({kind:"pen",color:"#222222",width:2}).opacity,"0.95");
  const source=await readFile("src/lib/study-notebook-pdf.ts","utf8");
  assert.match(source,/import\("html2canvas-pro"\)/);
  assert.match(source,/import\("jspdf"\)/);
  assert.match(source,/text\.textContent = page\.text/);
  assert.match(source,/notebookStrokePath\(stroke\)/);
  assert.match(source,/pdf\.addImage\(/);
  assert.match(source,/pdf\.save\(filename\)/);
  assert.match(source,/for \(let index = 0; index < pages\.length; index\+\+\)/);
  assert.match(source,/node\.remove\(\)/);
  assert.match(source,/printRoot\.remove\(\)/);
});

test("Page management, in-panel search, PDF buttons, undo/redo and color tools have working handlers", async () => {
  const component=await readFile("src/components/library/StudyNotebook.tsx","utf8");
  assert.match(component,/function duplicatePage\(\)/);
  assert.match(component,/function movePage\(step: -1 \| 1\)/);
  assert.match(component,/function undoInk\(\)/);
  assert.match(component,/function redoInk\(\)/);
  assert.match(component,/function savePdf\(allPages: boolean\)/);
  assert.match(component,/exportStudyNotebookPdf\(allPages \? sectionPages : \[current\]/);
  assert.match(component,/onClick=\{duplicatePage\}/);
  assert.match(component,/onClick=\{\(\) => movePage\(-1\)\}/);
  assert.match(component,/onClick=\{\(\) => movePage\(1\)\}/);
  assert.match(component,/onClick=\{undoInk\}/);
  assert.match(component,/onClick=\{redoInk\}/);
  assert.match(component,/setPageSearch\(event\.target\.value\)/);
  assert.match(component,/page\.title \+ " " \+ page\.text/);
  assert.match(component,/\["type", "pen", "highlighter", "eraser", "line", "rectangle", "ellipse", "select"\]/);
  assert.match(component,/kind: tool,/);
  assert.match(component,/opacity=\{stroke\.kind === "highlighter"/);
});

test("Older handwritten notes hydrate with empty movable objects, preserving all original ink", () => {
  const store = notebook.emptyNotebook();
  const ink = {
    id: "legacy-pen", color: "#24334a", width: 3,
    points: [{x: 21, y: 33, pressure: .6, t: 0}],
  };
  store.pages.cma[0].strokes = [ink];
  delete store.pages.cma[0].objects;
  const hydrated = notebook.normalizeNotebook(store);
  assert.equal(hydrated.pages.cma[0].strokes.length, 1);
  assert.equal(hydrated.pages.cma[0].strokes[0].id, ink.id);
  assert.equal(hydrated.pages.cma[0].objects.length, 0);
});

test("Local image source validator rejects remote addresses, SVG, scripts and oversize data", () => {
  assert.equal(notebook.validNotebookImageSrc("https://example.com/x.png"), false);
  assert.equal(notebook.validNotebookImageSrc("data:image/svg+xml;base64,PHN2Zz4="), false);
  assert.equal(notebook.validNotebookImageSrc("data:text/html;base64,PHA+"), false);
  assert.equal(notebook.validNotebookImageSrc("data:image/webp;base64,AA=="), true);
  assert.equal(notebook.validNotebookImageSrc("data:image/png;base64,AAAA".repeat(100000)), false);
});

test("Notebook image/sticker persistence clamps geometry and rejects dangerous inputs", () => {
  const original=notebook.emptyNotebook();
  original.pages.cma[0].objects=[
    { id:"safe-sticker", kind:"sticker", label:"🧮", x:900, y:-20, width:200, height:120 },
    { id:"safe-image", kind:"image", src:"data:image/png;base64,AA==", x:60, y:90, width:200, height:150 },
    { id:"external", kind:"image", src:"https://example.com/image.png", x:0, y:0, width:50, height:50 },
    { id:"svg", kind:"image", src:"data:image/svg+xml;base64,AA==", x:0, y:0, width:50, height:50 },
    { id:"safe-sticker", kind:"sticker", label:"duplicate", x:0, y:0, width:50, height:50 },
  ];
  const normalized=notebook.normalizeNotebook(original).pages.cma[0].objects;
  assert.equal(normalized.length,2);
  assert.equal(normalized[0].x,560);
  assert.equal(normalized[0].y,0);
  assert.equal(normalized[1].src,"data:image/png;base64,AA==");
  assert.equal(normalized[1].kind,"image");
  const copy=notebook.validateNotebookBackup(JSON.parse(JSON.stringify(notebook.normalizeNotebook(original))));
  assert.equal(copy.pages.cma[0].objects.length,2);
});

test("Moving and resizing freehand ink maintains point shape and stays within sheet coordinates", () => {
  const stroke={id:"draw1",kind:"pen",color:"#24334a",width:3,points:[
    {x:100,y:200,pressure:.6,t:0},
    {x:140,y:220,pressure:.8,t:20},
    {x:180,y:260,pressure:.5,t:40},
  ]};
  const original=JSON.stringify(stroke);
  const moved=notebook.transformNotebookStroke(stroke,{x:130,y:240,width:80,height:60},1075);
  assert.equal(moved.points[0].x,130);
  assert.equal(moved.points[0].y,240);
  assert.equal(moved.points[2].x,210);
  assert.equal(moved.points[2].y,300);
  const resized=notebook.transformNotebookStroke(stroke,{x:100,y:200,width:160,height:120},1075);
  assert.equal(resized.points[2].x,260);
  assert.equal(resized.points[2].y,320);
  const bounded=notebook.transformNotebookStroke(stroke,{x:750,y:1000,width:160,height:120},1075);
  assert.ok(bounded.points.every(p=>p.x>=0&&p.x<=760&&p.y>=0&&p.y<=1075));
  assert.equal(JSON.stringify(stroke),original,"Editing a selection does not mutate the source stroke");
});

test("Sticker collections and image import run locally with a restricted raster pipeline", async () => {
  const content=await readFile("src/lib/study-notebook-stickers.ts","utf8");
  assert.match(content,/NOTEBOOK_STICKER_GROUPS/);
  for(const category of ["accounting","study","medical","markers"]) assert.match(content,new RegExp('id: "'+category+'"'));
  assert.match(content,/image\/png/);
  assert.match(content,/image\/jpeg/);
  assert.match(content,/image\/webp/);
  assert.match(content,/file\.size > 8_000_000/);
  assert.match(content,/canvas\.toDataURL\("image\/webp"/);
  assert.match(content,/URL\.revokeObjectURL\(url\)/);
});

test("Paper controls expose select, image upload and stickers without a standalone notebook page", async () => {
  const [component,layout,pdf] = await Promise.all([
    readFile("src/components/library/StudyNotebook.tsx","utf8"),
    readFile("src/routes/library.tsx","utf8"),
    readFile("src/lib/study-notebook-pdf.ts","utf8"),
  ]);
  assert.match(layout,/data-study-split/);
  assert.match(layout,/data-study-main/);
  assert.match(component,/\["type", "pen", "highlighter", "eraser", "line", "rectangle", "ellipse", "select"\]/);
  assert.match(component,/function addSticker\(label: string\)/);
  assert.match(component,/function importImage\(file: File\)/);
  assert.match(component,/onPointerDown=\{\(event\) => startObjectSelection\(event, object\)\}/);
  assert.match(component,/selectionDrag\.current/);
  assert.match(component,/transformNotebookStroke/);
  assert.match(component,/selectedStrokeId/);
  assert.match(component,/onChange\(\{ objects: page\.objects\.map/);
  assert.match(component,/setTool\("select"\)/);
  assert.match(pdf,/for \(const object of page\.objects \?\? \[\]\)/);
  assert.match(pdf,/img\.src = object\.src/);
  assert.match(pdf,/sticker\.textContent = object\.label/);
  assert.match(pdf,/node\.querySelectorAll\("img"\)/);
});

test("Six accounting study-widget templates are truly editable bilingual paper objects", async () => {
  const widgets = await loadTypeScript("src/lib/study-notebook-widgets.ts");
  const ids = widgets.STUDY_WIDGET_TEMPLATES.map(t => t.id);
  assert.deepEqual(Array.from(ids), ["sticky","formula","checklist","journal","taccount","comparison"]);
  assert.equal(new Set(ids).size, 6);
  for (const template of widgets.STUDY_WIDGET_TEMPLATES) {
    const widget = widgets.createStudyWidget(template.id, "widget-"+template.id, "en");
    assert.ok(["sticky","formula","checklist","table"].includes(widget.kind));
    assert.ok(widget.width >= 250 && widget.height >= 150);
    assert.ok(widget.label.length >= 1);
    const result = notebook.validateNotebookBackup({
      version: 1,
      pages: { cma: [{...notebook.createNotebookPage("test"),objects:[widget]}],
        standards: [notebook.createNotebookPage("ifrs")] },
      activePage: {cma:"test",standards:"ifrs"},
    });
    assert.equal(result.pages.cma[0].objects.length, 1, "Persist " + template.id);
    assert.equal(result.pages.cma[0].objects[0].kind, widget.kind);
  }
  const journal = widgets.createStudyWidget("journal", "j", "en");
  assert.deepEqual(Array.from(journal.cells[0]), ["Account", "Debit", "Credit"]);
  const account = widgets.createStudyWidget("taccount","t","ar");
  assert.deepEqual(Array.from(account.cells[0]), ["مدين","دائن"]);
  const checklist = widgets.createStudyWidget("checklist", "cl", "en");
  assert.equal(checklist.items.length, 3);
  assert.equal(checklist.items.every(i=>i.checked===false), true);
  assert.match(widgets.studyWidgetSearchText(journal), /Debit/);
  assert.match(widgets.studyWidgetSearchText(checklist), /questions/);
  const formula = widgets.createStudyWidget("formula", "f", "en");
  assert.match(formula.label, /^PV = FV/);
});

test("Persisted widget content limits text, rows, columns and checkbox count", () => {
  const stored=notebook.emptyNotebook();
  const long="A".repeat(700);
  stored.pages.cma[0].objects=[
    {id:"sticky",kind:"sticky",x:10,y:15,width:280,height:220,tone:"nonsense",label:long},
    {id:"formula",kind:"formula",x:10,y:15,width:280,height:220,label:long},
    {id:"checklist",kind:"checklist",x:10,y:15,width:290,height:280,label:long,
     items:Array.from({length:25},(_,i)=>({text:long,checked:i%2===0}))},
    {id:"table",kind:"table",x:10,y:15,width:300,height:280,label:long,
     cells:Array.from({length:16},()=>Array.from({length:8},()=>long))},
    {id:"unknown",kind:"script",x:10,y:15,width:300,height:200,label:"unsafe"},
  ];
  const safe=notebook.normalizeNotebook(stored).pages.cma[0].objects;
  assert.equal(safe.length, 4);
  assert.equal(safe[0].tone,"yellow");
  assert.equal(safe[0].label.length,notebook.MAX_WIDGET_TEXT_LENGTH);
  assert.equal(safe[1].label.length,notebook.MAX_WIDGET_TEXT_LENGTH);
  assert.equal(safe[2].items.length,notebook.MAX_WIDGET_ITEMS);
  assert.equal(safe[2].items[0].text.length,notebook.MAX_WIDGET_CELL_LENGTH);
  assert.equal(safe[2].items[0].checked,true);
  assert.equal(safe[3].cells.length,notebook.MAX_WIDGET_ROWS);
  assert.equal(safe[3].cells[0].length,notebook.MAX_WIDGET_COLS);
  assert.equal(safe[3].cells[0][0].length,notebook.MAX_WIDGET_CELL_LENGTH);
  const json=JSON.stringify(safe);
  assert.ok(json.length < 14000,"Large or malicious text is bounded");
});

test("Study cards are editable in the side panel and reproduced as text in PDF", async () => {
  const [component,pdf] = await Promise.all([
    readFile("src/components/library/StudyNotebook.tsx","utf8"),
    readFile("src/lib/study-notebook-pdf.ts","utf8"),
  ]);
  for(const phrase of [
    "function addStudyElement(template: StudyWidgetTemplate)",
    "STUDY_WIDGET_TEMPLATES.map(template",
    "function editSelectedObject(patch: Partial<NotebookObject>)",
    "selectedObject.kind === \"checklist\"",
    "selectedObject.kind === \"table\"",
    "selectedObject.items ?? []",
    "selectedObject.cells ?? []",
    "MAX_WIDGET_ROWS",
    "MAX_WIDGET_ITEMS",
    "setShowStudyWidgets(false)",
    "studyWidgetSearchText",
    "data-study-widget={object.kind}",
  ]) assert.ok(component.includes(phrase),"Missing functional widget UI: "+phrase);
  for(const phrase of [
    '["sticky", "formula", "checklist", "table"].includes(object.kind)',
    'entry.textContent = cell',
    'title.textContent = object.label',
    'item.checked ? "☑" : "☐"',
  ]) assert.ok(pdf.includes(phrase),"Missing printable editable widget: "+phrase);
  assert.ok(!pdf.includes("innerHTML"), "Study content must not be interpreted as HTML");
  const layout=await readFile("src/routes/library.tsx","utf8");
  assert.match(layout,/data-study-split/,"Study notes remain adjacent to CMA/IFRS lesson route");
});
