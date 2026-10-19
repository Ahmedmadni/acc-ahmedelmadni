"""Import the user's Gleim 2025 Part 1 MCQ PDF into auditable source records.

Usage: python scripts/import-cma-mcq-vol1.py path/to/volume-1.pdf
Requires Poppler's pdftotext. Do not commit the supplied PDF itself.
"""
import re
import json
import subprocess
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit('Usage: python scripts/import-cma-mcq-vol1.py path/to/volume-1.pdf')
pdf = Path(sys.argv[1]).resolve()
root = Path(__file__).resolve().parents[1]
source = subprocess.check_output(['pdftotext', '-layout', str(pdf), '-'], text=True)
text = source.split('\f')
if len(text)-1 != 1087:
    raise SystemExit(f'Expected 1,087 PDF pages, found {len(text)-1}')
sections = [
 (1,1,5,10,'su1-accounting-concepts'),(1,2,13,29,'su1-financial-position'),
 (1,3,40,33,'su1-income-comprehensive'),(1,4,72,46,'su1-equity'),
 (1,5,114,69,'su1-cash-flows'),(1,6,188,30,'su1-consolidation'),
 (2,1,219,20,'su2-receivables'),(2,2,241,18,'su2-inventory-fundamentals'),
 (2,3,260,37,'su2-cost-flow'),(2,4,299,32,'su2-subsequent-measurement'),
 (3,1,336,7,'su3-equity-securities'),(3,2,344,19,'su3-equity-method'),
 (3,3,363,27,'su3-debt-securities'),(3,4,389,50,'su3-ppe'),
 (3,5,443,22,'su3-intangibles'),(4,1,463,30,'su4-contingencies-warranties'),
 (4,2,496,21,'su4-leases'),(4,3,518,12,'su4-income-taxes'),
 (4,4,531,23,'su4-bonds'),(5,1,551,21,'su5-revenue-contracts'),
 (5,2,571,33,'su5-over-time'),(5,3,610,21,'su5-impairment-disposal'),
 (6,1,630,18,'su6-ir-foundations'),(6,2,646,20,'su6-ir-capitals'),
 (6,3,661,9,'su6-ir-principles-elements'),(6,4,669,14,'su6-ir-adoption'),
 (7,1,679,30,'su7-cost-terms'),(7,2,703,30,'su7-cost-behavior'),
 (7,3,735,9,'su7-costing-techniques'),(7,4,742,62,'su7-absorption-variable'),
 (8,1,810,21,'su8-job-order'),(8,2,832,11,'su8-process'),
 (8,3,842,38,'su8-abc'),(8,4,888,14,'su8-life-cycle'),
 (9,1,903,45,'su9-joint-products'),(9,2,956,35,'su9-overhead'),
 (9,3,994,35,'su9-service-departments'),(10,1,1041,26,'su10-jit-lean'),
 (10,2,1060,21,'su10-erp-outsourcing'),(10,3,1078,12,'su10-capacity'),
]

def lines_for_page(number):
    lines=text[number-1].splitlines()[2:]
    for i in range(len(lines)-1,-1,-1):
        if re.match(r'^\s*Study Unit \d+:',lines[i]) and i>=len(lines)-9:
            lines=lines[:i]
            break
    return lines

def extract_raw(start, end):
    lines=[]
    for page in range(start, end):
        ls=lines_for_page(page)
        if page == start:
            for i,line in enumerate(ls):
                if re.match(r'^\s*1\)\s+',line):
                    ls=ls[i:]
                    break
        lines += [(page,l) for l in ls if l.strip()]
    return lines

