import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Philosophy } from "@/modules/about/philosophy";
import { Team } from "@/modules/about/team";
import { Process } from "@/modules/home/process";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dattam is an engineering studio that transforms data into insights and ideas into production-grade software.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Dattam"
        title="We turn ideas into production-grade software"
        description="Dattam is an engineering studio building open data products, agentic AI systems, data visualizations, and scalable cloud infrastructure."
      />

      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
                We exist to build software that organizations can trust with
                their most important data and decisions.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  We build agentic AI applications that help organizations
                  interact with complex data in natural, intuitive ways —
                  combining large language models with information retrieval for
                  production-grade systems.
                </p>
                <p>
                  Beyond AI, we ship the full picture: multi-tenant SaaS
                  platforms, interactive data products, and the cloud
                  infrastructure that keeps them fast, secure, and always on.
                </p>
                <p>
                  Small senior team, high engineering bar, and a track record of
                  systems running reliably in production — from startups to
                  government-scale deployments.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Stats />
      <Philosophy />
      <Process />
      <Team />
      <CTA
        title="Want to build with us?"
        description="We're selective about the work we take on. If you're building something ambitious, let's talk."
      />
    </>
  );
}
