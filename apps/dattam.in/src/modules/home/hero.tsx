import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";
import { GridBackdrop } from "@/components/visuals/backgrounds";
import { DatumRule } from "@/components/visuals/datum-rule";
import { MaskLines } from "@/components/motion/rule-draw";
import { HeroCoordinate } from "@/modules/home/hero-coordinate";
import { WorkIndex } from "@/modules/home/work-index";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <GridBackdrop className="opacity-60" />

      <Container className="relative">
        <HeroCoordinate>
          <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
            {/* left datum rail */}
            <div className="relative hidden lg:col-span-1 lg:flex">
              <DatumRule
                orientation="vertical"
                label="00 / HYDERABAD 17.4°N 78.4°E"
              />
            </div>

            {/* headline */}
            <div className="lg:col-span-8 lg:col-start-2">
              <span className="mono-coord">
                Software engineering studio
              </span>
              <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground">
                <MaskLines
                  lines={[
                    "We build software",
                    "with engineered",
                    <span key="c" className="text-gradient-accent">
                      clarity.
                    </span>,
                  ]}
                  stagger={0.12}
                />
              </h1>

              <p className="mt-9 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Dattam is a product engineering studio. Founders and
                organizations bring us their hardest software problems — and we
                design, build, and operate the systems that solve them.
                Structured, measured, and built to last.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    See our work
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a consultation
                  </a>
                </Button>
              </div>
            </div>

            {/* work index */}
            <div className="lg:col-span-3 lg:col-start-10">
              <WorkIndex />
            </div>
          </div>
        </HeroCoordinate>
      </Container>
    </section>
  );
}
