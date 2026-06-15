import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { RuleDraw } from "@/components/motion/rule-draw";
import { RegisterIn } from "@/components/motion/register-in";
import { siteConfig } from "@/lib/site";

export function CTA({
  title = "Have a product to build?",
  description = "Tell us what you're building. We'll show you how we'd architect, design, and ship it — and exactly what it's like to work with us. First reply within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative py-28 sm:py-32">
      <Container>
        <RegisterIn>
          <div className="reg-mark relative overflow-hidden rounded-[var(--radius-plate)] border border-rule bg-surface/20 px-6 py-20 sm:px-14 sm:py-24">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-grid-sm opacity-40 mask-radial-faded"
            />
            <span className="mono-coord">
              <span className="text-accent">§07</span> — Start a project
            </span>
            <h2 className="mt-6 max-w-3xl text-balance text-[length:var(--text-headline)] font-semibold leading-[1.04] tracking-[-0.02em] text-foreground">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a consultation
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail />
                  {siteConfig.email}
                </a>
              </Button>
            </div>

            <RuleDraw className="mt-14" />
            <p className="mono-coord mt-5">
              LAT 17.40 · LON 78.48 · {siteConfig.email}
            </p>
          </div>
        </RegisterIn>
      </Container>
    </section>
  );
}
