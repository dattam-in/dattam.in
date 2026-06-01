import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { GridBackdrop, GlowOrb } from "@/components/visuals/backgrounds";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-40 sm:pt-48">
      <GridBackdrop />
      <GlowOrb className="left-1/2 top-10 h-80 w-[40rem] -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Badge dot>{eyebrow}</Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-gradient text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
