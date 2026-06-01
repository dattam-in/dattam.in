import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";
import { team } from "@/lib/data";

export function Team() {
  return (
    <section className="py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="§06"
          eyebrow="The team"
          title="A small, senior team"
          description="The people who design your system are the ones who build and ship it — no layers, no handoffs."
        />

        <RegisterGroup className="mt-16">
          {team.map((member, i) => (
            <RegisterChild key={member.name}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-5 border-t border-rule py-6 last:border-b sm:grid-cols-[auto_1fr_14rem] sm:gap-8">
                <span className="flex size-12 items-center justify-center border border-rule font-mono text-sm text-foreground transition-colors duration-300 group-hover:border-rule-strong">
                  {member.initials}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
                <div className="col-span-2 flex items-center gap-3 sm:col-span-1 sm:flex-col sm:items-end sm:gap-1 sm:text-right">
                  <span className="mono-coord text-accent">
                    T-{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mono-coord normal-case tracking-normal">
                    {member.role}
                  </span>
                </div>
              </div>
            </RegisterChild>
          ))}
        </RegisterGroup>
      </Container>
    </section>
  );
}
