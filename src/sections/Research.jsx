import SectionHeading from "../components/SectionHeading";
import EntryRow from "../components/EntryRow";
import { research } from "../data/content";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-edge bg-surface/50 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title="Research" />
        <ol>
          {research.map((r, i) => (
            <EntryRow key={r.role + r.lab} entry={r} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
