import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { HandSquiggle } from "./Doodles";
import { GitHubIcon, ArrowIcon } from "./Icons";

const EASE_SOFT = [0.22, 1, 0.36, 1];

export default function ProjectCard({ project, index }) {
  const { title, description, stack, img, live, repo, deliverable, badge } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: EASE_SOFT }}
      className="h-full"
    >
      <TiltCard
        max={4}
        className="panel group relative flex h-full flex-col overflow-hidden rounded-3xl transition-colors duration-500 hover:border-amber/40"
      >
        {/* image / warm placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-edge">
          {img ? (
            <img
              src={img}
              alt={`${title} preview`}
              loading="lazy"
              className="size-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-2 bg-raise">
              <span className="type-display text-7xl italic text-amber/60">{title[0]}</span>
              <HandSquiggle className="h-5 w-20 opacity-70" delay={0.35} />
            </div>
          )}
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-amber px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] text-white">
              {badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="type-display text-2xl text-fog transition-colors group-hover:text-amber">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-fog/75">{description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-edge px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-mist">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5">
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-amber transition-colors hover:text-fog">
                Live <ArrowIcon className="size-3.5" />
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`}
                className="text-mist transition-colors hover:text-amber">
                <GitHubIcon className="size-5" />
              </a>
            )}
            {deliverable && (
              <a href={deliverable} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-mist transition-colors hover:text-amber">
                Docs <ArrowIcon className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}
