import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";
import { clients } from "@/lib/data";

export function Clients() {
  return (
    <section id="clients" className="relative py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="§04"
          eyebrow="Trusted by"
          title="Teams that ship with us"
          description="From research institutions to fast-moving startups — the people we've built production systems for."
        />

        <RegisterGroup className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <RegisterChild key={client.name}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="group flex h-24 items-center justify-center rounded-plate border border-rule bg-white p-6 transition-colors hover:border-rule-strong"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={140}
                  height={48}
                  className="h-9 w-auto max-w-[140px] object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                  unoptimized
                />
              </a>
            </RegisterChild>
          ))}
        </RegisterGroup>
      </Container>
    </section>
  );
}
