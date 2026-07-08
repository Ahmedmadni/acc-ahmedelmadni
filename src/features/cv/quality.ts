import type { CvData } from "./types";

export type CvQualityResult = {
  score: number;
  recommendations: { ar: string; en: string }[];
};

const hasMetric = (value: string) =>
  /\d|%|٪|ريال|SAR|million|مليون|خفض|زيادة|تحسين|reduced|increased|improved/i.test(value);

export function scoreCv(data: CvData): CvQualityResult {
  let score = 0;
  const recommendations: CvQualityResult["recommendations"] = [];

  if (data.fullName.trim()) score += 8;
  else recommendations.push({ ar: "أضف الاسم الكامل.", en: "Add your full name." });

  if (data.jobTitle.trim()) score += 8;
  else recommendations.push({ ar: "أضف مسمى وظيفي مستهدف.", en: "Add a target job title." });

  if (data.email.trim() && data.phone.trim()) score += 10;
  else
    recommendations.push({
      ar: "أكمل بيانات التواصل الأساسية.",
      en: "Complete core contact details.",
    });

  if (data.summary.trim().length >= 80) score += 16;
  else
    recommendations.push({
      ar: "اكتب نبذة مهنية من 3 إلى 5 أسطر.",
      en: "Write a 3–5 line professional summary.",
    });

  const filledExperience = data.experience.filter(
    (item) => item.role || item.company || item.description,
  );
  if (filledExperience.length > 0) score += 18;
  else
    recommendations.push({
      ar: "أضف خبرة عملية واحدة على الأقل.",
      en: "Add at least one work experience entry.",
    });

  if (filledExperience.some((item) => hasMetric(item.description))) score += 14;
  else
    recommendations.push({
      ar: "حوّل الوصف إلى إنجازات قابلة للقياس بالأرقام.",
      en: "Turn descriptions into measurable achievements.",
    });

  if (data.skills.length >= 6) score += 10;
  else
    recommendations.push({
      ar: "أضف 6 مهارات أو أكثر ذات صلة بالوظيفة.",
      en: "Add 6 or more role-relevant skills.",
    });

  if (data.education.some((item) => item.degree || item.school)) score += 8;
  else recommendations.push({ ar: "أضف المؤهل العلمي.", en: "Add your education." });

  if (data.certifications.some((item) => item.name)) score += 8;
  else
    recommendations.push({
      ar: "أضف الشهادات المهنية إن وجدت.",
      en: "Add professional certifications if available.",
    });

  return { score: Math.min(100, score), recommendations: recommendations.slice(0, 5) };
}
