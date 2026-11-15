import { MAX_NOTEBOOK_IMAGE_URL_LENGTH, validNotebookImageSrc } from "@/lib/study-notebook";

/** Deliberately small, self-contained sticker palette; no image downloads or CDN. */
export const NOTEBOOK_STICKER_GROUPS = [
  { id: "accounting", en: "Accounting", ar: "محاسبة", stickers: ["🧮", "📊", "📈", "📉", "💰", "💵", "🧾", "🏦", "✅", "⚖️", "💹", "💳"] },
  { id: "study", en: "Study", ar: "دراسة", stickers: ["📚", "📖", "✏️", "📝", "💡", "🎯", "⭐", "❗", "❓", "🔖", "🕒", "🏆"] },
  { id: "medical", en: "Medical", ar: "طبية", stickers: ["🩺", "💊", "🧬", "🧠", "🫀", "🩹", "🏥", "💉", "🔬", "🦠", "🫁", "⚕️"] },
  { id: "markers", en: "Markers", ar: "علامات", stickers: ["🔴", "🟢", "🔵", "🟡", "➡️", "⬅️", "⬆️", "⬇️", "🔺", "✔️", "✖️", "🔔"] },
] as const;

/** Images are encoded locally at modest size to stay within browser storage quotas. */
export async function notebookImageToDataUrl(file: File): Promise<{ src: string; ratio: number }> {
  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type))
    throw new Error("Only PNG, JPEG and WebP images are supported.");
  if (file.size > 8_000_000) throw new Error("The selected image exceeds 8 MB.");
  const url = URL.createObjectURL(file);
  const image = new Image();
  try {
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("Could not decode the image."));
      image.src = url;
    });
    if (image.naturalWidth < 1 || image.naturalHeight < 1)
      throw new Error("The image dimensions are invalid.");
    const ratio = image.naturalWidth / image.naturalHeight;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas is unavailable on this device.");
    for (const maxSide of [900, 720, 560, 420, 320]) {
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      for (const quality of [.78, .62, .45]) {
        const src = canvas.toDataURL("image/webp", quality);
        if (validNotebookImageSrc(src) && src.length <= MAX_NOTEBOOK_IMAGE_URL_LENGTH)
          return { src, ratio };
      }
    }
    throw new Error("Image is too large to store safely. Choose a simpler or smaller image.");
  } finally {
    URL.revokeObjectURL(url);
  }
}
