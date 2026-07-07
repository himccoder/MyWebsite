import { identity } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
        <span className="type-display type-lean text-xl text-fog">
          HC<span className="text-neon">.</span>
        </span>
        <p className="font-mono text-xs tracking-[0.2em] text-mist">
          © 2026 {identity.name} — Built with ego.
        </p>
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.25em] uppercase text-mist hover:text-neon transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
