import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { identity, navLinks } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-edge" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* mark */}
        <a href="#top" className="type-display type-lean text-2xl text-fog leading-none">
          HC<span className="text-neon">.</span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-[0.25em] uppercase text-mist hover:text-neon transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-mist hover:text-neon transition-colors">
            <GitHubIcon />
          </a>
          <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-mist hover:text-neon transition-colors">
            <LinkedInIcon />
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-fog transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-fog transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-fog transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-edge bg-ink/95 backdrop-blur-md px-5 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="type-display text-3xl text-fog hover:text-neon transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-6">
              <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mist hover:text-neon">
                <GitHubIcon className="size-6" />
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mist hover:text-neon">
                <LinkedInIcon className="size-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
