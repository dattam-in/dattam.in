import { Container } from "@/components/layout/container";
import { RuleDraw } from "@/components/motion/rule-draw";
import { Reveal } from "@/components/motion/reveal";
import { techStack, trustItems } from "@/lib/data";

export function TrustStrip() {
  return (
    <section className="relative border-y border-rule py-16">
      <Container>
        <div className="flex items-center justify-between">
          <span className="mono-coord">
            Stack / {String(techStack.length).padStart(2, "0")} tools
          </span>
          <span className="mono-coord">Specification</span>
        </div>
        <RuleDraw className="mt-3" />

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                {i > 0 && <span className="text-rule-strong">·</span>}
                <span className="text-sm text-muted-foreground">{tech}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i}>
              <div className="flex items-baseline gap-3 border-t border-rule pt-3">
                <span className="mono-coord text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
