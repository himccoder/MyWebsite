/**
 * Display text with periodic RGB-split glitch layers.
 * Layers are aria-hidden; screen readers only see the real text.
 */
export default function GlitchText({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-neon animate-glitch-a select-none pointer-events-none"
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-hot animate-glitch-b select-none pointer-events-none"
      >
        {children}
      </span>
      <span className="relative">{children}</span>
    </span>
  );
}
