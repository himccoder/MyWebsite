import SectionHeading from "../components/SectionHeading";
import EntryRow from "../components/EntryRow";
import { work } from "../data/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <SectionHeading title="Experience" />
      <ol>
        {work.map((w, i) => (
          <EntryRow key={w.role + w.org} entry={w} index={i} />
        ))}
      </ol>
    </section>
  );
}
