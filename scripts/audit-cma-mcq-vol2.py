"""Audit every imported Gleim MCQ against an independent PDF text engine.

Usage: python scripts/audit-cma-mcq-vol2.py /path/to/Gleim-2025-vol-2.pdf
Requires PyMuPDF (import fitz). This is an editorial audit, not a build step.
"""

import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

try:
    import fitz
except ImportError as exc:
    raise SystemExit("Install PyMuPDF to run the independent PDF audit") from exc

if len(sys.argv) != 2:
    raise SystemExit("Usage: python scripts/audit-cma-mcq-vol2.py path/to/volume-2.pdf")

root = Path(__file__).resolve().parents[1]
records = [
    record
    for unit in range(11, 21)
    for record in json.loads(
        (root / "src/data" / f"cma-gleim-2025-vol2-unit-{unit}.json").read_text()
    )
]
pdf = fitz.open(sys.argv[1])
if len(pdf) != 1370:
    raise ValueError(f"Expected 1,370 PDF pages, found {len(pdf)}")
pages = [page.get_text("text", sort=True) for page in pdf]


def canonical(value):
    return "".join(
        character
        for character in unicodedata.normalize("NFKD", value).lower()
        if character.isalnum()
    )

canonical_pages = [canonical(page) for page in pages]


# Read the book's actual contents pages rather than using the importer's counts.
toc = defaultdict(dict)
unit_totals = {}
current_unit = None
for page in pages[1:4]:
    for line in page.splitlines():
        match = re.match(r"^(\s*)(\d+):\s*\((\d+)\)", line)
        if not match:
            continue
        indent, label, count = match.groups()
        if not indent:
            current_unit = int(label)
            unit_totals[current_unit] = int(count)
        else:
            toc[current_unit][int(label)] = int(count)

if len(unit_totals) != 10 or sum(map(len, toc.values())) != 40:
    raise ValueError("Could not locate all ten units and forty subunits in the book's contents")

by_section = defaultdict(list)
for record in records:
    by_section[record["unit"], record["section"]].append(record)
if len(records) != sum(unit_totals.values()):
    raise ValueError("Book contents total differs from imported source records")
for unit, sections in toc.items():
    if sum(sections.values()) != unit_totals[unit]:
        raise ValueError(f"Unit {unit}: the printed subunit counts do not sum to its total")
    for section, expected in sections.items():
        entries = by_section[unit, section]
        if [entry["number"] for entry in entries] != list(range(1, expected + 1)):
            raise ValueError(f"Unit {unit} section {section}: question numbers are missing/repeated")

if set(by_section) != {(u, s) for u, subs in toc.items() for s in subs}:
    raise ValueError("Imported questions include an unknown or missing book section")

# The supplied PDF's extracted text has clipped/split labels at these pages.
# Their source page, stem, choices, and printed answer are checked below.
broken_printed_labels = {
    (11, 1, 15), (14, 2, 18), (15, 7, 18), (15, 8, 23),
    (16, 1, 46), (16, 2, 10), (16, 3, 49),
}
observed_broken = set()
missing_fragments = set()
answer_mismatches = []
checked_fragments = 0
for entry in records:
    unit, section, number, page = (entry[k] for k in ("unit", "section", "number", "page"))
    key = unit, section, number
    if not (1 <= page <= len(pdf)):
        raise ValueError(f"Source page is outside the book: {key}")
    if not re.search(rf"(?m)^\s*{number}\)\s+", pages[page - 1]):
        observed_broken.add(key)

    nearby = "".join(canonical_pages[max(0, page - 11): min(len(pages), page + 3)])
    body = "".join(canonical_pages[page - 1: min(len(pages), page + 3)])
    fragments = {
        "stem-start": (entry["stem"][:120], nearby),
        "stem-end": (entry["stem"][-120:], body),
        "explanation-start": (entry["explanation"][:120], body),
        "explanation-end": (entry["explanation"][-120:], body),
    }
    fragments.update(
        {f"choice-{index}": (choice, body)
         for index, choice in enumerate(entry["choices"], start=1)}
    )
    if len(entry["choices"]) != 4 or any(not choice for choice in entry["choices"]):
        raise ValueError(f"Incomplete choices: {key}")

    for field, (text, source) in fragments.items():
        value = canonical(text)
        length = min(30, len(value))
        if not value or (value[:length] not in source and value[-length:] not in source):
            missing_fragments.add((*key, field))
        else:
            checked_fragments += 1

    if entry["answerStatus"] == "inferred":
        if key not in {(16,1,19),(18,2,4),(18,3,5),(19,2,28),(20,2,26)}:
            raise ValueError(f"Unexpected inferred answer: {key}")
        continue
    # Match the printed answer letter to the explanation's text in a separate
    # extraction. Some explanations have the same first sentence as a nearby
    # item, so inspect every local occurrence rather than only the first one.
    prefix = canonical(entry["explanation"])[:30]
    positions = [match.start() for match in re.finditer(re.escape(prefix), body)]
    letters = set()
    for position in positions:
        markers = list(re.finditer(r"answer([abcd])iscorrect", body[:position]))
        if markers:
            letters.add(markers[-1].group(1))
    if "abcd"[entry["answerIndex"]] not in letters:
        answer_mismatches.append(key)

