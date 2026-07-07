import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Neon dot + trailing ring cursor. Desktop (fine pointer) only;
 * ring expands over interactive elements.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 35 });
  const ringY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!e.target.closest("a, button, [role='button'], input, textarea, canvas"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] size-2 rounded-full bg-neon pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] rounded-full border border-neon/60 pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28, opacity: hovering ? 1 : 0.55 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
