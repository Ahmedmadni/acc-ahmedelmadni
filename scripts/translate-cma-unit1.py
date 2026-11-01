"""Translate Unit 1 additively with resumable, validated Responses streaming.

Usage: python3 scripts/translate-cma-unit1.py
Requires requests and a server-held LOVABLE_API_KEY. AI output needs human review.
"""
import json
import os
from pathlib import Path
import re
import time
import requests

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'src/data/cma-gleim-2025-vol1-unit-1.json'
CACHE = Path('/tmp/cma-translation/cache')
CACHE.mkdir(parents=True, exist_ok=True)
MODEL = 'openai/gpt-6-astra'
FIELDS = ('stemAr', 'choicesAr', 'explanationAr')
SYSTEM = '''You are a professional bilingual CMA accounting translator. Translate EVERY
English stem, choice and explanation faithfully into clear Modern Standard Arabic.
Do not solve, summarize, omit, repair or change the supplied question. Preserve every
number in Western digits, currency symbol, percentage, equation, company name and
choice order, including any source inconsistencies. Translate all prose; numeric-only
choices may remain unchanged. Preserve tables as readable labeled rows and line breaks.
Every numeral must remain explicit and in the same order, even 1 and 2: translate
"1 year" as "1 سنة", never "سنة واحدة"; "2 months" as "2 شهر", never "شهرين".
Use consistent terms: assets الأصول; liabilities الالتزامات; equity حقوق الملكية;
retained earnings الأرباح المحتجزة; additional paid-in capital رأس المال الإضافي المدفوع;
treasury stock أسهم الخزينة; comprehensive income الدخل الشامل; OCI الدخل الشامل الآخر;
goodwill الشهرة; accrual أساس الاستحقاق; depreciation الإهلاك; amortization الإطفاء;
noncontrolling interest الحصص غير المسيطرة; cash flows التدفقات النقدية.
Return exactly one translation for each supplied id in the same order. No commentary.'''
ITEM_SCHEMA = {
    'type': 'object', 'additionalProperties': False,
    'properties': {'id': {'type': 'string'}, 'stemAr': {'type': 'string'},
                   'choicesAr': {'type': 'array', 'items': {'type': 'string'}, 'minItems': 4, 'maxItems': 4},
                   'explanationAr': {'type': 'string'}},
    'required': ['id', *FIELDS],
}
SCHEMA = {'type': 'object', 'additionalProperties': False,
          'properties': {'items': {'type': 'array', 'items': ITEM_SCHEMA}}, 'required': ['items']}

def key(q):
    return f"su{q['unit']}-s{q['section']}-q{q['number']}"

def validate(q, t):
    if t.get('id') != key(q) or len(t.get('choicesAr', [])) != 4:
        raise ValueError('Translation identity or choice count mismatch')
    for field in ('stemAr', 'explanationAr'):
        if not isinstance(t.get(field), str) or not re.search('[\u0600-\u06ff]', t[field]):
            raise ValueError(f'Missing Arabic {field}')
    for en, ar in zip(q['choices'], t['choicesAr']):
        if not isinstance(ar, str) or not ar.strip():
            raise ValueError('Empty choice')
        if re.search('[A-Za-z]{2}', en) and not re.search('[\u0600-\u06ff]', ar):
            raise ValueError('Untranslated choice')
        # Concrete numeric answers must not change or move between choices.
        numbers = lambda s: re.findall(r'\d+(?:,\d{3})*(?:\.\d+)?', s)
        english_numeric = re.sub(r'\b(one|two|ten)\b', lambda m: {'one': '1', 'two': '2', 'ten': '10'}[m[0].lower()], en, flags=re.IGNORECASE)
        if numbers(en) != numbers(ar) and numbers(english_numeric) != numbers(ar):
            raise ValueError(f'Choice numbers changed for {key(q)}: {en!r} -> {ar!r}')

