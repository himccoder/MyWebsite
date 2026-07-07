import { motion } from "framer-motion";
import { GitHubIcon, ArrowIcon } from "./Icons";

const EASE_CUT = [0.85, 0, 0.15, 1];

export default function ProjectCard({ project, index }) {
  const { title, description, stack, img, live, repo, deliverable, badge } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1, ease: EASE_CUT }}
      className="panel group relative flex flex-col overflow-hidden transition-all duration-300 hover:border-neon/60 hover:-translate-y-1.5 hover:shadow-[0_0_32px_rgba(0,229,255,0.12)]"
    >
      {/* image / neon placeholder */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-edge">
        {img ? (
          <img
            src={img}
            alt={`${title} screenshot`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(30,58,255,0.35),rgba(7,9,15,0.9)),radial-gradient(ellipse_at_80%_80%,rgba(0,229,255,0.25),transparent)]">
            <span className="type-display type-lean text-6xl text-neon/70">{title[0]}</span>
          </div>
        )}
        {badge && (
          <span className="absolute left-3 top-3 bg-neon px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-ink">
            ★ {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="type-display text-2xl text-fog group-hover:text-neon transition-colors">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fog/75">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span key={s} className="border border-edge px-2 py-0.5 font-mono text-[10px] tracking-wider text-mist">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-neon hover:text-fog transition-colors">
              Live <ArrowIcon className="size-3.5" />
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`}
              className="text-mist hover:text-neon transition-colors">
              <GitHubIcon className="size-4.5" />
            </a>
          )}
          {deliverable && (
            <a href={deliverable} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-mist hover:text-neon transition-colors">
              Docs <ArrowIcon className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