def normalize(lines, topic):
    result=[]
    i=0
    while i<len(lines):
        p,l=lines[i]
        if i+1<len(lines):
            _,next_line=lines[i+1]
            m=re.match(r'^\s*(\d{1,2})\s+(.+)$',l)
            if m and re.match(r'^\s*\)\s+',next_line):
                result.append((p, m.group(1)+') '+m.group(2)+' '+next_line.strip().lstrip(')').strip()))
                i+=2;continue
            m=re.match(r'^\s*([1-3])\s+(.+)$',l)
            after=re.match(r'^\s*([0-9])\)\s+(.+)$',next_line)
            if m and after and not re.search(r'\$|\d,\d',m.group(2)):
                result.append((p,m.group(1)+after.group(1)+') '+m.group(2)+' '+after.group(2)))
                i+=2;continue
        if topic=='su7-cost-behavior' and l.lstrip().startswith('2     A management accountant'):
            result.append((p,'20) A management accountant is about to prepare graphs of total'))
            i+=3;continue
        if topic=='su2-receivables' and p==235 and re.match(r'^\s*6\)\s+An analysis',l):
            l=re.sub(r'6\)', '16)',l,1)
        result.append((p,l))
        i+=1
    return result

def flatten(items):
    # Keep the figures and table rows legible rather than collapsing them into prose.
    return '\n'.join(line.strip() for _,line in items).strip()

questions=[]
for i,(unit,sub,start,expected,topic) in enumerate(sections):
    end=sections[i+1][2] if i+1<len(sections) else 1088
    lines=normalize(extract_raw(start,end),topic)
    anchors=[]
    for j,(page,line) in enumerate(lines):
        m=re.match(r'^\s*(\d+)\)\s+',line)
        if m and int(m.group(1))==len(anchors)+1:
            anchors.append((j,int(m.group(1)),page))
    nums=[n for _,n,_ in anchors]
    simple=list(range(1,expected+1))
    if nums!=simple: raise ValueError((topic, nums, simple))
    # Some sections begin with a full-page fact pattern before question 1.
    initial=[]
    for pre_page in range(start,anchors[0][2]+1):
        initial += [(pre_page,l) for l in lines_for_page(pre_page)]
    first_anchor=next(k for k,(_,l) in enumerate(initial) if re.match(r'^\s*1\)\s+',l))
    preamble=initial[:first_anchor]
    context=[]
    for k,(pp,l) in enumerate(preamble):
        if 'Fact Pattern:' in l:
            context=([(pp,l.split('Fact Pattern:',1)[1])] if l.split('Fact Pattern:',1)[1].strip() else [])+preamble[k+1:]
    for j, (offset,n,page) in enumerate(anchors):
        until=anchors[j+1][0] if j+1<len(anchors) else len(lines)
        block=lines[offset:until]
        question_context=context[:]
        for k,(_,line) in enumerate(block):
            if re.match(r'^\s*Fact Pattern:',line):
                intro=line.split('Fact Pattern:',1)[1]
                context=([(block[k][0],intro)] if intro.strip() else [])+block[k+1:]
                block=block[:k]
                break
        if topic=='su8-abc' and n==34:
            block=[(p,re.sub(r'^\s*\.\s+Provide','A. Provide',l)) for p,l in block]
        option_spans=[(k,m.group(1)) for k,(_,line) in enumerate(block)
            if (m:=re.match(r'^\s*([A-D])\.\s*(.*)$',line))]
        answer_spans=[(k,m.group(1)) for k,(_,line) in enumerate(block)
            if (m:=re.search(r'Answer \(([A-D])\) is correct\.',line))]
        q={'unit':unit,'section':sub,'number':n,'page':page,'topicId':topic,
           'block':block,'options':option_spans,'answers':answer_spans,
           'context': question_context}
        questions.append(q)
        if len(option_spans)!=4 or [v for _,v in option_spans]!=list('ABCD') or len(answer_spans)!=(0 if topic=='su9-service-departments' and n==1 else 1):
            raise ValueError(f'Bad options/answer: {topic} question {n}, page {page}')
if len(questions)!=1060:
    raise ValueError(f'Expected 1,060 questions; extracted {len(questions)}')