if observed_broken != broken_printed_labels:
    raise ValueError(f"Unexpected numbering irregularities: {observed_broken ^ broken_printed_labels}")
allowed_missing = {
    # Page breaks and two-dimensional answer tables reorder the extracted
    # character sequence in PyMuPDF; the Poppler transcript retains the text.
    (11, 2, 21, "stem-end"), (14, 5, 15, "explanation-end"),
    (14, 5, 25, "explanation-end"), (14, 5, 31, "explanation-end"),
    (14, 6, 18, "explanation-end"), (15, 8, 16, "stem-end"),
    (16, 1, 53, "stem-end"),
    # The end excerpt includes the preceding shared case; its source page
    # falls earlier than the narrow four-page per-question window.
    (15, 5, 6, "stem-end"), (15, 5, 7, "stem-end"),
    (15, 6, 31, "stem-end"),
}
inferred = {
    (16, 1, 19), (18, 2, 4), (18, 3, 5),
    (19, 2, 28), (20, 2, 26),
}
for key in inferred:
    allowed_missing.update({(*key, "explanation-start"), (*key, "explanation-end")})
reconstructed = {
    (14, 4, 2): (3,), (15, 8, 23): (2, 4), (17, 2, 15): (2,),
    (17, 2, 25): (1,), (19, 2, 12): (2,),
}
for key, choices in reconstructed.items():
    if by_section[key[:2]][key[2] - 1].get("sourceTextStatus") != "reconstructed":
        raise ValueError(f"Replacement distractor not marked: {key}")
    allowed_missing.update({(*key, f"choice-{choice}") for choice in choices})
for key in {
    (14, 4, 31), (14, 4, 32), (14, 5, 3), (14, 5, 4),
    (14, 6, 5), (14, 6, 6), (14, 6, 7), (14, 6, 12),
    (15, 7, 10), (15, 7, 11), (15, 7, 12), (15, 7, 13),
    (15, 8, 9), (15, 8, 10), (15, 8, 11),
}:
    if by_section[key[:2]][key[2] - 1].get("sourceTextStatus") != "table-reflowed":
        raise ValueError(f"Reflowed shared case not marked: {key}")
    allowed_missing.add((*key, "stem-start"))
if missing_fragments != allowed_missing:
    raise ValueError(f"Source text mismatch: {sorted(missing_fragments ^ allowed_missing)}")
if answer_mismatches:
    raise ValueError(f"Printed answer key mismatch: {answer_mismatches}")

print(
    f"Verified {len(records)} questions, {len(toc)} study units, "
    f"{sum(map(len, toc.values()))} subunits against the printed contents."
)
print(f"Matched {checked_fragments}/{len(records) * 8} independent source excerpts; "
      f"{len(allowed_missing)} known table/page-break or disclosed reconstruction "
      "excerpts are exempted individually.")
print("Matched all 1,378 printed answer keys; five missing keys are marked inferred.")
