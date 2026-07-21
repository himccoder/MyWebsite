import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { HandCircle } from "../components/Doodles";
import { extracurriculars } from "../data/content";
import { TrophyIcon, UsersIcon, CompassIcon, TennisIcon } from "../components/Icons";

const EASE_SOFT = [0.22, 1, 0.36, 1];

const ICONS = { trophy: TrophyIcon, users: UsersIcon, compass: CompassIcon, tennis: TennisIcon };
const ICON_TINTS = {
  trophy: "bg-marigold/10 text-marigold",
  users: "bg-teal/10 text-teal",
  compass: "bg-plum/10 text-plum",
  tennis: "bg-olive/10 text-olive",
};
// sticker-wall lean: each card sits slightly rotated, springs upright on hover
const LEANS = [-1.8, 2.1, -1.3, 1.6];

function StickerCard({ x, index }) {
  const reduced = useReducedMotion();
  const lean = reduced ? 0 : LEANS[index % LEANS.length];
  const Icon = ICONS[x.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.88, rotate: lean * 3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: lean }}
      whileHover={reduced ? undefined : { rotate: 0, y: -8, scale: 1.015 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 240, damping: 14, delay: (index % 2) * 0.08 }}
      className={`glass rounded-3xl p-7 ${index % 2 === 1 ? "sm:mt-10" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`inline-flex rounded-xl p-2.5 ${ICON_TINTS[x.icon]}`}>
          <Icon className="size-6" />
        </span>
        <span className="font-mono text-xs text-faint">{x.dates}</span>
      </div>
      <h3 className="mt-4 type-display text-2xl text-fog">{x.title}</h3>
      <p className="mt-1 text-base font-medium text-amber">{x.org}</p>
      <p className="mt-3 text-base leading-relaxed text-fog/75">{x.note}</p>
    </motion.div>
  );
}

export default function Beyond() {
  return (
    <section id="beyond" className="relative scroll-mt-20 overflow-hidden py-24">
      {/* warm colour for the glass to catch */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(224,125,46,0.16),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          underline={false}
          title={
            <>
              Beyond the{" "}
              <span className="relative inline-block px-[0.12em]">
                code
                {/* em offsets scale with the responsive heading size. Fraunces
                    sits low in a line-height:1 box (baseline ~0.85em), so the
                    loop runs from just above the ascenders to below the baseline
                    to enclose the whole word. */}
                <HandCircle className="absolute -inset-x-[0.06em] -top-[0.16em] -bottom-[0.04em]" />
              </span>
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {extracurriculars.map((x, i) => (
            <StickerCard key={x.title} x={x} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
