import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/content";

const EASE_CUT = [0.85, 0, 0.15, 1];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28 scroll-mt-20">
      <SectionHeading index="04" label="Arsenal" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.domains.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.1, ease: EASE_CUT }}
            className="panel group relative p-6 transition-colors hover:border-neon/50"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-neon to-transparent opacity-40 group-hover:opacity-100 transition-opacity"
            />
            <p className="font-mono text-xs tracking-[0.3em] text-neon mb-1">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="type-display text-2xl sm:text-3xl text-fog">{d.title}</h3>
            <p className="mt-2 text-sm text-mist">{d.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {d.items.map((item) => (
                <span
                  key={item}
                  className="border border-edge bg-ink px-3 py-1.5 text-sm text-fog/85 transition-colors group-hover:border-edge hover:!border-neon hover:!text-neon"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* languages strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-edge pt-8"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-mist">Languages</span>
        {skills.languages.map((lang, i) => (
          <span key={lang} className="flex items-center gap-6">
            <span className="type-display text-xl sm:text-2xl text-fog/90">{lang}</span>
            {i < skills.languages.length - 1 && <span aria-hidden="true" className="text-neon">/</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