parsed=[]
unnamed_case_references = {
    (2,3,5), (2,3,6), # inventory card without a company name
    (2,3,19),          # Metro's inventory activity table
    (5,2,12),          # Pell's two construction contracts
    (5,2,19), (5,2,20), (5,2,21), (5,2,22), # Big's construction contract
    (5,2,30), (5,2,31), # Catus's construction contracts
    (7,2,9),           # marketing-cost activity table
    (9,1,13), (9,1,14), # Pickett's Products S and T
}
for q in questions:
    block=q['block']; opts=q['options']; ans=q['answers']; n=q['number']
    before=block[:opts[0][0]]
    before[0]=(before[0][0],re.sub(r'^\s*\d+\)\s*','',before[0][1]))
    stem=flatten(before)
    context=flatten(q['context'])
    if context:
        # A PDF fact pattern has no explicit closing marker. Carry it only to
        # questions that name its entity, or to reviewed unnamed references.
        aliases=set(re.findall(
            r'\b([A-Z][A-Za-z-]{2,})\s+(?:Company|Corporation|Corp\.|Co\.|Inc\.|Industries|Industrial|Manufacturing|Foods|Glassworks|Lab)\b',
            context,
        ))
        first_name=re.match(r'^([A-Z][A-Za-z-]{2,})\b',context)
        if first_name and first_name.group(1) not in {'The','During','On','At','A','An','Data','Believing','Estimated','Selected','Illustrated','Since','Consider'}:
            aliases.add(first_name.group(1))
        if 'M&P Tool' in context: aliases.add('M&P')
        matches_entity=any(re.search(r'(?<![A-Za-z])'+re.escape(alias)+r'(?![A-Za-z])',stem) for alias in aliases)
        if matches_entity or (q['unit'],q['section'],n) in unnamed_case_references:
            stem=context+'\n'+stem
    values=[]
    for ix,(start,letter) in enumerate(opts):
        until=opts[ix+1][0] if ix<3 else len(block)
        region=block[start:until]
        answer_at=next((j for j,(_,line) in enumerate(region) if 'Answer (' in line),None)
        choice=region[:answer_at] if answer_at is not None else region
        first=choice[0]
        choice[0]=(first[0],re.sub(r'^\s*[A-D]\.\s*','',first[1]))
        values.append(flatten(choice))
    if q['unit']==1 and q['section']==1 and n==1:
        a,b=values[:2]
        split=a.index('\nProvision of information')
        values[0]=a[:split]
        values[1]=a[split+1:]+('\n'+b if b else '')
    if q['unit']==1 and q['section']==1 and n==2:
        stem=stem.removesuffix('\nHistorical cost.').strip()
        values[0]='Historical cost.'
    if (q['unit'],q['section'],n)==(7,2,20):
        stem=('A management accountant is preparing graphs of total variable cost and variable cost per unit '
              'for a short-term plan. Dollars are on the vertical axis and activity is on the horizontal axis. '
              'How will the two graphs appear?')
        values=[
            'Total: upward straight line; per unit: horizontal straight line.',
            'Total: upward curve; per unit: roughly horizontal line.',
            'Total: upward straight line; per unit: upward straight line.',
            'Total: horizontal straight line; per unit: upward straight line.',
        ]
    if ans:
        index='ABCD'.index(ans[0][1]); apos=ans[0][0]
        next_opt=next((k for k,_ in opts if k>apos),len(block))
        rationale=flatten(block[apos+1:next_opt])
    else:
        index=2;rationale='Electricity usage is the activity driver for factory electric power; the other bases have no direct causal relationship.'
    parsed.append({'unit':q['unit'],'section':q['section'],'number':n,'page':q['page'],
                   'topicId':q['topicId'],'stem':stem.replace('\uf0b7','•'),'choices':values,
                   'answerIndex':index,'explanation':rationale.replace('\uf0b7','•'),
                   'answerStatus':'inferred' if not ans else 'source'})

for q in parsed:
    if len(q['stem'])<10 or min(map(len,q['choices']))<1 or len(q['explanation'])<10:
        raise ValueError(f'Incomplete item: SU {q["unit"]}.{q["section"]} Q{q["number"]}')
for unit in range(1,11):
    target = root / 'src' / 'data' / f'cma-gleim-2025-vol1-unit-{unit}.json'
    with target.open('w') as output:
        json.dump([q for q in parsed if q['unit']==unit],output,ensure_ascii=False,indent=2)
        output.write('\n')
print('Imported 1,060 English source questions across ten units; one source answer is inferred.')
