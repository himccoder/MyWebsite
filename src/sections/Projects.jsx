import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28 scroll-mt-20">
      <SectionHeading index="03" label="Selected Work" title="Projects" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
