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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-edge" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* mark */}
        <a href="#top" className="type-display text-2xl leading-none text-fog">
          Himnish<span className="text-amber">.</span>
        </a>

        {/* desktop links — label slides up, amber duplicate slides in */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative block overflow-hidden text-sm uppercase tracking-[0.16em]"
              >
                <span className="block text-mist transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {l.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block translate-y-full text-amber transition-transform duration-300 ease-out group-hover:translate-y-0"
                >
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-mist transition-colors hover:text-fog">
            <GitHubIcon />
          </a>
          <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-mist transition-colors hover:text-[#0a66c2]">
            <LinkedInIcon />
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
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
            transition={{ duration: 0.25 }}
            className="border-b border-edge bg-ink/95 px-5 pb-6 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="type-display text-3xl text-fog transition-colors hover:text-amber"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-6">
              <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mist hover:text-fog">
                <GitHubIcon className="size-6" />
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mist hover:text-[#0a66c2]">
                <LinkedInIcon className="size-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
