import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { identity, marquee } from "../data/content";
import Marquee from "../components/Marquee";
import GlitchText from "../components/GlitchText";
import { ArrowIcon } from "../components/Icons";

const BallScene = lazy(() => import("../three/BallScene"));

const EASE_CUT = [0.85, 0, 0.15, 1];

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % identity.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={identity.roles[i]}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "-110%" }}
          transition={{ duration: 0.4, ease: EASE_CUT }}
          className="inline-block text-neon"
        >
          {identity.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const nameLine = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: (d) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.6, delay: d, ease: EASE_CUT },
  }),
};

export default function Hero() {
  const [supports3d, setSupports3d] = useState(true);

  useEffect(() => {
    // skip WebGL scene for reduced-motion users
    setSupports3d(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* background: radial neon haze + faint grid */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(0,229,255,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,229,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.6)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-8 px-5 pt-28 pb-10 lg:grid-cols-[1.15fr_1fr]">
        {/* ===== typography ===== */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="font-mono text-sm tracking-[0.35em] text-neon uppercase mb-5"
          >
            // Portfolio v2.0
          </motion.p>

          <h1 className="type-display type-lean text-[clamp(3.5rem,10vw,7.5rem)] text-fog">
            <motion.span variants={nameLine} initial="hidden" animate="show" custom={0.1} className="block">
              <GlitchText>Himnish</GlitchText>
            </motion.span>
            <motion.span variants={nameLine} initial="hidden" animate="show" custom={0.3} className="block">
              <GlitchText>Chhabra</GlitchText>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.45, ease: EASE_CUT }}
            className="mt-6 text-xl sm:text-2xl font-medium"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.45, ease: EASE_CUT }}
            className="mt-3 text-mist max-w-md"
          >
            {identity.education}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.45, ease: EASE_CUT }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-neon px-6 py-3 font-mono text-sm font-bold tracking-widest text-ink uppercase transition-transform hover:-translate-y-0.5"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}
            >
              See the work
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-edge px-6 py-3 font-mono text-sm tracking-widest text-fog uppercase transition-colors hover:border-neon hover:text-neon"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* ===== 3D tennis ball ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative h-[320px] sm:h-[420px] lg:h-[540px]"
        >
          {supports3d ? (
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="size-40 rounded-full border border-neon/30 animate-pulse" />
                </div>
              }
            >
              <BallScene />
            </Suspense>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="size-48 rounded-full border-2 border-neon/40 glow-neon" />
            </div>
          )}
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-mist/60 uppercase whitespace-nowrap">
            drag to spin · click to smash
          </p>
        </motion.div>
      </div>

      {/* ===== achievement ticker (replaces Awards section) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Marquee items={marquee} />
      </motion.div>
    </section>
  );
}
