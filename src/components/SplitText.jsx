import { motion, useReducedMotion } from "framer-motion";

const EASE_SOFT = [0.22, 1, 0.36, 1];

/**
 * Words rise out of per-word masks with a stagger (the Hildén & Kaira
 * line-mask reveal, done per word). Use on headings and short lines.
 */
export function SplitWords({ text, className = "", delay = 0, stagger = 0.05, once = true }) {
  const reduced = useReducedMotion();
  const words = String(text).split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  // The in-view trigger must live on this outer, unclipped span: the words
  // start fully hidden inside their overflow masks, and a fully clipped
  // element never intersects the viewport, so it could never trigger itself.
  return (
    <motion.span
      className={className}
      aria-label={text}
      role="text"
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "115%" },
              visible: {
                y: 0,
                transition: { duration: 0.7, delay: delay + i * stagger, ease: EASE_SOFT },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * Letters rise individually inside ONE shared mask (kerning and italic
 * overhang stay intact). For display-size single words — the hero name.
 */
export function MaskedLetters({ text, className = "", delay = 0, stagger = 0.04 }) {
  const reduced = useReducedMotion();

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span
      className={`inline-block overflow-hidden pb-[0.24em] -mb-[0.24em] align-bottom ${className}`}
      aria-label={text}
      role="text"
    >
      {String(text)
        .split("")
        .map((ch, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: EASE_SOFT }}
          >
            {ch}
          </motion.span>
        ))}
    </span>
  );
}
