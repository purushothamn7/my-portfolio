import React, { useRef, useEffect } from "react";

// Hex to [r, g, b]
function hwfHex(hex) {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((hex || "").trim());
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].split("").map((c) => c + c).join("") : m[1];
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function hwfRadius(coverage, gap) {
  const c = coverage < 0 ? 0 : coverage > 1 ? 1 : coverage;
  return Math.sqrt(c) * gap * 0.58;
}

function hwfStep(x, y, vx, vy, hx, hy, px, py, r) {
  const dx = x - px;
  const dy = y - py;
  const d2 = dx * dx + dy * dy;
  if (r > 0 && d2 < r * r) {
    const d = Math.sqrt(d2) + 0.001;
    const f = (1 - d / r) * 2.8;
    vx += (dx / d) * f;
    vy += (dy / d) * f;
  }
  vx = (vx + (hx - x) * 0.06) * 0.84;
  vy = (vy + (hy - y) * 0.06) * 0.84;
  return [x + vx, y + vy, vx, vy];
}

function hwfWarmth(x, y, hx, hy, span) {
  const d = Math.hypot(x - hx, y - hy);
  return span > 0 ? Math.min(1, d / span) : 0;
}

function hwfFitSize(measured, width) {
  return measured > 0 ? (width / measured) * 100 : 0;
}

const HWF_CSS = `
.hwf-root {
  position: relative;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
  background: var(--hwf-bg);
  color: var(--hwf-ink);
  -webkit-font-smoothing: antialiased;
}
.hwf-arch {
  width: 100%;
  height: 28px;
  display: block;
  pointer-events: none;
}
.hwf-top {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) repeat(var(--hwf-cols, 2), minmax(0, 1fr));
  gap: clamp(24px, 4vw, 56px);
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 1.5rem clamp(24px, 4vw, 64px) 0;
  box-sizing: border-box;
}
.hwf-brand {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.hwf-brand-tag {
  display: block;
  font-family: var(--hwf-mono, monospace);
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hwf-ink);
  opacity: 0.65;
  margin-bottom: 0.1rem;
}
.hwf-brand-role {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: var(--hwf-mono, monospace);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--hwf-ink);
  line-height: 1.45;
}
.hwf-brand-dot {
  color: var(--ca-blue, #2b57d6);
  font-size: 1.25rem;
  line-height: 1.15;
  margin-top: 0.05rem;
}
.hwf-brand-meta {
  margin: 0;
  font-family: var(--hwf-mono, monospace);
  font-size: 0.8125rem;
  line-height: 1.6;
  color: rgba(25, 21, 16, 0.72);
  max-width: 330px;
  white-space: pre-line;
}
.hwf-brand-email {
  font-family: var(--hwf-mono, monospace);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--ca-blue, #2b57d6);
  text-decoration: underline;
  text-underline-offset: 4px;
  width: fit-content;
  transition: opacity 0.2s ease;
}
.hwf-brand-email:hover {
  opacity: 0.8;
}
.hwf-socials {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.35rem;
}
.hwf-social-btn {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 4px rgba(17, 18, 18, 0.16);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  text-decoration: none;
}
.hwf-social-btn:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 1px 4px 8px rgba(17, 18, 18, 0.22);
}
.hwf-col h3 {
  margin: 0 0 0.85rem;
  font-family: var(--hwf-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(25, 21, 16, 0.45);
  border-bottom: 1px solid rgba(25, 21, 16, 0.14);
  padding-bottom: 0.45rem;
}
.hwf-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.hwf-col a,
.hwf-col .hwf-link-btn {
  font-family: var(--hwf-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--hwf-ink);
  opacity: 0.8;
  display: inline-block;
  padding: 0.15rem 0;
  line-height: 1.4;
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.2s ease, opacity 0.2s ease, transform 0.15s ease;
}
.hwf-col a:hover,
.hwf-col .hwf-link-btn:hover {
  opacity: 1;
  color: var(--ca-blue, #2b57d6);
  transform: translateX(2px);
}
.hwf-rule {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  margin: 28px 0 0;
  padding: 16px clamp(24px, 4vw, 64px) 0.5rem;
  border-top: 1px dashed rgba(25, 21, 16, 0.18);
  font-family: var(--hwf-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-sizing: border-box;
}
.hwf-rule-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hwf-rule-copy {
  opacity: 0.65;
}
.hwf-rule-bold {
  font-family: var(--font-artsy-hand, "Just Me Again Down Here", "Caveat", cursive);
  font-size: 1.35rem;
  text-transform: none;
  letter-spacing: 0.02em;
  color: var(--hwf-ink);
}
.hwf-up {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--hwf-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: none;
  border: 0;
  cursor: pointer;
  color: var(--hwf-ink);
  opacity: 0.75;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.15s ease;
}
.hwf-up:hover {
  opacity: 1;
  color: var(--ca-blue, #2b57d6);
  transform: translateY(-2px);
}
.hwf-wordmark-container {
  position: relative;
  width: 100%;
  height: clamp(140px, 16.5vw, 320px);
  margin-top: 0.75rem;
  overflow: hidden;
}
.hwf-wordmark-container canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  max-width: none;
  pointer-events: none;
}
.hwf-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
@media (max-width: 860px) {
  .hwf-top {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    row-gap: 28px;
  }
  .hwf-brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 520px) {
  .hwf-top {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
  .hwf-rule {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
`;

