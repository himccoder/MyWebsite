import HandUnderline from "./HandUnderline";
import { SplitWords } from "./SplitText";

/**
 * Section heading — one big serif word that IS the section name. String
 * titles rise word-by-word out of masks; JSX titles render as given. The
 * signature hand-drawn underline draws in beneath.
 */
export default function SectionHeading({ title, underline = true }) {
  const isText = typeof title === "string";

  return (
    <div className="mb-14">
      <h2 className="relative inline-block type-display text-6xl text-fog sm:text-7xl md:text-8xl">
        {isText ? <SplitWords text={title} delay={0.1} /> : title}
        {underline && (
          <HandUnderline className="absolute -bottom-3 left-0 h-3.5 w-[46%] min-w-[8rem]" delay={0.55} />
        )}
      </h2>
    </div>
  );
}
