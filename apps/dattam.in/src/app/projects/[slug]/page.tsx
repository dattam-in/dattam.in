import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Target,
  Lightbulb,
  Boxes,
  TriangleAlert,
  Gauge,
  Trophy,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { GridBackdrop, GlowOrb, Hairline } from "@/components/visuals/backgrounds";
import { ProjectShot } from "@/modules/projects/project-shot";
import { CTA } from "@/components/sections/cta";
import { getProject, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next =
    projects[(currentIndex + 1) % projects.length] ?? projects[0]!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <GridBackdrop />
        <GlowOrb
          className="left-1/2 top-10 h-80 w-[40rem] -translate-x-1/2"
          color={project.accent}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
        <Container className="relative">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All projects
            </Link>
          </Reveal>

          <div className="mt-8 flex items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="font-mono text-xs text-faint">{project.year}</span>
          </div>

          <Reveal delay={1}>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-12">
              <ProjectShot
                src={project.image}
                siteUrl={project.siteUrl}
                caption={project.name.toUpperCase()}
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Metrics */}
      <section className="py-12">
        <Container>
          <Hairline />
          <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div
                  className="text-4xl font-semibold tracking-tight sm:text-5xl"
                  style={{ color: project.accent }}
                >
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <Hairline />
        </Container>
      </section>

      {/* Narrative */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <div className="flex flex-col gap-14">
            <Block
              icon={<Target className="size-5 text-accent" />}
              label="The problem"
              body={project.problem}
            />
            <Block
              icon={<Lightbulb className="size-5 text-accent" />}
              label="Product vision"
              body={project.vision}
            />
            <Block
              icon={<Boxes className="size-5 text-accent" />}
              label="Architecture"
              body={project.architecture}
            />

            <div className="grid gap-10 sm:grid-cols-2">
              <ListBlock
                icon={<TriangleAlert className="size-5 text-accent" />}
                label="Engineering challenges"
                items={project.challenges}
              />
              <ListBlock
                icon={<Gauge className="size-5 text-accent" />}
                label="Performance & optimization"
                items={project.optimizations}
              />
            </div>

            <Block
              icon={<Trophy className="size-5 text-accent" />}
              label="The outcome"
              body={project.outcome}
            />

            <div>
              <h3 className="text-sm font-medium text-muted">Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-surface/40 px-3 py-1.5 font-mono text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section className="py-12">
        <Container>
          <Reveal>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface/40 p-8 transition-all duration-500 hover:border-border-strong"
            >
              <div>
                <div className="text-sm text-faint">Next case study</div>
                <div className="mt-1 text-2xl font-semibold text-foreground">
                  {next.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {next.tagline}
                </div>
              </div>
              <ArrowUpRight className="size-7 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}

function Block({
  icon,
  label,
  body,
}: {
  icon: React.ReactNode;
  label: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-border-strong bg-surface-2">
            {icon}
          </span>
          <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">
            {label}
          </h2>
        </div>
        <p className="text-pretty text-lg leading-relaxed text-foreground/90">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

function ListBlock({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-border-strong bg-surface-2">
            {icon}
          </span>
          <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">
            {label}
          </h2>
        </div>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-1 size-4 shrink-0 text-accent" />
              <span className="text-pretty leading-relaxed text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
