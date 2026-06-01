import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/modules/projects/project-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { CTA } from "@/components/sections/cta";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Dattam — SaaS platforms, data products, and government-scale systems engineered to scale.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Case studies"
        description="A closer look at the products we've architected, built, and shipped — and the engineering decisions behind them."
      />

      <section className="py-16">
        <Container>
          <StaggerGroup className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <StaggerItem key={project.slug} className="h-full">
                <ProjectCard project={project} index={i + 1} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <CTA
        title="Want results like these?"
        description="Bring us your hardest engineering problem. We'll architect, build, and ship the system that solves it."
      />
    </>
  );
}
