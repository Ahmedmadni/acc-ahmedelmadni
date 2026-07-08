// Islamic inheritance (فرائض / Fara'id) distribution engine.
//
// Implements the mainstream Sunni consensus rules (fixed shares from Qur'an
// 4:11-12/176, hajb/exclusion, asaba/residuary priority, awl, radd) as
// applied predominantly in Saudi Sharia courts (Hanbali-leaning). This is an
// estimation tool, not a substitute for a licensed Sharia judge or notary
// (كاتب عدل) issuing an official "hasr al-warathah" deed — see the
// disclaimer rendered alongside the results in the UI.
//
// One scenario is deliberately NOT auto-calculated: a paternal grandfather
// inheriting alongside full/paternal siblings ("مسألة الجد والإخوة"). The
// correct split there (muqasama) is genuinely disputed between madhahib and
// has several sub-cases; rather than silently picking one and risking a
// wrong real-money distribution, the engine flags it and asks the user to
// consult a judge for that portion.

export interface HeirsInput {
  hasHusband: boolean;
  wivesCount: number;
  hasFather: boolean;
  hasMother: boolean;
  hasPaternalGrandfather: boolean;
  hasPaternalGrandmother: boolean;
  hasMaternalGrandmother: boolean;
  sonsCount: number;
  daughtersCount: number;
  sonsSonsCount: number;
  sonsDaughtersCount: number;
  fullBrothersCount: number;
  fullSistersCount: number;
  paternalHalfBrothersCount: number;
  paternalHalfSistersCount: number;
  maternalHalfSiblingsCount: number;
}

export const EMPTY_HEIRS: HeirsInput = {
  hasHusband: false,
  wivesCount: 0,
  hasFather: false,
  hasMother: false,
  hasPaternalGrandfather: false,
  hasPaternalGrandmother: false,
  hasMaternalGrandmother: false,
  sonsCount: 0,
  daughtersCount: 0,
  sonsSonsCount: 0,
  sonsDaughtersCount: 0,
  fullBrothersCount: 0,
  fullSistersCount: 0,
  paternalHalfBrothersCount: 0,
  paternalHalfSistersCount: 0,
  maternalHalfSiblingsCount: 0,
};

export type HeirRowStatus = "fixed" | "asaba" | "fixed+asaba" | "radd" | "excluded" | "unsupported";

export interface HeirShareRow {
  key: string;
  labelAr: string;
  labelEn: string;
  count: number;
  status: HeirRowStatus;
  fractionLabel: string;
  shareFraction: number;
  perPersonAmount: number;
  totalAmount: number;
  reasonAr?: string;
  reasonEn?: string;
}

export interface InheritanceResult {
  grossEstate: number;
  debts: number;
  funeralCosts: number;
  wasiyyahRequested: number;
  wasiyyahApplied: number;
  wasiyyahCapped: boolean;
  netEstate: number;
  awlApplied: boolean;
  awlFactor: number | null;
  raddApplied: boolean;
  unsupportedCase: boolean;
  soleHeirSpouseRemainder: boolean;
  noEligibleHeirs: boolean;
  rows: HeirShareRow[];
  totalDistributedFraction: number;
  totalDistributedAmount: number;
  notesAr: string[];
  notesEn: string[];
}

interface Row {
  key: string;
  labelAr: string;
  labelEn: string;
  count: number;
  status: HeirRowStatus;
  fractionLabel: string;
  fraction: number; // 0..1, share of net estate (before awl/radd normalization)
  isSpouse: boolean;
  reasonAr?: string;
  reasonEn?: string;
}

const excludedRow = (
  key: string,
  labelAr: string,
  labelEn: string,
  count: number,
  reasonAr: string,
  reasonEn: string,
): Row => ({
  key,
  labelAr,
  labelEn,
  count,
  status: "excluded",
  fractionLabel: "—",
  fraction: 0,
  isSpouse: false,
  reasonAr,
  reasonEn,
});

