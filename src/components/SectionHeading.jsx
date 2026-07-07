import { motion } from "framer-motion";

/**
 * Numbered section heading — "01 // PROFILE" index line + giant display title.
 */
export default function SectionHeading({ index, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.85, 0, 0.15, 1] }}
      className="mb-12"
    >
      <p className="font-mono text-sm tracking-[0.35em] text-neon mb-3">
        {index} <span className="text-mist">//</span>{" "}
        <span className="text-mist uppercase">{label}</span>
      </p>
      <h2 className="type-display type-lean text-5xl sm:text-6xl md:text-7xl text-fog">
        {title}
        <span className="text-neon">.</span>
      </h2>
    </motion.div>
  );
}
