import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { skills, languageLogos } from "../data/content";
import { SparkIcon, CodeIcon, ServerIcon, DatabaseIcon } from "../components/Icons";

const EASE_SOFT = [0.22, 1, 0.36, 1];

const ICONS = { spark: SparkIcon, code: CodeIcon, server: ServerIcon, database: DatabaseIcon };
const ICON_TINTS = {
  spark: "bg-amber/10 text-amber",
  code: "bg-teal/10 text-teal",
  server: "bg-plum/10 text-plum",
  database: "bg-olive/10 text-olive",
};
// asymmetric bento spans: wide / narrow / narrow / wide
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

function Blob({ className, drift = 20, duration = 11 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduced ? undefined : { y: [0, -drift, 0], x: [0, drift / 2, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden py-24">
      {/* warm colour for the glass to catch */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Blob
          className="absolute -left-24 top-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(224,125,46,0.25),transparent_65%)] blur-2xl"
          drift={22}
          duration={12}
        />
        <Blob
          className="absolute -right-20 bottom-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(193,87,27,0.18),transparent_65%)] blur-2xl"
          drift={16}
          duration={9}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Toolkit" />

        <div className="grid gap-5 lg:grid-cols-12">
          {skills.domains.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: EASE_SOFT }}
                className={SPANS[i]}
              >
                <TiltCard max={3.5} className="glass h-full rounded-3xl p-7">
                  <div className="flex items-center gap-3.5">
                    <motion.span
                      initial={{ scale: 0, rotate: -18 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 13, delay: 0.15 + (i % 2) * 0.08 }}
                      className={`inline-flex rounded-xl p-2.5 ${ICON_TINTS[d.icon]}`}
                    >
                      <Icon className="size-6" />
                    </motion.span>
                    <h3 className="type-display text-2xl text-fog sm:text-[1.7rem]">{d.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {d.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/80 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-fog/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* languages — glass pills with logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_SOFT }}
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <span className="type-label mr-2">Languages</span>
          {languageLogos.map((l) => (
            <span key={l.name} className="glass flex items-center gap-2.5 rounded-full px-4 py-2">
              <img src={l.logo} alt="" className="h-5 w-5 object-contain" />
              <span className="text-base font-medium text-fog/90">{l.name}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