export function calculateInheritance(
  heirs: HeirsInput,
  grossEstate: number,
  debts: number,
  funeralCosts: number,
  wasiyyahRequested: number,
): InheritanceResult {
  const notesAr: string[] = [];
  const notesEn: string[] = [];

  const afterDebts = Math.max(0, grossEstate - Math.max(0, debts) - Math.max(0, funeralCosts));
  const wasiyyahCap = afterDebts / 3;
  const wasiyyahApplied = Math.min(Math.max(0, wasiyyahRequested), wasiyyahCap);
  const wasiyyahCapped = wasiyyahRequested > wasiyyahCap + 0.005;
  const netEstate = Math.max(0, afterDebts - wasiyyahApplied);

  if (wasiyyahCapped) {
    notesAr.push(
      "الوصية لا تتجاوز ثلث التركة بعد سداد الديون والتجهيز إلا برضا جميع الورثة البالغين الرشداء؛ تم تطبيق حد الثلث تلقائياً.",
    );
    notesEn.push(
      "A bequest (wasiyyah) cannot exceed one-third of the estate after debts unless all adult heirs consent; the one-third cap was applied automatically.",
    );
  }

  const rows: Row[] = [];

  // ---- effective descendant counts, applying hajb between generations ----
  // A living son fully excludes grandchildren through a son (his own children
  // would inherit from him, not directly here).
  const hasSon = heirs.sonsCount > 0;
  const effSonsSons = hasSon ? 0 : Math.max(0, heirs.sonsSonsCount);
  const effSonsDaughters = hasSon ? 0 : Math.max(0, heirs.sonsDaughtersCount);
  if (hasSon && (heirs.sonsSonsCount > 0 || heirs.sonsDaughtersCount > 0)) {
    rows.push(
      excludedRow(
        "grandchildren-via-son",
        "أبناء وبنات الابن",
        "Son's children",
        heirs.sonsSonsCount + heirs.sonsDaughtersCount,
        "محجوبون بوجود الابن",
        "Excluded by the presence of a living son",
      ),
    );
  }

  const hasMaleDescendant = hasSon || effSonsSons > 0;
  const hasAnyDescendant =
    hasSon || heirs.daughtersCount > 0 || effSonsSons > 0 || effSonsDaughters > 0;

  // ---- Father ----
  let fatherIsAsaba = false;
  if (heirs.hasFather) {
    if (hasMaleDescendant) {
      rows.push({
        key: "father",
        labelAr: "الأب",
        labelEn: "Father",
        count: 1,
        status: "fixed",
        fractionLabel: "1/6",
        fraction: 1 / 6,
        isSpouse: false,
      });
    } else if (hasAnyDescendant) {
      // female descendant(s) only: father gets 1/6 fixed + residue as asaba
      rows.push({
        key: "father",
        labelAr: "الأب",
        labelEn: "Father",
        count: 1,
        status: "fixed+asaba",
        fractionLabel: "1/6 + عصبة",
        fraction: 1 / 6,
        isSpouse: false,
      });
      fatherIsAsaba = true;
    } else {
      // no descendant at all: father is pure asaba
      rows.push({
        key: "father",
        labelAr: "الأب",
        labelEn: "Father",
        count: 1,
        status: "asaba",
        fractionLabel: "عصبة",
        fraction: 0,
        isSpouse: false,
      });
      fatherIsAsaba = true;
    }
  }

  // ---- Paternal grandfather (only relevant if no father) ----
  let grandfatherIsAsaba = false;
  const grandfatherPresent = !heirs.hasFather && heirs.hasPaternalGrandfather;
  const siblingsPresentAtAll =
    heirs.fullBrothersCount +
      heirs.fullSistersCount +
      heirs.paternalHalfBrothersCount +
      heirs.paternalHalfSistersCount >
    0;
  // The grandfather-vs-siblings dispute (muqasama) only actually arises when
  // the siblings would otherwise be eligible to inherit — i.e. there's no
  // son/son's son already excluding them regardless of the grandfather.
  const unsupportedGrandfatherWithSiblings =
    grandfatherPresent && siblingsPresentAtAll && !hasSon && effSonsSons === 0;

  if (grandfatherPresent && !unsupportedGrandfatherWithSiblings) {
    if (hasMaleDescendant) {
      rows.push({
        key: "grandfather",
        labelAr: "الجد لأب",
        labelEn: "Paternal grandfather",
        count: 1,
        status: "fixed",
        fractionLabel: "1/6",
        fraction: 1 / 6,
        isSpouse: false,
      });
    } else if (hasAnyDescendant) {
      rows.push({
        key: "grandfather",
        labelAr: "الجد لأب",
        labelEn: "Paternal grandfather",
        count: 1,
        status: "fixed+asaba",
        fractionLabel: "1/6 + عصبة",
        fraction: 1 / 6,
        isSpouse: false,
      });
      grandfatherIsAsaba = true;
    } else {
      rows.push({
        key: "grandfather",
        labelAr: "الجد لأب",
        labelEn: "Paternal grandfather",
        count: 1,
        status: "asaba",
        fractionLabel: "عصبة",
        fraction: 0,
        isSpouse: false,
      });
      grandfatherIsAsaba = true;
    }
  } else if (unsupportedGrandfatherWithSiblings) {
    rows.push({
      key: "grandfather",
      labelAr: "الجد لأب",
      labelEn: "Paternal grandfather",
      count: 1,
      status: "unsupported",
      fractionLabel: "يتطلب حساباً يدوياً",
      fraction: 0,
      isSpouse: false,
    });
    notesAr.push(
      "اجتماع الجد مع الإخوة/الأخوات من أعقد وأكثر مسائل الفرائض خلافاً بين المذاهب (مسألة المقاسمة). لم يُحسب نصيب الجد والإخوة تلقائياً؛ يرجى مراجعة قاضٍ شرعي لتحديدهما بدقة.",
    );
    notesEn.push(
      "A grandfather inheriting alongside siblings ('muqasama') is one of the most disputed sub-cases in Fara'id across schools of thought. The grandfather's and siblings' shares were not auto-calculated — please consult a Sharia judge for this portion.",
    );
  }

  // ---- Mother (with the Gharrawayn/'Umariyyah special case) ----
  const combinedSiblingCountForMother =
    heirs.fullBrothersCount +
    heirs.fullSistersCount +
    heirs.paternalHalfBrothersCount +
    heirs.paternalHalfSistersCount +
    heirs.maternalHalfSiblingsCount;
  const motherReducedToSixth = hasAnyDescendant || combinedSiblingCountForMother >= 2;

  const hasSpouse = heirs.hasHusband || heirs.wivesCount > 0;
  const isGharrawayn =
    heirs.hasMother &&
    heirs.hasFather &&
    hasSpouse &&
    !hasAnyDescendant &&
    combinedSiblingCountForMother === 0;

  if (heirs.hasMother) {
    if (isGharrawayn) {
      // Mother takes 1/3 of what remains after the spouse's fixed share,
      // not 1/3 of the whole estate (Umar ibn al-Khattab's ruling, followed
      // by the majority — avoids the mother outdrawing the father).
      const spouseFraction = heirs.hasHusband ? 1 / 2 : 1 / 4;
      const motherFraction = (1 - spouseFraction) / 3;
      rows.push({
        key: "mother",
        labelAr: "الأم",
        labelEn: "Mother",
        count: 1,
        status: "fixed",
        fractionLabel: "1/3 الباقي",
        fraction: motherFraction,
        isSpouse: false,
      });
      notesAr.push(
        "طُبّقت مسألة 'الغرّاوين/العُمَريتين': نصيب الأم هنا ثلث الباقي بعد فرض الزوج/الزوجة، وليس ثلث كامل التركة.",
      );
      notesEn.push(
        "The Gharrawayn ('Umariyyah) rule was applied: the mother's third is one-third of the remainder after the spouse's fixed share, not one-third of the whole estate.",
      );
    } else {
      rows.push({
        key: "mother",
        labelAr: "الأم",
        labelEn: "Mother",
        count: 1,
        status: "fixed",
        fractionLabel: motherReducedToSixth ? "1/6" : "1/3",
        fraction: motherReducedToSixth ? 1 / 6 : 1 / 3,
        isSpouse: false,
      });
    }
  }

  // ---- Grandmothers (share 1/6 between however many qualify) ----
  const paternalGmExcluded = heirs.hasMother || heirs.hasFather;
  const maternalGmExcluded = heirs.hasMother;
  const paternalGmQualifies = heirs.hasPaternalGrandmother && !paternalGmExcluded;
  const maternalGmQualifies = heirs.hasMaternalGrandmother && !maternalGmExcluded;
  const qualifyingGrandmothers = (paternalGmQualifies ? 1 : 0) + (maternalGmQualifies ? 1 : 0);

  if (heirs.hasPaternalGrandmother && !paternalGmQualifies) {
    rows.push(
      excludedRow(
        "grandmother-paternal",
        "الجدة لأب",
        "Paternal grandmother",
        1,
        "محجوبة بوجود الأب أو الأم",
        "Excluded by the presence of the father or mother",
      ),
    );
  }
  if (heirs.hasMaternalGrandmother && !maternalGmQualifies) {
    rows.push(
      excludedRow(
        "grandmother-maternal",
        "الجدة لأم",
        "Maternal grandmother",
        1,
        "محجوبة بوجود الأم",
        "Excluded by the presence of the mother",
      ),
    );
  }
  if (qualifyingGrandmothers > 0) {
    const eachFraction = 1 / 6 / qualifyingGrandmothers;
    if (paternalGmQualifies) {
      rows.push({
        key: "grandmother-paternal",
        labelAr: "الجدة لأب",
        labelEn: "Paternal grandmother",
        count: 1,
        status: "fixed",
        fractionLabel: qualifyingGrandmothers > 1 ? "1/6 مناصفة" : "1/6",
        fraction: eachFraction,
        isSpouse: false,
      });
    }
    if (maternalGmQualifies) {
      rows.push({
        key: "grandmother-maternal",
        labelAr: "الجدة لأم",
        labelEn: "Maternal grandmother",
        count: 1,
        status: "fixed",
        fractionLabel: qualifyingGrandmothers > 1 ? "1/6 مناصفة" : "1/6",
        fraction: eachFraction,
        isSpouse: false,
      });
    }
  }

  // ---- Husband / wives ----
  if (heirs.hasHusband) {
    rows.push({
      key: "husband",
      labelAr: "الزوج",
      labelEn: "Husband",
      count: 1,
      status: "fixed",
      fractionLabel: hasAnyDescendant ? "1/4" : "1/2",
      fraction: hasAnyDescendant ? 1 / 4 : 1 / 2,
      isSpouse: true,
    });
  }
  if (heirs.wivesCount > 0) {
    const total = hasAnyDescendant ? 1 / 8 : 1 / 4;
    rows.push({
      key: "wives",
      labelAr: heirs.wivesCount > 1 ? "الزوجات" : "الزوجة",
      labelEn: heirs.wivesCount > 1 ? "Wives" : "Wife",
      count: heirs.wivesCount,
      status: "fixed",
      fractionLabel: hasAnyDescendant ? "1/8 مشتركة" : "1/4 مشتركة",
      fraction: total,
      isSpouse: true,
    });
  }

  // ---- Daughters (fixed, or asaba-with-sons at 2:1) ----
  let residueConsumedByChildren = false;
  if (hasSon) {
    // Sons + daughters share the residue 2:1, taking everything left after
    // the fixed-share heirs above. Modeled as two rows (so per-person
    // amounts come out right), filled in together once the residue is known.
    rows.push({
      key: "sons",
      labelAr: "الأبناء",
      labelEn: "Sons",
      count: heirs.sonsCount,
      status: "asaba",
      fractionLabel: heirs.daughtersCount > 0 ? "عصبة (٢ ذكر : ١ أنثى)" : "عصبة",
      fraction: 0,
      isSpouse: false,
    });
    if (heirs.daughtersCount > 0) {
      rows.push({
        key: "daughters-residuary",
        labelAr: "البنات (عصبة بالغير)",
        labelEn: "Daughters (residuary)",
        count: heirs.daughtersCount,
        status: "asaba",
        fractionLabel: "عصبة (٢ ذكر : ١ أنثى)",
        fraction: 0,
        isSpouse: false,
      });
    }
    residueConsumedByChildren = true;
  } else if (heirs.daughtersCount > 0) {
    rows.push({
      key: "daughters",
      labelAr: "البنات",
      labelEn: "Daughters",
      count: heirs.daughtersCount,
      status: "fixed",
      fractionLabel: heirs.daughtersCount === 1 ? "1/2" : "2/3 مشتركة",
      fraction: heirs.daughtersCount === 1 ? 1 / 2 : 2 / 3,
      isSpouse: false,
    });
  }

  // ---- Grandchildren via son (only when there's no living son) ----
  if (!hasSon && (effSonsSons > 0 || effSonsDaughters > 0)) {
    if (effSonsSons > 0) {
      // Son's son is asaba on his own account; takes residue with any
      // son's daughters at 2:1, after daughters' fixed share (if any).
      rows.push({
        key: "grandsons",
        labelAr: "أبناء الابن",
        labelEn: "Son's sons",
        count: effSonsSons,
        status: "asaba",
        fractionLabel: effSonsDaughters > 0 ? "عصبة (٢ ذكر : ١ أنثى)" : "عصبة",
        fraction: 0,
        isSpouse: false,
      });
      if (effSonsDaughters > 0) {
        rows.push({
          key: "granddaughters-residuary",
          labelAr: "بنات الابن (عصبة بالغير)",
          labelEn: "Son's daughters (residuary)",
          count: effSonsDaughters,
          status: "asaba",
          fractionLabel: "عصبة (٢ ذكر : ١ أنثى)",
          fraction: 0,
          isSpouse: false,
        });
      }
      residueConsumedByChildren = true;
    } else if (heirs.daughtersCount >= 2) {
      // 2+ real daughters already take the full 2/3 cap; with no son's son
      // to open an asaba slot, son's daughters have nothing left.
      rows.push(
        excludedRow(
          "grandsons-granddaughters",
          "بنات الابن",
          "Son's daughters",
          effSonsDaughters,
          "محجوبات لاستيفاء البنات الثلثين ولا يوجد ابن ابن يعصّبهن",
          "Excluded — the daughters already take the full two-thirds and there is no son's son to make them residuary",
        ),
      );
    } else if (heirs.daughtersCount === 1) {
      // 1 daughter (1/2) + son's daughter(s): completes the two-thirds.
      rows.push({
        key: "grandsons-granddaughters",
        labelAr: "بنات الابن",
        labelEn: "Son's daughters",
        count: effSonsDaughters,
        status: "fixed",
        fractionLabel: "1/6 تكملة الثلثين",
        fraction: 1 / 6,
        isSpouse: false,
      });
    } else {
      // No real daughters at all — son's daughters stand in for daughters.
      rows.push({
        key: "grandsons-granddaughters",
        labelAr: "بنات الابن",
        labelEn: "Son's daughters",
        count: effSonsDaughters,
        status: "fixed",
        fractionLabel: effSonsDaughters === 1 ? "1/2" : "2/3 مشتركة",
        fraction: effSonsDaughters === 1 ? 1 / 2 : 2 / 3,
        isSpouse: false,
      });
    }
  }

  // ---- Full siblings ----
  // Excluded entirely by father, son, or son's son (any degree in the male line).
  const fullSiblingsExcluded = heirs.hasFather || hasSon || effSonsSons > 0;
  const fullSiblingCount = heirs.fullBrothersCount + heirs.fullSistersCount;
  let fullSiblingsConsumedResidue = false;

  if (fullSiblingCount > 0 && fullSiblingsExcluded) {
    rows.push(
      excludedRow(
        "full-siblings",
        "الإخوة والأخوات الأشقاء",
        "Full siblings",
        fullSiblingCount,
        "محجوبون بوجود الأب أو الابن أو ابن الابن",
        "Excluded by the presence of the father, a son, or a son's son",
      ),
    );
  } else if (fullSiblingCount > 0 && unsupportedGrandfatherWithSiblings) {
    rows.push({
      key: "full-siblings",
      labelAr: "الإخوة والأخوات الأشقاء",
      labelEn: "Full siblings",
      count: fullSiblingCount,
      status: "unsupported",
      fractionLabel: "يتطلب حساباً يدوياً",
      fraction: 0,
      isSpouse: false,
    });
  } else if (fullSiblingCount > 0) {
    if (heirs.fullBrothersCount > 0) {
      rows.push({
        key: "full-brothers",
        labelAr: "الإخوة الأشقاء",
        labelEn: "Full brothers",
        count: heirs.fullBrothersCount,
        status: "asaba",
        fractionLabel: heirs.fullSistersCount > 0 ? "عصبة (٢ ذكر : ١ أنثى)" : "عصبة",
        fraction: 0,
        isSpouse: false,
      });
      if (heirs.fullSistersCount > 0) {
        rows.push({
          key: "full-sisters-residuary",
          labelAr: "الأخوات الشقيقات (عصبة بالغير)",
          labelEn: "Full sisters (residuary)",
          count: heirs.fullSistersCount,
          status: "asaba",
          fractionLabel: "عصبة (٢ ذكر : ١ أنثى)",
          fraction: 0,
          isSpouse: false,
        });
      }
      fullSiblingsConsumedResidue = true;
    } else if (!residueConsumedByChildren && heirs.daughtersCount + effSonsDaughters > 0) {
      // Full sisters only, with daughters/granddaughters present and no
      // asaba male descendant: sisters become residuary "with the daughters".
      rows.push({
        key: "full-siblings",
        labelAr: "الأخوات الشقيقات",
        labelEn: "Full sisters",
        count: heirs.fullSistersCount,
        status: "asaba",
        fractionLabel: "عصبة مع البنات",
        fraction: 0,
        isSpouse: false,
      });
      fullSiblingsConsumedResidue = true;
    } else {
      rows.push({
        key: "full-siblings",
        labelAr: "الأخوات الشقيقات",
        labelEn: "Full sisters",
        count: heirs.fullSistersCount,
        status: "fixed",
        fractionLabel: heirs.fullSistersCount === 1 ? "1/2" : "2/3 مشتركة",
        fraction: heirs.fullSistersCount === 1 ? 1 / 2 : 2 / 3,
        isSpouse: false,
      });
    }
  }

  // ---- Paternal half-siblings ----
  // Excluded by father, son, son's son, or a single full brother.
  const paternalSiblingsExcluded =
    heirs.hasFather || hasSon || effSonsSons > 0 || heirs.fullBrothersCount > 0;
  const paternalSiblingCount = heirs.paternalHalfBrothersCount + heirs.paternalHalfSistersCount;

  if (paternalSiblingCount > 0 && paternalSiblingsExcluded) {
    rows.push(
      excludedRow(
        "paternal-siblings",
        "الإخوة والأخوات لأب",
        "Paternal half-siblings",
        paternalSiblingCount,
        "محجوبون بوجود الأب أو الابن أو ابن الابن أو أخ شقيق",
        "Excluded by the father, a son, a son's son, or a full brother",
      ),
    );
  } else if (paternalSiblingCount > 0 && unsupportedGrandfatherWithSiblings) {
    rows.push({
      key: "paternal-siblings",
      labelAr: "الإخوة والأخوات لأب",
      labelEn: "Paternal half-siblings",
      count: paternalSiblingCount,
      status: "unsupported",
      fractionLabel: "يتطلب حساباً يدوياً",
      fraction: 0,
      isSpouse: false,
    });
  } else if (paternalSiblingCount > 0) {
    if (heirs.paternalHalfBrothersCount > 0) {
      rows.push({
        key: "paternal-brothers",
        labelAr: "الإخوة لأب",
        labelEn: "Paternal half-brothers",
        count: heirs.paternalHalfBrothersCount,
        status: "asaba",
        fractionLabel: heirs.paternalHalfSistersCount > 0 ? "عصبة (٢ ذكر : ١ أنثى)" : "عصبة",
        fraction: 0,
        isSpouse: false,
      });
      if (heirs.paternalHalfSistersCount > 0) {
        rows.push({
          key: "paternal-sisters-residuary",
          labelAr: "الأخوات لأب (عصبة بالغير)",
          labelEn: "Paternal half-sisters (residuary)",
          count: heirs.paternalHalfSistersCount,
          status: "asaba",
          fractionLabel: "عصبة (٢ ذكر : ١ أنثى)",
          fraction: 0,
          isSpouse: false,
        });
      }
      fullSiblingsConsumedResidue = true;
    } else if (
      !residueConsumedByChildren &&
      !fullSiblingsConsumedResidue &&
      heirs.daughtersCount + effSonsDaughters > 0 &&
      heirs.fullSistersCount === 0
    ) {
      rows.push({
        key: "paternal-siblings",
        labelAr: "الأخوات لأب",
        labelEn: "Paternal half-sisters",
        count: heirs.paternalHalfSistersCount,
        status: "asaba",
        fractionLabel: "عصبة مع البنات",
        fraction: 0,
        isSpouse: false,
      });
      fullSiblingsConsumedResidue = true;
    } else if (heirs.fullSistersCount === 1) {
      // 1 full sister (1/2) + paternal sister(s): completes the two-thirds.
      rows.push({
        key: "paternal-siblings",
        labelAr: "الأخوات لأب",
        labelEn: "Paternal half-sisters",
        count: heirs.paternalHalfSistersCount,
        status: "fixed",
        fractionLabel: "1/6 تكملة الثلثين",
        fraction: 1 / 6,
        isSpouse: false,
      });
    } else if (heirs.fullSistersCount >= 2) {
      rows.push(
        excludedRow(
          "paternal-siblings",
          "الأخوات لأب",
          "Paternal half-sisters",
          heirs.paternalHalfSistersCount,
          "محجوبات لاستيفاء الأخوات الشقيقات الثلثين ولا يوجد أخ لأب يعصّبهن",
          "Excluded — the full sisters already take the full two-thirds and there is no paternal half-brother to make them residuary",
        ),
      );
    } else {
      rows.push({
        key: "paternal-siblings",
        labelAr: "الأخوات لأب",
        labelEn: "Paternal half-sisters",
        count: heirs.paternalHalfSistersCount,
        status: "fixed",
        fractionLabel: heirs.paternalHalfSistersCount === 1 ? "1/2" : "2/3 مشتركة",
        fraction: heirs.paternalHalfSistersCount === 1 ? 1 / 2 : 2 / 3,
        isSpouse: false,
      });
    }
  }

  // ---- Maternal half-siblings ----
  // Excluded by any descendant (of either gender) or a male paternal-line
  // ascendant (father or paternal grandfather). Share equally, no 2:1 split.
  const maternalSiblingsExcluded =
    hasAnyDescendant || heirs.hasFather || heirs.hasPaternalGrandfather;
  if (heirs.maternalHalfSiblingsCount > 0 && maternalSiblingsExcluded) {
    rows.push(
      excludedRow(
        "maternal-siblings",
        "الإخوة والأخوات لأم",
        "Maternal half-siblings",
        heirs.maternalHalfSiblingsCount,
        "محجوبون بوجود فرع وارث أو الأب أو الجد لأب",
        "Excluded by an inheriting descendant, the father, or the paternal grandfather",
      ),
    );
  } else if (heirs.maternalHalfSiblingsCount > 0) {
    rows.push({
      key: "maternal-siblings",
      labelAr: "الإخوة والأخوات لأم",
      labelEn: "Maternal half-siblings",
      count: heirs.maternalHalfSiblingsCount,
      status: "fixed",
      fractionLabel: heirs.maternalHalfSiblingsCount === 1 ? "1/6" : "1/3 بالتساوي",
      fraction: heirs.maternalHalfSiblingsCount === 1 ? 1 / 6 : 1 / 3,
      isSpouse: false,
    });
  }

  // ---- Residue distribution among asaba (only one tier is ever eligible
  // at once, thanks to the hajb chain above, aside from the flagged
  // grandfather+siblings case) ----
  const fixedRows = rows.filter((r) => r.status === "fixed" || r.status === "fixed+asaba");
  const sumFixed = fixedRows.reduce((s, r) => s + r.fraction, 0);
  const residue = Math.max(0, 1 - sumFixed);
  const awlApplied = sumFixed > 1 + 1e-9;
  const awlFactor = awlApplied ? 1 / sumFixed : null;
  let raddApplied = false;

  if (!awlApplied && residue > 1e-9) {
    if (hasSon) {
      distributeAsaba2to1(
        rows,
        "sons",
        "daughters-residuary",
        heirs.sonsCount,
        heirs.daughtersCount,
        residue,
      );
    } else if (effSonsSons > 0) {
      distributeAsaba2to1(
        rows,
        "grandsons",
        "granddaughters-residuary",
        effSonsSons,
        effSonsDaughters,
        residue,
      );
    } else if (fatherIsAsaba) {
      addToRow(rows, "father", residue);
    } else if (grandfatherIsAsaba) {
      addToRow(rows, "grandfather", residue);
    } else if (heirs.fullBrothersCount > 0) {
      distributeAsaba2to1(
        rows,
        "full-brothers",
        "full-sisters-residuary",
        heirs.fullBrothersCount,
        heirs.fullSistersCount,
        residue,
      );
    } else if (
      rows.some((r) => r.key === "full-siblings" && r.status === "asaba" && r.fraction === 0)
    ) {
      // full sisters "with the daughters" — split equally among sisters
      addToRow(rows, "full-siblings", residue);
    } else if (heirs.paternalHalfBrothersCount > 0) {
      distributeAsaba2to1(
        rows,
        "paternal-brothers",
        "paternal-sisters-residuary",
        heirs.paternalHalfBrothersCount,
        heirs.paternalHalfSistersCount,
        residue,
      );
    } else if (
      rows.some((r) => r.key === "paternal-siblings" && r.status === "asaba" && r.fraction === 0)
    ) {
      addToRow(rows, "paternal-siblings", residue);
    } else {
      // No eligible asaba at all: radd (return) or escheat.
      raddApplied = applyRadd(rows, residue, notesAr, notesEn);
    }
  }

  // ---- Awl (proportional reduction when fixed shares exceed the estate) ----
  if (awlApplied && awlFactor) {
    for (const r of rows) {
      if (r.status === "fixed" || r.status === "fixed+asaba") {
        r.fraction *= awlFactor;
      }
    }
    notesAr.push(
      `طُبّق العول: مجموع الفروض تجاوز أصل التركة، فتم تخفيض كل الأنصبة بنفس النسبة (×${awlFactor.toFixed(4)}) بدلاً من الإخلال بالنسب الشرعية بينها.`,
    );
    notesEn.push(
      `Awl (proportional increase of the estate's base) was applied: the fixed shares summed to more than the whole estate, so every share was scaled down by the same factor (×${awlFactor.toFixed(4)}) rather than distorting the ratios between heirs.`,
    );
  }

  const noEligibleHeirs = rows.every((r) => r.fraction === 0 && r.status !== "unsupported");
  const soleHeirSpouseRemainder =
    rows.some((r) => r.isSpouse && r.fraction > 0 && residue > 1e-9 && !awlApplied) &&
    rows.filter((r) => r.fraction > 0).every((r) => r.isSpouse);

  if (soleHeirSpouseRemainder) {
    notesAr.push(
      "الوارث الوحيد هو الزوج/الزوجة؛ لا يُرد الباقي على الزوجين وفق الراجح، ويؤول إلى بقية ذوي الأرحام أو بيت المال بحسب قرار المحكمة الشرعية.",
    );
    notesEn.push(
      "The spouse is the only heir; per the predominant view the remainder is not returned to the spouse — it passes to other relatives or the public treasury per the Sharia court's ruling.",
    );
  }

  const finalRows: HeirShareRow[] = rows
    .filter((r) => r.count > 0)
    .map((r) => ({
      key: r.key,
      labelAr: r.labelAr,
      labelEn: r.labelEn,
      count: r.count,
      status: r.status,
      fractionLabel: r.fractionLabel,
      shareFraction: r.fraction,
      perPersonAmount: r.count > 0 ? (r.fraction * netEstate) / r.count : 0,
      totalAmount: r.fraction * netEstate,
      reasonAr: r.reasonAr,
      reasonEn: r.reasonEn,
    }));

  const totalDistributedFraction = finalRows.reduce((s, r) => s + r.shareFraction, 0);

  return {
    grossEstate,
    debts: Math.max(0, debts),
    funeralCosts: Math.max(0, funeralCosts),
    wasiyyahRequested: Math.max(0, wasiyyahRequested),
    wasiyyahApplied,
    wasiyyahCapped,
    netEstate,
    awlApplied,
    awlFactor,
    raddApplied,
    unsupportedCase: unsupportedGrandfatherWithSiblings,
    soleHeirSpouseRemainder,
    noEligibleHeirs,
    rows: finalRows,
    totalDistributedFraction,
    totalDistributedAmount: totalDistributedFraction * netEstate,
    notesAr,
    notesEn,
  };
}