export default function HalftoneWordmarkFooter({
  showWordmark = true,
  wordmark = "PURUSHOTHAM",
  brandTitle = "PURUSHOTHAM",
  label = "FULL-STACK DEVELOPER · APP DEVELOPER · UI/UX DESIGNER",
  meta = "Building modern websites, powerful mobile applications, and meaningful digital experiences.",
  email = "purushothamkrishna07@gmail.com",
  socials = [
    { name: "GitHub", href: "https://github.com/Purushotham07", icon: "github", bg: "#191510", color: "#ffffff" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/purushotham-n-34603226a", icon: "linkedin", bg: "#f7c948", color: "#191510" },
    { name: "Portfolio", href: "https://purushotham.vercel.app/", icon: "portfolio", bg: "#2b57d6", color: "#ffffff" },
    { name: "Email", href: "mailto:purushothamkrishna07@gmail.com", icon: "email", bg: "#ff4d8d", color: "#ffffff" },
  ],
  columns = [],
  backToTop = true,
  palette = { background: "#fdfdfb", ink: "#191510", warm: "#f59e0b" },
  dotGap = 5,
  radius = 85,
  grain = 0.3,
  interactive = true,
  monoFamily = "var(--font-artsy-mono, monospace)",
  className = "",
}) {
  const colors = {
    background: palette.background || "#fdfdfb",
    ink: palette.ink || "#191510",
    warm: palette.warm || "#f59e0b",
  };

  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const opts = useRef({
    colors,
    dotGap,
    radius,
    grain,
    interactive,
    wordmark,
  });

  const key = [
    wordmark,
    dotGap,
    grain,
    colors.background,
    colors.ink,
    colors.warm,
    showWordmark,
  ].join("|");

  useEffect(() => {
    opts.current = {
      colors,
      dotGap,
      radius,
      grain,
      interactive,
      wordmark,
    };

    if (!showWordmark) return;

    const root = rootRef.current;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!root || !container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let px = -1e5;
    let py = -1e5;
    let raf = 0;
    let visible = true;
    let awake = true;
    let ring = { x: 0, y: 0, t: -1 };
    let dots = new Float32Array(0);
    let count = 0;
    let grainTile = null;
    const ink = hwfHex(opts.current.colors.ink) || [25, 21, 16];
    const warm = hwfHex(opts.current.colors.warm) || [245, 158, 11];

    const layout = () => {
      const o = opts.current;
      const rect = container.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      // Render the giant wordmark to an offscreen mask
      const mask = document.createElement("canvas");
      mask.width = w;
      mask.height = h;
      const m = mask.getContext("2d", { willReadFrequently: true });
      if (!m) return;

      const word = (o.wordmark || "PURUSHOTHAM").toUpperCase();
      const canvasFont = 'Anton, Impact, "Arial Black", sans-serif';
      m.font = `900 100px ${canvasFont}`;
      const measuredW = m.measureText(word).width || 600;
      const targetW = w * 0.985;
      let fit = hwfFitSize(measuredW, targetW);

      // Ensure letters stay with safe margins inside container
      if (fit * 0.78 > h - 12) {
        fit = (h - 12) / 0.78;
      }

      m.font = `900 ${fit}px ${canvasFont}`;
      const box = m.measureText(word);

      // Position baseline so letters sit with 6px padding at bottom of container
      const baselineY = Math.round(h - 6);

      m.fillStyle = "#000000";
      m.textBaseline = "alphabetic";
      m.fillText(word, (w - box.width) / 2, baselineY);

      const img = m.getImageData(0, 0, w, h).data;
      const gap = Math.max(3, o.dotGap);
      const cols = Math.ceil(w / gap);
      const rows = Math.ceil(h / gap);
      const tmp = [];

      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          let sum = 0;
          for (let sy = 0; sy < 3; sy++) {
            for (let sx = 0; sx < 3; sx++) {
              const x = Math.min(w - 1, Math.floor(gx * gap + ((sx + 0.5) * gap) / 3));
              const y = Math.min(h - 1, Math.floor(gy * gap + ((sy + 0.5) * gap) / 3));
              sum += img[(y * w + x) * 4 + 3];
            }
          }
          const cov = sum / (9 * 255);
          if (cov < 0.05) continue;
          const hx = gx * gap + gap / 2;
          const hy = gy * gap + gap / 2;
          tmp.push(hx, hy, 0, 0, hx, hy, hwfRadius(cov, gap));
        }
      }
      dots = new Float32Array(tmp);
      count = tmp.length / 7;

      // Create subtle film/print grain tile
      grainTile = document.createElement("canvas");
      grainTile.width = 256;
      grainTile.height = 256;
      const g = grainTile.getContext("2d");
      if (g) {
        const id = g.createImageData(256, 256);
        for (let i = 0; i < id.data.length; i += 4) {
          const v = Math.random() * 255;
          id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
          id.data[i + 3] = Math.random() < 0.5 ? 0 : 255;
        }
        g.putImageData(id, 0, 0);
      }
      awake = true;
    };

    const draw = (now) => {
      const o = opts.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = o.colors.background;
      ctx.fillRect(0, 0, w, h);

      const r = o.interactive && !reduced ? Math.max(0, o.radius) : 0;
      const ringAge = ring.t < 0 ? 1e9 : now - ring.t;
      const ringR = ringAge * 0.9;
      let moving = false;

      for (let i = 0; i < count; i++) {
        const j = i * 7;
        let x = dots[j];
        let y = dots[j + 1];
        let vx = dots[j + 2];
        let vy = dots[j + 3];
        const hx = dots[j + 4];
        const hy = dots[j + 5];

        if (!reduced) {
          if (ringAge < 900) {
            const dx = hx - ring.x;
            const dy = hy - ring.y;
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const band = 1 - Math.min(1, Math.abs(d - ringR) / 26);
            if (band > 0) {
              const f = band * 3.2 * (1 - ringAge / 900);
              vx += (dx / d) * f;
              vy += (dy / d) * f;
            }
          }
          const s = hwfStep(x, y, vx, vy, hx, hy, px, py, r);
          x = s[0];
          y = s[1];
          vx = s[2];
          vy = s[3];
          if (Math.abs(vx) + Math.abs(vy) > 0.02 || Math.abs(x - hx) + Math.abs(y - hy) > 0.05) {
            moving = true;
          } else {
            x = hx;
            y = hy;
            vx = 0;
            vy = 0;
          }
          dots[j] = x;
          dots[j + 1] = y;
          dots[j + 2] = vx;
          dots[j + 3] = vy;
        }

        const k = hwfWarmth(x, y, hx, hy, 28);
        ctx.fillStyle =
          k > 0.02
            ? "rgb(" +
              Math.round(ink[0] + (warm[0] - ink[0]) * k) + "," +
              Math.round(ink[1] + (warm[1] - ink[1]) * k) + "," +
              Math.round(ink[2] + (warm[2] - ink[2]) * k) + ")"
            : o.colors.ink;
        ctx.beginPath();
        ctx.arc(x, y, dots[j + 6], 0, 6.2832);
        ctx.fill();
      }

      if (grainTile && o.grain > 0) {
        ctx.globalAlpha = Math.min(1, o.grain) * 0.07;
        ctx.globalCompositeOperation = "overlay";
        const pattern = ctx.createPattern(grainTile, "repeat");
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, w, h);
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }

      awake = moving || ringAge < 900 || px > -1e4;
    };

    const loop = (now) => {
      raf = 0;
      if (!visible) return;
      draw(now);
      if (awake) raf = requestAnimationFrame(loop);
    };

    const wake = () => {
      awake = true;
      if (!raf && visible) raf = requestAnimationFrame(loop);
    };

    const toLocal = (e) => {
      const b = canvas.getBoundingClientRect();
      return [e.clientX - b.left, e.clientY - b.top];
    };
    const onMove = (e) => {
      if (!opts.current.interactive) return;
      const p = toLocal(e);
      px = p[0];
      py = p[1];
      wake();
    };
    const onLeave = () => {
      px = -1e5;
      py = -1e5;
      wake();
    };
    const onDown = (e) => {
      if (!opts.current.interactive || reduced) return;
      if (e.target.closest("a,button")) return;
      const p = toLocal(e);
      ring = { x: p[0], y: p[1], t: performance.now() };
      wake();
    };

    layout();
    draw(performance.now());
    wake();

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointerdown", onDown);

    const ro = new ResizeObserver(() => {
      layout();
      wake();
    });
    ro.observe(container);

    const io = new IntersectionObserver((entries) => {
      visible = entries[0] ? entries[0].isIntersecting : true;
      if (visible) wake();
    });
    io.observe(root);

    let alive = true;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!alive) return;
        layout();
        wake();
      });
    }

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointerdown", onDown);
    };
  }, [key]);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={rootRef}
      className={`hwf-root ${className}`}
      style={{
        "--hwf-bg": colors.background,
        "--hwf-ink": colors.ink,
        "--hwf-mono": monoFamily,
        "--hwf-cols": columns.length || 2,
      }}
    >
      <style>{HWF_CSS}</style>

      {/* Arched wave transition into footer */}
      <svg className="hwf-arch" viewBox="0 0 1440 28" fill="none" preserveAspectRatio="none">
        <path d="M0 28 C 480 0, 960 0, 1440 28 Z" fill="var(--hwf-bg, #fdfdfb)" />
      </svg>

      <span className="hwf-sr">{wordmark}</span>

      <div className="hwf-top">
        <div className="hwf-brand">
          {brandTitle && (
            <span className="hwf-brand-tag">{brandTitle}</span>
          )}
          <div className="hwf-brand-role">
            <span className="hwf-brand-dot">•</span>
            <span style={{ whiteSpace: "pre-line" }}>{label}</span>
          </div>
          {meta && <p className="hwf-brand-meta">{meta}</p>}
          {email && (
            <a href={`mailto:${email}`} className="hwf-brand-email">
              {email} ↗
            </a>
          )}
          {socials && socials.length > 0 && (
            <div className="hwf-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hwf-social-btn"
                  style={{ backgroundColor: s.bg, color: s.color }}
                  title={s.name}
                  aria-label={s.name}
                >
                  {s.icon === "github" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  )}
                  {s.icon === "linkedin" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  )}
                  {s.icon === "portfolio" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2L2 19.7778H22L12 2Z" />
                    </svg>
                  )}
                  {s.icon === "email" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        {columns.map((col) => (
          <nav className="hwf-col" key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.onClick ? (
                    <button
                      type="button"
                      className="hwf-link-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        l.onClick(e);
                      }}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      href={l.href || "#"}
                      target={l.target}
                      rel={l.target ? "noreferrer" : undefined}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="hwf-rule">
        <div className="hwf-rule-left">
          <span className="hwf-rule-copy">© 2026 Purushotham · All rights reserved</span>
          <span className="hwf-rule-bold">Let&apos;s Build Something Bold ✨</span>
        </div>
        {backToTop && (
          <button type="button" className="hwf-up" onClick={toTop}>
            Back to top ↑
          </button>
        )}
      </div>

      {/* Dedicated Wordmark Section: physically below the rule with zero overlap */}
      {showWordmark && (
        <div ref={containerRef} className="hwf-wordmark-container">
          <canvas ref={canvasRef} aria-hidden="true" />
        </div>
      )}
    </footer>
  );
}
