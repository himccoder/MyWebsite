import { motion } from "framer-motion";

/**
 * Signature hand-drawn marker underline that draws itself in when scrolled into
 * view. The one recurring flourish of the site — used under the hero surname and
 * section titles. Irregular path gives it a human, marker-pen quality.
 */
export default function HandUnderline({ className = "", delay = 0.2 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 18"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M3 11 C 52 5, 104 15, 150 9 S 244 4, 297 12"
        stroke="var(--color-amber)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