function addToRow(rows: Row[], key: string, amount: number) {
  const row = rows.find((r) => r.key === key);
  if (row) row.fraction += amount;
}

function distributeAsaba2to1(
  rows: Row[],
  maleKey: string,
  femaleKey: string,
  males: number,
  females: number,
  pool: number,
) {
  const units = males * 2 + females;
  if (units === 0) return;
  const perUnit = pool / units;
  const maleRow = rows.find((r) => r.key === maleKey);
  if (maleRow) {
    maleRow.fraction += perUnit * 2 * males;
    maleRow.reasonAr = `كل ذكر يعادل ضعف حصة الأنثى (${units} سهماً إجمالاً).`;
    maleRow.reasonEn = `Each male gets double a female's share (${units} total shares).`;
  }
  const femaleRow = rows.find((r) => r.key === femaleKey);
  if (femaleRow) {
    femaleRow.fraction += perUnit * females;
    femaleRow.reasonAr = `كل ذكر يعادل ضعف حصة الأنثى (${units} سهماً إجمالاً).`;
    femaleRow.reasonEn = `Each male gets double a female's share (${units} total shares).`;
  }
}

function applyRadd(rows: Row[], residue: number, notesAr: string[], notesEn: string[]): boolean {
  const spouseRows = rows.filter((r) => r.isSpouse && r.fraction > 0);
  const nonSpouseFixed = rows.filter((r) => !r.isSpouse && r.fraction > 0);
  const nonSpouseSum = nonSpouseFixed.reduce((s, r) => s + r.fraction, 0);

  if (nonSpouseFixed.length === 0) {
    // Only a spouse inherits — remainder does not return to them.
    return false;
  }

  for (const r of nonSpouseFixed) {
    r.fraction += residue * (r.fraction / nonSpouseSum);
  }
  if (spouseRows.length === 0) {
    notesAr.push(
      "طُبّق الرد: لم يستوعب أصحاب الفروض كامل التركة ولا يوجد عصبة، فأعيد توزيع الباقي عليهم بنسبة أنصبتهم.",
    );
    notesEn.push(
      "Radd (return) was applied: the fixed-share heirs didn't exhaust the estate and there is no residuary heir, so the remainder was redistributed among them proportionally.",
    );
  } else {
    notesAr.push(
      "طُبّق الرد: الباقي بعد الفروض أُعيد توزيعه على أصحاب الفروض (باستثناء الزوج/الزوجة، الذي لا يُرد عليه وفق الراجح) بنسبة أنصبتهم.",
    );
    notesEn.push(
      "Radd (return) was applied: the remainder after fixed shares was redistributed among the fixed-share heirs — excluding the spouse, who does not receive a radd share per the predominant view — proportionally to their shares.",
    );
  }
  return true;
}
