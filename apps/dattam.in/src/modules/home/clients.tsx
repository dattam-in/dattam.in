import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { RegisterChild, RegisterGroup } from "@/components/motion/register-in";
import { clients } from "@/lib/data";
import Image from "next/image";

export function Clients() {
  return (
    <section id="clients" className="relative pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Container>
        <SectionHeading
          index="§04"
          eyebrow="Trusted by"
          title="Teams that ship with us"
          description="From research institutions to fast-moving startups — the people we've built production systems for."
        />

        <RegisterGroup className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {clients.map((client) => (
            <RegisterChild key={client.name}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="group flex h-24 items-center justify-center rounded-plate bg-white px-6 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-neutral-800 dark:ring-white/30"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={140}
                  height={40}
                  className="h-12 w-auto max-w-32 object-contain transition duration-300 group-hover:scale-105 "
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
