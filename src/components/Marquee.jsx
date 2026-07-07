/**
 * Infinite horizontal ticker. Content is rendered twice and translated -50%
 * for a seamless loop. Pauses on hover.
 */
export default function Marquee({ items }) {
  const row = (ariaHidden) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-mist">
            {item}
          </span>
          <span className="mx-6 text-neon select-none">▸</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-edge bg-surface/60 py-3 group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
