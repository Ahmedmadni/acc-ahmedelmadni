"""Import the user's Gleim 2025 Part 1 Volume 2 PDF into auditable source records.

Usage: python scripts/import-cma-mcq-vol2.py path/to/volume-2.pdf
Requires Poppler's pdftotext. Do not commit the supplied PDF itself.
"""
import re
import json
import subprocess
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit('Usage: python scripts/import-cma-mcq-vol2.py path/to/volume-2.pdf')
pdf = Path(sys.argv[1]).resolve()
root = Path(__file__).resolve().parents[1]
source = subprocess.check_output(['pdftotext', '-layout', str(pdf), '-'], text=True)
text = source.split('\f')
if len(text)-1 != 1370:
    raise SystemExit(f'Expected 1,370 PDF pages, found {len(text)-1}')
sections = [
 (11,1,5,26,'su11-value-chain'),(11,2,26,32,'su11-process-improvement'),
 (12,1,56,28,'su12-regression'),(12,2,84,34,'su12-learning-curve'),
 (12,3,121,51,'su12-expected-value'),(12,4,187,28,'su12-strategic-management'),
 (12,5,209,14,'su12-strategic-planning'),
 (13,1,220,44,'su13-budget-roles'),(13,2,259,14,'su13-standards'),
 (13,3,272,34,'su13-master-budget'),(13,4,296,31,'su13-budget-methods'),
 (14,1,323,8,'su14-sales-budget'),(14,2,338,43,'su14-production-materials'),
 (14,3,399,19,'su14-other-operating-budgets'),(14,4,424,40,'su14-capital-cash-collections'),
 (14,5,480,34,'su14-cash-budget'),(14,6,525,31,'su14-pro-forma'),
 (15,1,563,16,'su15-variance-overview'),(15,2,576,39,'su15-flexible-variance'),
 (15,3,617,46,'su15-materials-variance'),(15,4,662,35,'su15-labor-variance'),
 (15,5,698,12,'su15-mix-yield'),(15,6,718,67,'su15-overhead-variance'),
 (15,7,787,18,'su15-comprehensive'),(15,8,808,31,'su15-sales-variance'),
 (16,1,846,53,'su16-responsibility-centers'),(16,2,891,12,'su16-cost-revenue-profit'),
 (16,3,905,55,'su16-investment-centers'),(16,4,963,12,'su16-balanced-scorecard'),
 (16,5,973,34,'su16-transfer-pricing'),
 (17,1,1008,28,'su17-governance'),(17,2,1034,65,'su17-risk-controls'),
 (18,1,1088,89,'su18-control-procedures'),(18,2,1162,39,'su18-systems-security'),
 (18,3,1193,21,'su18-continuity'),
 (19,1,1209,46,'su19-accounting-systems'),(19,2,1246,39,'su19-data-governance'),
 (19,3,1273,25,'su19-coso-data'),
 (20,1,1294,31,'su20-finance-transformation'),(20,2,1321,59,'su20-data-analytics'),
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

def normalize(lines):
    result=[]
    i=0
    while i<len(lines):
        p,l=lines[i]
        # The source prints question 15 in SU 11.1 as "5)" on PDF page 16.
        if p==16 and re.match(r'^\s*5\)\s+A small computer manufacturer',l):
            l=re.sub(r'^\s*5\)', '15)', l, count=1)
        if p==362 and re.match(r'^\s*8\)\s+A company has budgeted sales',l):
            l=re.sub(r'^\s*8\)', '18)', l, count=1)
        if p==806 and re.match(r'^\s*8\)\s+A corporation reported',l):
            l=re.sub(r'^\s*8\)', '18)', l, count=1)
        # In three source pages the A/C option letter is absent, but the
        # printed option text itself is present and independently verified.
        missing_letter={(218,'Technological changes'):'C',
                        (248,'Using market feedback'):'C',
                        (287,'Sales forecast.'):'A'}
        for (fix_page,lead),letter in missing_letter.items():
            if p==fix_page and re.match(r'^\s*\.\s+'+re.escape(lead),l):
                l=re.sub(r'^\s*\.',letter+'.',l,count=1)
        # These two printed "A." markers wrap the text of options C/D.
        if p==179 and l.strip()=='A.' and result and result[-1][1].strip().endswith('Location'):
            prev_p,prev=result[-1];result[-1]=(prev_p,prev+' A.');i+=1;continue
        # A distorted two-line numeral and a three-line choice on page 956.
        if p in (956,957) and l.strip() in ('C','D') and i+2<len(lines) and lines[i+2][1].strip()=='.':
            result.append((p,l.strip()+'. '+lines[i+1][1].strip()));i+=3;continue
        if p==365 and re.match(r'^\s*\.\s+72,000$',l):
            l=re.sub(r'\.', 'A.', l, count=1)
        if i+1<len(lines):
            next_page,next_line=lines[i+1]
            m=re.match(r'^\s*(\d{1,2})\s+(.+)$',l)
            if m and re.match(r'^\s*\)\s+',next_line):
                result.append((p, m.group(1)+') '+m.group(2)+' '+next_line.strip().lstrip(')').strip()))
                i+=2;continue
            m=re.match(r'^\s*([1-5])\s+(.+)$',l)
            after=re.match(r'^\s*([0-9])\)\s+(.+)$',next_line)
            if m and after and p==next_page and not re.search(r'\$|\d,\d',m.group(2)):
                result.append((p,m.group(1)+after.group(1)+') '+m.group(2)+' '+after.group(2)))
                i+=2;continue
        result.append((p,l))
        i+=1
    return result

def flatten(items):
    # Keep the figures and table rows legible rather than collapsing them into prose.
    return '\n'.join(line.strip() for _,line in items).strip()

questions=[]
problems=[]
for i,(unit,sub,start,expected,topic) in enumerate(sections):
    end=sections[i+1][2] if i+1<len(sections) else 1371
    lines=normalize(extract_raw(start,end))
    anchors=[]
    for j,(page,line) in enumerate(lines):
        m=re.match(r'^\s*(\d+)\)\s+',line)
        if m and int(m.group(1))==len(anchors)+1:
            anchors.append((j,int(m.group(1)),page))
    nums=[n for _,n,_ in anchors]
    simple=list(range(1,expected+1))
    if nums!=simple:
        problems.append(f'{topic}: extracted numbers {nums}; expected {simple}')
        continue
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
        key=(unit,sub,n)
        # Some copies omit distractors altogether. These are clearly flagged
        # authored replacements, never represented as publisher source text.
        omitted_choices={
            (14,4,2):[('C','Purchases of inventory on credit.')],
            (15,8,23):[('B','The variance calculation is correct, but the conclusion is incorrect.'),
                        ('D','Both the variance calculation and the conclusion are incorrect.')],
            (17,2,15):[('B','Narrative descriptions.')],
            (17,2,25):[('A','Management will make a material accounting estimate.')],
            (19,2,12):[('B','Internet transactions eliminate the need to monitor data privacy.')],
        }
        for letter,replacement in omitted_choices.get(key,[]):
            next_letter=chr(ord(letter)+1)
            k=next((k for k,(_,line) in enumerate(block) if re.match(r'^\s*'+next_letter+r'\.\s+',line)),None)
            if k is None and letter=='D': k=len(block)
            if k is None: raise ValueError(f'No insertion point for {key} {letter}')
            block.insert(k,(page,letter+'. '+replacement))
        inferred_answers={
            (16,1,19):('D','Equipment depreciation is not controlled by an assembly-line manager.'),
            (18,2,4):('C','The question concerns controls specifically over disk and printed output.'),
            (18,3,5):('D','A hot site is preconfigured and available for immediate recovery.'),
            (19,2,28):('D','Purging data removes its copies at the end of the life cycle.'),
            (20,2,26):('D','The amount and history of customer data concerns volume and variety, not velocity.'),
        }
        if key in inferred_answers:
            letter,reason=inferred_answers[key]
            block.append((page,f'Answer ({letter}) is correct.'))
            block.append((page,reason))
        question_context=context[:]
        for k,(_,line) in enumerate(block):
            if re.match(r'^\s*Fact Pattern:',line):
                intro=line.split('Fact Pattern:',1)[1]
                context=([(block[k][0],intro)] if intro.strip() else [])+block[k+1:]
                block=block[:k]
                break
        option_spans=[(k,m.group(1)) for k,(_,line) in enumerate(block)
            if (m:=re.match(r'^\s*([A-D])\.\s*(.*)$',line))]
        if key==(14,2,14):
            # The rationale's "C. Thingone" is a sentence, not a choice.
            option_spans=[span for span in option_spans if 'Thingone' not in block[span[0]][1]]
        if (unit,sub,n)==(11,1,15):
            # The fact pattern itself labels four activities A–D.
            option_spans=option_spans[-4:]
        answer_spans=[(k,m.group(1)) for k,(_,line) in enumerate(block)
            if (m:=re.search(r'Answer \(([A-D])\) is correct\.',line))]
        q={'unit':unit,'section':sub,'number':n,'page':page,'topicId':topic,
           'block':block,'options':option_spans,'answers':answer_spans,
           'context': question_context,
           'answerStatus':'inferred' if key in inferred_answers else 'source',
           'sourceTextStatus':'reconstructed' if key in omitted_choices else
                 ('table-reflowed' if key in {(12,5,13),(13,1,34),(13,3,23)} else None)}
        questions.append(q)
        if len(option_spans)!=4 or [v for _,v in option_spans]!=list('ABCD') or len(answer_spans)!=1:
            problems.append(f'Bad options/answer: {topic} question {n}, page {page}, options {option_spans}, answers {answer_spans}')
if problems:
    raise ValueError('\n'.join(problems))
if len(questions)!=1383:
    raise ValueError(f'Expected 1,383 questions; extracted {len(questions)}')

parsed=[]
# Questions which refer to a preceding shared Fact Pattern without restating
# its entity name. Limit this list to the contiguous questions supported by
# each printed fact pattern; later unrelated questions must not inherit it.
unnamed_case_references={
    (11,2,12),(11,2,13),
    (12,3,5),(12,3,6),(12,3,12),(12,3,13),(12,3,14),(12,3,15),
    (12,3,20),(12,3,21),(12,3,22),
    (14,4,5),(14,4,6),(14,4,39),(14,5,9),
    (14,6,7),
    (15,3,14),(15,3,15),(15,3,23),(15,3,24),(15,3,40),(15,3,41),
    (15,4,13),(15,4,14),(15,4,15),
    (15,5,5),(15,5,6),(15,5,7),
    (15,6,19),(15,6,29),(15,6,30),(15,6,31),
    (15,8,2),(15,8,19),(15,8,20),(15,8,21),(15,8,30),
    (16,5,1),(16,5,2),(16,5,3),(16,5,11),
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
        if first_name and first_name.group(1) not in {'The','During','On','At','A','An','Data','Information','Believing','Estimated','Selected','Illustrated','Since','Consider'}:
            aliases.add(first_name.group(1))
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
    index='ABCD'.index(ans[0][1]); apos=ans[0][0]
    next_opt=next((k for k,_ in opts if k>apos),len(block))
    rationale=flatten(block[apos+1:next_opt])
    parsed.append({'unit':q['unit'],'section':q['section'],'number':n,'page':q['page'],
                   'topicId':q['topicId'],'stem':stem.replace('\uf0b7','•'),'choices':values,
                   'answerIndex':index,'explanation':rationale.replace('\uf0b7','•'),
                   'answerStatus':q['answerStatus'],
                   **({'sourceTextStatus':q['sourceTextStatus']} if q['sourceTextStatus'] else {})})

# The publisher sets these case exhibits in two narrow columns. The PDF text
# layer interleaves the columns word by word, so curate the shared numerical
# facts once and retain the individually transcribed question and answer.
clear_plus = (
    "Fact pattern — Clear Plus, Inc. manufactures pocket-protector boxes. "
    "May: actual 12,000 units, sales $132,000, variable costs $70,800, "
    "contribution margin $61,200, fixed costs $32,000, operating income "
    "$29,200. Static budget: 10,000 units, sales $100,000, variable costs "
    "$60,000, contribution margin $40,000, fixed costs $30,000, operating "
    "income $10,000."
)
funtime = (
    "Fact pattern — Funtime, Inc. produced and sold 2,200 video game machines "
    "in May (budget 2,000). Budget versus actual: revenue $400,000/$440,000; "
    "direct materials $180,000/$220,400; direct labor $80,000/$93,460; "
    "variable overhead $18,000/$18,800; contribution margin "
    "$122,000/$107,340. Standard cost per machine: housing 1 × $20; "
    "printed circuit boards 2 × $15; reading heads 4 × $10; "
    "assembly labor 2 hours × $8; PCB labor 1 hour × $9; RH labor "
    "1.5 hours × $10; variable overhead 4.5 hours × $2. Actual usage: "
    "housing 2,200 units/$44,000; PCB 4,700 units/$75,200; RH "
    "9,200 units/$101,200; assembly labor 3,900 hours/$31,200; PCB "
    "labor 2,400 hours/$23,760; RH labor 3,500 hours/$38,500; "
    "variable overhead 9,900 hours/$18,800. Management sought greater "
    "production and lower costs. PCB and RH groups had downtime and "
    "overtime; the Assembly Group used fewer than standard hours."
)
karmee = (
    "Fact pattern — Karmee Company forecasts monthly sales: January $600,000; "
    "February $650,000; March $700,000; April $625,000; May $720,000; "
    "June $800,000. Sales are 20% cash and 80% credit. Of credit sales, "
    "30% is collected in the sale month, 40% the following month, and "
    "25% in the second following month. Cost of goods sold averages "
    "40% of sales; target ending inventory is 30% of next month's unit "
    "sales. Merchandise purchases are paid the following month. Variable "
    "operating expenses other than cost of goods sold equal 10% of sales "
    "and are paid the following month. Annual fixed operating costs: "
    "advertising $720,000; depreciation $420,000; insurance $180,000; "
    "property taxes $240,000; salaries $1,080,000. Fixed costs accrue "
    "evenly; insurance is paid quarterly in January, April, July and "
    "October, while property taxes are paid in April and October."
)
easecom = (
    "Fact pattern — Easecom's Year 1 income statement (dollars, with "
    "the source exhibit in thousands): equipment sales $6,000,000; "
    "maintenance contracts $1,800,000; cost of goods sold $4,600,000; "
    "customer maintenance $1,000,000; selling $600,000; administration "
    "$900,000; interest $150,000; pretax income $550,000; tax $220,000; "
    "net income $330,000. For Year 2: equipment price increases 10%, "
    "unit volume rises 6%, and maintenance contracts grow 6%. "
    "Equipment unit cost rises 3%; two technicians add $130,000 to "
    "maintenance costs. Maintenance inventory rises $250,000 financed "
    "at 12% interest. Selling costs rise $250,000, administration stays "
    "constant, and the income tax rate remains 40%."
)
for item in parsed:
    key=(item['unit'],item['section'],item['number'])
    if key in {(15,8,9),(15,8,10)}:
        item['stem']=clear_plus+'\n'+item['stem'].split('opposite\ncolumn.\n')[-1]
        item['sourceTextStatus']='table-reflowed'
    if key in {(15,7,10),(15,7,11),(15,7,12),(15,7,13),(15,8,11)}:
        item['stem']=funtime+'\n'+item['stem'].splitlines()[-1]
        item['sourceTextStatus']='table-reflowed'
    if key in {(14,4,31),(14,4,32),(14,5,3),(14,5,4),(14,6,12)}:
        item['stem']=karmee+'\n'+item['stem'].split('month following the sale.\n')[-1]
        item['sourceTextStatus']='table-reflowed'
    if key in {(14,6,5),(14,6,6),(14,6,7)}:
        item['stem']=easecom+'\n'+item['stem'].split('contracts.\n')[-1]
        item['sourceTextStatus']='table-reflowed'

for q in parsed:
    if len(q['stem'])<10 or min(map(len,q['choices']))<1 or len(q['explanation'])<10:
        raise ValueError(f'Incomplete item: SU {q["unit"]}.{q["section"]} Q{q["number"]}')
for unit in range(11,21):
    target = root / 'src' / 'data' / f'cma-gleim-2025-vol2-unit-{unit}.json'
    with target.open('w') as output:
        json.dump([q for q in parsed if q['unit']==unit],output,ensure_ascii=False,indent=2)
        output.write('\n')
print('Imported 1,383 English source questions across ten units.')
