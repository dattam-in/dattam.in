import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GridBackdrop, GlowOrb } from "@/components/visuals/backgrounds";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { ContactForm } from "@/modules/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. Book a consultation with Dattam's engineering team.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40 sm:pt-48">
      <GridBackdrop />
      <GlowOrb className="-left-20 top-20 h-80 w-[34rem]" />
      <GlowOrb
        className="-right-20 bottom-0 h-72 w-96"
        color="var(--color-cyan)"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: info */}
          <div className="flex flex-col">
            <Reveal>
              <Badge dot>Let&apos;s talk</Badge>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-gradient mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Book a consultation
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Tell us about your product and what success looks like. We&apos;ll
                come back with how we&apos;d architect, design, and ship it, plus a
                clear next step. No obligation.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <Button asChild size="lg" className="mt-8 w-fit">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar />
                  Book a 30-min call
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </Reveal>

            <div className="mt-12 flex flex-col gap-4">
              <Reveal delay={3}>
                <InfoRow
                  icon={<Mail className="size-5 text-accent" />}
                  label="Email us"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
              </Reveal>
              <Reveal delay={4}>
                <InfoRow
                  icon={<MapPin className="size-5 text-accent" />}
                  label="Visit us"
                  value={siteConfig.address}
                />
              </Reveal>
              <Reveal delay={5}>
                <InfoRow
                  icon={<Clock className="size-5 text-accent" />}
                  label="Response time"
                  value="We reply within 1 business day"
                />
              </Reveal>
            </div>

            <Reveal delay={6}>
              <div className="mt-10 flex items-center gap-3">
                <Link
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  <LinkedinIcon className="size-4" />
                </Link>
                <Link
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-5 transition-colors duration-300 hover:border-border-strong">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-surface-2">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.15em] text-faint">
          {label}
        </div>
        <div className="mt-1 text-pretty text-sm text-foreground">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
