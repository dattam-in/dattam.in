import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Plate } from "@/components/ui/plate";
import { ProjectShot } from "@/modules/projects/project-shot";
import { type Project } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index).padStart(2, "0");
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Plate className="flex h-full flex-col gap-5 p-5 pt-12">
        <ProjectShot
          src={project.image}
          siteUrl={project.siteUrl}
          caption={`${num} — ${project.name.toUpperCase()}`}
        />

        <div className="flex flex-1 flex-col">
          <div className="mono-coord flex gap-2.5">
            <span>{project.category}</span>
            <span className="text-rule-strong">/</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 flex items-center justify-between gap-2 text-xl font-semibold text-foreground">
            {project.name}
            <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </h3>
          <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </Plate>
    </Link>
  );
}
