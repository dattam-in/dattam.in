import { cn } from "@dattam/ui/cn";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Plate } from "@/components/ui/plate";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="§01"
          eyebrow="Capabilities"
          title="Engineering partners across your product"
          description="From a first prototype to a platform at scale, we bring the design and engineering to build it well, plus the discipline to keep it running."
        />

        <RegisterGroup className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const lead = i === 0;
            return (
              <RegisterChild
                key={service.title}
                className={cn(lead && "sm:col-span-2 lg:col-span-2")}
              >
                <Plate
                  index={`S-${String(i + 1).padStart(2, "0")}`}
                  className="flex h-full flex-col p-6 pt-12"
                >
                  <span className="absolute right-4 top-4 inline-flex size-8 items-center justify-center border border-rule">
                    <Icon className="size-4 text-accent" />
                  </span>
                  <h3
                    className={cn(
                      "mt-2 font-semibold text-foreground",
                      lead ? "text-2xl" : "text-lg",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed text-muted-foreground",
                      lead && "max-w-md",
                    )}
                  >
                    {service.description}
                  </p>
                </Plate>
              </RegisterChild>
            );
          })}
        </RegisterGroup>
      </Container>
    </section>
  );
}
