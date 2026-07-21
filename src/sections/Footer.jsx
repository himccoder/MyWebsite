import { identity } from "../data/content";
import HandUnderline from "../components/HandUnderline";
import { HandArrow } from "../components/Doodles";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-10">
        <span className="relative type-display text-xl text-fog">
          Himnish<span className="text-amber">.</span>
          <HandUnderline className="absolute -bottom-1.5 left-0 h-1.5 w-full" delay={0.2} />
        </span>
        <p className="font-mono text-xs tracking-[0.15em] text-faint">
          © 2026 {identity.name} — designed & built from scratch
        </p>
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist transition-colors hover:text-amber"
        >
          <HandArrow className="h-7 w-11 -rotate-90 transition-transform group-hover:-translate-y-0.5" delay={0.4} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
