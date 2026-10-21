"""Audit every imported Gleim MCQ against an independent PDF text engine.

Usage: python scripts/audit-cma-mcq-vol1.py /path/to/Gleim-2025-vol-1.pdf
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
    raise SystemExit("Usage: python scripts/audit-cma-mcq-vol1.py path/to/volume-1.pdf")

root = Path(__file__).resolve().parents[1]
records = [
    record
    for unit in range(1, 11)
    for record in json.loads(
        (root / "src/data" / f"cma-gleim-2025-vol1-unit-{unit}.json").read_text()
    )
]
pdf = fitz.open(sys.argv[1])
if len(pdf) != 1087:
    raise ValueError(f"Expected 1,087 PDF pages, found {len(pdf)}")
pages = [page.get_text("text", sort=True) for page in pdf]


def canonical(value):
    return "".join(
        character
        for character in unicodedata.normalize("NFKD", value).lower()
        if character.isalnum()
    )


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

# These labels are visibly broken across lines in the publisher PDF, except
# 2.1.16, where the printed label is mistakenly 6). Their question text is
# still checked independently below against the recorded source page.
broken_printed_labels = {
    (2, 1, 16), (2, 4, 32), (7, 2, 20), (7, 4, 37), (7, 4, 38),
    (7, 4, 57), (7, 4, 58), (9, 1, 24), (9, 1, 38), (9, 2, 24),
    (9, 3, 21), (9, 3, 30), (9, 3, 31), (9, 3, 32), (9, 3, 33),
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

    nearby = canonical("".join(pages[max(0, page - 11): min(len(pages), page + 3)]))
    body = canonical("".join(pages[page - 1: min(len(pages), page + 3)]))
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
        if key != (9, 3, 1):
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
    raise ValueError(f"Unexpected PDF numbering irregularities: {observed_broken ^ broken_printed_labels}")
allowed_missing = {
    (7, 2, 20, "choice-2"), # The publisher PDF cuts off this table cell.
    (9, 3, 1, "explanation-start"), # The publisher omits its answer entirely.
    (9, 3, 1, "explanation-end"),
}
reflowed_choices = {
    (1, 5, 65): (1, 2, 3, 4),
    (3, 3, 15): (1, 2, 4),
    (4, 1, 20): (1, 2, 3, 4),
    (5, 1, 12): (2, 3, 4),
    (6, 1, 8): (1, 2, 3, 4),
}
for key, choices in reflowed_choices.items():
    if by_section[key[0], key[1]][key[2] - 1].get("sourceTextStatus") != "table-reflowed":
        raise ValueError(f"Manually reflowed table is not marked: {key}")
    allowed_missing.update({(*key, f"choice-{index}") for index in choices})
if missing_fragments != allowed_missing:
    raise ValueError(f"Source text mismatch: {sorted(missing_fragments ^ allowed_missing)}")
if answer_mismatches:
    raise ValueError(f"Printed answer key mismatch: {answer_mismatches}")
if by_section[7, 2][19].get("sourceTextStatus") != "reconstructed":
    raise ValueError("The clipped question 7.2.20 must disclose its reconstruction")

print(
    f"Verified {len(records)} questions, {len(toc)} study units, "
    f"{sum(map(len, toc.values()))} subunits against the printed contents."
)
print(
    f"Matched {checked_fragments}/{len(records) * 8} independent source excerpts; "
    "18 table-choice excerpts were manually reflowed, one clipped cell was "
    "reconstructed, and two missing answer excerpts are disclosed."
)
print("Matched all 1,059 printed answer keys; one missing answer is marked inferred.")
