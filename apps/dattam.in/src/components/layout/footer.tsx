import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { siteConfig, nav } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo variant="full" />
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              An engineering studio building scalable digital products, from
              first idea to the platform you run in production.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </Link>
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-foreground">Navigate</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-foreground">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-pretty leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Start a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <p>Built in Hyderabad, India.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
