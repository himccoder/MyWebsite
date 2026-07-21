import { motion } from "framer-motion";
import { ArrowIcon } from "./Icons";

const EASE_SOFT = [0.22, 1, 0.36, 1];

/**
 * Editorial experience row — role + dates on one line, org/advisor beneath,
 * a compact summary line, and an optional badge / link. Used by Work & Research.
 */
export default function EntryRow({ entry, index }) {
  const { role, org, lab, advisor, dates, summary, badge, link } = entry;
  const subtitle = org || lab;

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.05, ease: EASE_SOFT }}
      className="group border-t border-edge py-8 transition-colors last:border-b"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="type-display text-2xl text-fog transition-colors group-hover:text-amber sm:text-3xl">
          {role}
        </h3>
        <span className="font-mono text-sm text-mist">{dates}</span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="text-base font-medium text-amber">{subtitle}</p>
        {advisor && <p className="font-mono text-xs text-faint">{advisor}</p>}
        {badge && (
          <span className="rounded-full border border-amber/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-fog/80">{summary}</p>

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-amber transition-colors hover:text-fog"
        >
          {link.label}
          <ArrowIcon className="size-3.5" />
        </a>
      )}
    </motion.li>
  );
}
