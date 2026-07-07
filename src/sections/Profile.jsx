import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/content";

const EASE_CUT = [0.85, 0, 0.15, 1];

export default function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-5 py-28 scroll-mt-20">
      <SectionHeading index="01" label="Profile" title="Who I Am" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-fog/90">
          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: EASE_CUT }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* player-card stat strip */}
        <div className="grid grid-cols-2 gap-3 self-start">
          {profile.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: EASE_CUT }}
              className="panel relative overflow-hidden p-5 hover:border-neon/50 transition-colors"
            >
              <span aria-hidden="true" className="absolute right-0 top-0 h-8 w-px bg-neon/60" />
              <span aria-hidden="true" className="absolute right-0 top-0 h-px w-8 bg-neon/60" />
              <p className="type-display type-lean text-4xl sm:text-5xl text-neon">{s.value}</p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-mist">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
