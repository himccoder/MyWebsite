import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/content";
import { ArrowIcon } from "../components/Icons";

const TAGS = ["ALL", "RESEARCH", "INDUSTRY", "TEACHING"];

const tagColor = {
  RESEARCH: "text-neon border-neon/40",
  INDUSTRY: "text-hot border-hot/40",
  TEACHING: "text-fog border-edge",
};

export default function Experience() {
  const [filter, setFilter] = useState("ALL");
  const shown = filter === "ALL" ? experience : experience.filter((e) => e.tag === filter);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28 scroll-mt-20">
      <SectionHeading index="02" label="Timeline" title="Experience" />

      {/* filter */}
      <div className="mb-12 flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 font-mono text-xs tracking-[0.2em] border transition-colors ${
              filter === t
                ? "border-neon bg-neon/10 text-neon"
                : "border-edge text-mist hover:border-neon/50 hover:text-fog"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* timeline */}
      <div className="relative ml-2 border-l border-edge pl-8 sm:ml-4 sm:pl-12">
        <AnimatePresence mode="popLayout">
          {shown.map((e) => (
            <motion.article
              key={e.role + e.org}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="group relative pb-12 last:pb-0"
            >
              {/* node */}
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1.5 size-2.5 rotate-45 bg-edge transition-colors group-hover:bg-neon sm:-left-12"
                style={{ transform: "translateX(-53%) rotate(45deg)" }}
              />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-xs tracking-[0.2em] text-mist">{e.dates}</span>
                <span className={`border px-2 py-0.5 font-mono text-[10px] tracking-[0.25em] ${tagColor[e.tag]}`}>
                  {e.tag}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-fog group-hover:text-neon transition-colors">
                {e.role}
              </h3>
              <p className="text-sm font-medium text-mist">{e.org}</p>
              <p className="mt-2 max-w-3xl text-fog/80 leading-relaxed">{e.summary}</p>

              {e.link && (
                <a
                  href={e.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-neon hover:text-fog transition-colors"
                >
                  {e.link.label}
                  <ArrowIcon className="size-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
