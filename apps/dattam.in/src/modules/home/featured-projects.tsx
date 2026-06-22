import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@dattam/ui/cn";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RegisterIn } from "@/components/motion/register-in";
import { RuleDraw } from "@/components/motion/rule-draw";
import { IndexCount } from "@/components/motion/index-count";
import { ProjectShot } from "@/modules/projects/project-shot";
import { type Project, projects } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section id="work" className="relative overflow-hidden py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="§02"
          eyebrow="Selected work"
          title="Case studies from real engagements"
          description="Products we designed, built, and still run alongside our clients."
        />
        <div className="mt-20 flex flex-col gap-24 lg:gap-28">
          {projects.map((p, i) => (
            <Spread key={p.slug} project={p} n={i + 1} reversed={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Spread({
  project,
  n,
  reversed,
}: {
  project: Project;
  n: number;
  reversed: boolean;
}) {
  const num = String(n).padStart(2, "0");
  return (
    <RegisterIn className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      {/* copy */}
      <div className={cn("lg:col-span-5", reversed && "lg:order-2 lg:col-start-8")}>
        <div className="flex items-center gap-3">
          <span className="mono-coord text-accent">{num} — {project.name.toUpperCase()}</span>
        </div>
        <div className="mono-coord mt-3 flex gap-2.5">
          <span>{project.category}</span>
          <span className="text-rule-strong">/</span>
          <span>{project.year}</span>
        </div>

        <p className="mt-5 text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground">
          {project.tagline}
        </p>
        <p className="mt-4 max-w-[46ch] text-pretty leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <RuleDraw className="mt-8" />
        <dl className="grid grid-cols-3 gap-4 pt-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-xl font-semibold text-foreground">
                <IndexCount value={m.value} />
              </dt>
              <dd className="mono-coord mt-1">{m.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="mono-coord normal-case tracking-normal">
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Read case study
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* visual */}
      <div className={cn("lg:col-span-7", reversed && "lg:order-1 lg:col-start-1")}>
        <Link href={`/projects/${project.slug}`} className="block">
          <ProjectShot
            src={project.image}
            siteUrl={project.siteUrl}
            caption={`${num} — ${project.name.toUpperCase()}`}
            priority={n === 1}
          />
        </Link>
      </div>
    </RegisterIn>
  );
}
