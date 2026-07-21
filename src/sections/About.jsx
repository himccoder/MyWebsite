import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/content";

const EASE_SOFT = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <SectionHeading title="About" />

      <div className="max-w-3xl space-y-6 text-2xl leading-snug text-fog/90">
        {about.bio.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_SOFT }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
