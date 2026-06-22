import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-28 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40 mask-b-faded" />
      <Container className="relative">
        <SectionHeading
          index="§03"
          eyebrow="How we work"
          title="An extension of your team"
          description="Clear communication, tight feedback loops, no black boxes. From kickoff through launch and the work that comes after."
        />

        <RegisterGroup className="mt-16">
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <RegisterChild key={step.step}>
                <div className="group grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-t border-rule py-8 last:border-b sm:grid-cols-[4rem_1fr] sm:gap-x-8">
                  <span className="mono-coord pt-1 text-accent">{step.step}</span>
                  <div className="grid gap-3 lg:grid-cols-12 lg:gap-8">
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-foreground lg:col-span-4">
                      <Icon className="size-4 text-faint transition-colors duration-300 group-hover:text-accent" />
                      {step.title}
                    </h3>
                    <p className="max-w-[52ch] leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RegisterChild>
            );
          })}
        </RegisterGroup>
      </Container>
    </section>
  );
}
