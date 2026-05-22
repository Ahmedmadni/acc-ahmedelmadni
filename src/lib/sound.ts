// Lightweight UI sounds via WebAudio — no asset files needed.
let ctx: AudioContext | null = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

export function playClick() {
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "triangle";
  o.frequency.setValueAtTime(880, now);
  o.frequency.exponentialRampToValueAtTime(440, now + 0.18);
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  o.connect(g).connect(c.destination);
  o.start(now);
  o.stop(now + 0.22);
}

export function playHover() {
  const c = getCtx();
  if (!c) return;
  const now = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(1200, now);
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
  o.connect(g).connect(c.destination);
  o.start(now);
  o.stop(now + 0.12);
}

/**
 * Cinematic accountant intro: a calculator-key "tick-tick" followed by a
 * cash-register "cha-ching" chord and a soft golden sparkle tail.
 * Plays once when the page loads (after user gesture / autoplay allows).
 */
export function playIntro() {
  const c = getCtx();
  if (!c) return;
  const t0 = c.currentTime + 0.05;

  // 1) Three quick calculator-key clicks
  const clickAt = (when: number, freq: number) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "square";
    o.frequency.setValueAtTime(freq, when);
    o.frequency.exponentialRampToValueAtTime(freq * 0.5, when + 0.05);
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(0.08, when + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 0.07);
    o.connect(g).connect(c.destination);
    o.start(when);
    o.stop(when + 0.09);
  };
  clickAt(t0, 1500);
  clickAt(t0 + 0.09, 1800);
  clickAt(t0 + 0.18, 1300);

  // 2) Cash-register "cha-ching" — bright chord
  const tCh = t0 + 0.35;
  const chord = [880, 1320, 1760]; // A5, E6, A6
  chord.forEach((f, i) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(f, tCh);
    g.gain.setValueAtTime(0.0001, tCh);
    g.gain.exponentialRampToValueAtTime(0.09 - i * 0.015, tCh + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, tCh + 1.1);
    o.connect(g).connect(c.destination);
    o.start(tCh);
    o.stop(tCh + 1.2);
  });

  // 3) Sparkle tail
  const tSp = tCh + 0.25;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(2400, tSp);
  o.frequency.exponentialRampToValueAtTime(3600, tSp + 0.4);
  g.gain.setValueAtTime(0.0001, tSp);
  g.gain.exponentialRampToValueAtTime(0.05, tSp + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, tSp + 0.6);
  o.connect(g).connect(c.destination);
  o.start(tSp);
  o.stop(tSp + 0.65);
}