def translate(batch):
    cache = CACHE / (key(batch[0]) + '.json')
    if not cache.exists() and cache.with_suffix('.pending.json').exists():
        pending = json.loads(cache.with_suffix('.pending.json').read_text())
        if len(pending) == len(batch):
            for q, t in zip(batch, pending):
                validate(q, t)
            cache.write_text(json.dumps(pending, ensure_ascii=False, indent=2) + '\n')
    if cache.exists():
        items = json.loads(cache.read_text())
        for q, t in zip(batch, items):
            validate(q, t)
        if len(items) == len(batch):
            return items
    payload = {'model': MODEL, 'stream': True, 'store': False,
               'reasoning': {'effort': 'low', 'summary': 'auto'},
               'include': ['reasoning.encrypted_content'],
               'input': [{'role': 'system', 'content': SYSTEM}, {'role': 'user', 'content': json.dumps([
                   {'id': key(q), 'stem': q['stem'], 'choices': q['choices'], 'explanation': q['explanation']}
                   for q in batch], ensure_ascii=False)}],
               'text': {'format': {'type': 'json_schema', 'name': 'cma_translation', 'strict': True, 'schema': SCHEMA}}}
    for attempt in range(4):
        try:
            with requests.post('https://ai.gateway.lovable.dev/v1/responses',
                               headers={'Lovable-API-Key': os.environ['LOVABLE_API_KEY'],
                                        'X-Lovable-AIG-SDK': 'fetch'}, json=payload, stream=True) as response:
                if response.status_code >= 400:
                    try:
                        error = response.json()
                        detail = error.get('message') or error.get('error', {}).get('message') or 'Request failed'
                    except (ValueError, AttributeError):
                        detail = 'Request failed'
                    if response.status_code == 429 or response.status_code >= 500:
                        if attempt < 3:
                            time.sleep(max(float(response.headers.get('Retry-After', 0)), 2 ** (attempt + 1)))
                            continue
                    raise RuntimeError(f'Gateway status {response.status_code}: {detail}')
                response.raise_for_status()
                output = ''
                completed = False
                for line in response.iter_lines():
                    if not line.startswith(b'data: ') or line == b'data: [DONE]':
                        continue
                    event = json.loads(line[6:])
                    if event.get('type') == 'response.output_text.delta':
                        output += event['delta']
                    elif event.get('type') == 'response.completed':
                        completed = True
                    elif event.get('type') in ('error', 'response.failed', 'response.incomplete'):
                        raise ValueError('Gateway stream did not complete')
                if not completed:
                    raise ValueError('Incomplete stream')
                items = json.loads(output)['items']
                if len(items) != len(batch):
                    raise ValueError('Missing questions')
                cache.with_suffix('.pending.json').write_text(json.dumps(items, ensure_ascii=False, indent=2) + '\n')
                for q, t in zip(batch, items):
                    validate(q, t)
                cache.write_text(json.dumps(items, ensure_ascii=False, indent=2) + '\n')
                print(f'Validated {key(batch[0])}: {len(items)} questions', flush=True)
                return items
        except RuntimeError:
            raise
        except (requests.RequestException, ValueError, KeyError):
            # Transport uncertainty or invalid output must not replay billed work.
            raise

def main():
    records = json.loads(TARGET.read_text())
    original = [{k: v for k, v in q.items() if k not in FIELDS} for q in records]
    batches = [records[i:i+4] for i in range(0, len(records), 4)]
    for batch in batches:
        if all(all(q.get(field) for field in FIELDS) for q in batch):
            continue
        translations = translate(batch)
        for q, t in zip(batch, translations):
            validate(q, t)
            q.update({field: t[field] for field in FIELDS})
        if [{k: v for k, v in q.items() if k not in FIELDS} for q in records] != original:
            raise ValueError('English source changed')
        temporary = TARGET.with_suffix('.json.tmp')
        temporary.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
        temporary.replace(TARGET)
        print(f'Saved {sum(bool(q.get("stemAr")) for q in records)} / {len(records)} translations; source unchanged.', flush=True)

if __name__ == '__main__':
    main()