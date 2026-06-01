import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RuleDraw } from "@/components/motion/rule-draw";
import { RegisterIn } from "@/components/motion/register-in";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [lead, ...minors] = testimonials;
  if (!lead) return null;

  return (
    <section className="relative py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="§05"
          eyebrow="Client words"
          title="The teams we build with"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* lead quote */}
          <RegisterIn className="lg:col-span-7">
            <span aria-hidden className="block font-mono text-6xl leading-none text-rule-strong">
              &ldquo;
            </span>
            <blockquote className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              {lead.quote}
            </blockquote>
            <figcaption className="mono-coord mt-8 flex items-center gap-3">
              <span className="text-foreground">— {lead.initials} / {lead.company}</span>
              <span className="text-rule-strong">·</span>
              <span>{lead.role}</span>
            </figcaption>
          </RegisterIn>

          {/* indexed minors */}
          <div className="lg:col-span-5 lg:col-start-8">
            {minors.map((t, i) => (
              <RegisterIn key={t.name} delay={i * 0.05}>
                <div className="py-6">
                  <RuleDraw />
                  <div className="mono-coord mt-5 flex items-center justify-between">
                    <span className="text-accent">Q-{String(i + 1).padStart(2, "0")}</span>
                    <span>— {t.initials} / {t.company}</span>
                  </div>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {t.quote}
                  </p>
                </div>
              </RegisterIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
