import { motion } from "framer-motion";

/**
 * Hand-drawn marker doodles — the site's recurring signature. Each draws itself
 * in when scrolled into view. Same amber marker, different gestures:
 * underline (HandUnderline.jsx), circle, arrow.
 */

const draw = (delay) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.9, delay, ease: "easeInOut" },
});

/** Scribbled ellipse that loops one-and-a-half times around a word. */
export function HandCircle({ className = "", delay = 0.4 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M42 14 C 110 2, 190 12, 191 38 C 192 62, 132 76, 78 73 C 30 70, 6 56, 10 38 C 14 18, 60 6, 118 8 C 158 10, 180 20, 178 32"
        stroke="var(--color-amber)"
        strokeWidth="3.5"
        strokeLinecap="round"
        {...draw(delay)}
      />
    </svg>
  );
}

/** Lazy horizontal squiggle. */
export function HandSquiggle({ className = "", delay = 0 }) {
  return (
    <svg className={className} viewBox="0 0 90 24" fill="none" aria-hidden="true">
      <motion.path
        d="M4 14 C 12 4, 20 4, 27 13 C 34 21, 42 21, 49 12 C 56 4, 64 4, 71 13 C 76 19, 82 19, 86 14"
        stroke="var(--color-amber)"
        strokeWidth="3"
        strokeLinecap="round"
        {...draw(delay)}
      />
    </svg>
  );
}

/** Loose curved arrow, pointing toward whatever sits after it. */
export function HandArrow({ className = "", delay = 0.3, flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <motion.path
        d="M8 8 C 18 38, 48 52, 84 46"
        stroke="var(--color-amber)"
        strokeWidth="3.5"
        strokeLinecap="round"
        {...draw(delay)}
      />
      <motion.path
        d="M72 38 L 85 46 L 70 52"
        stroke="var(--color-amber)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(delay + 0.55)}
      />
    </svg>
  );
}
