import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { identity, education } from "../data/content";
import { ArrowIcon } from "../components/Icons";
import HandUnderline from "../components/HandUnderline";
import { MaskedLetters } from "../components/SplitText";
import Magnetic from "../components/Magnetic";

const EASE_SOFT = [0.22, 1, 0.36, 1];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_SOFT },
});

/* masked arrow — slides out top-right, re-enters from bottom-left on hover */
function SlideArrow() {
  return (
    <span className="relative size-4 overflow-hidden">
      <ArrowIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
      <ArrowIcon className="absolute inset-0 size-4 -translate-x-[150%] translate-y-[150%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -36]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* soft warm ambient, drifting slowly */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute right-[6%] top-1/3 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,125,46,0.18),transparent_65%)] blur-2xl"
          animate={reduced ? undefined : { y: [0, -24, 0], x: [0, 14, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pt-28 pb-16 lg:grid-cols-[1.15fr_1fr]">
        {/* ===== typography ===== */}
        <div>
          <h1 className="relative type-display text-[clamp(3rem,11vw,7rem)] leading-[0.92] text-fog">
            <span className="block">
              <MaskedLetters text="Himnish" delay={0.1} />
            </span>
            <span className="block">
              <span className="relative inline-block italic">
                <MaskedLetters text="Chhabra" delay={0.3} />
                <HandUnderline className="absolute -bottom-[0.14em] left-0 h-[0.32em] w-full" delay={1.1} />
              </span>
            </span>
          </h1>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ember"
              >
                View my work
                <SlideArrow />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-edge px-7 py-3 text-sm text-fog transition-colors hover:border-amber hover:text-amber"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          {/* education logo lockup */}
          <motion.div {...fade(0.55)} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            {education.map((e) => (
              <div key={e.short} className="flex items-center gap-3.5">
                <span className="flex size-12 shrink-0 items-center justify-center">
                  <img src={e.logo} alt={e.school} className="max-h-12 max-w-12 object-contain" />
                </span>
                <div className="leading-snug">
                  <p className="text-base font-semibold text-fog">{e.short}</p>
                  <p className="text-sm text-mist">{e.degree}</p>
                  {e.award && <p className="mt-1 text-sm font-medium text-amber">{e.award}</p>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===== portrait, drifting slightly slower than the page ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE_SOFT }}
          style={{ y: portraitY }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2rem] border border-amber/25" />
            <div aria-hidden="true" className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-ember/20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-edge shadow-[0_20px_60px_-25px_rgba(44,34,24,0.4)]">
              <img
                src={identity.portrait}
                alt="Himnish Chhabra"
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "50% 28%" }}
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
