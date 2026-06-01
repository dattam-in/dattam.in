import { Container } from "@/components/layout/container";
import { RuleDraw, MaskLines } from "@/components/motion/rule-draw";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";

const principles = [
  { id: "P-01", t: "We make the structure visible.", d: "Every system we ship can be read, reasoned about, and extended without fear." },
  { id: "P-02", t: "We measure before we build.", d: "Constraints, success metrics, and data models come before the first line of code." },
  { id: "P-03", t: "One team owns the whole stack.", d: "Frontend, backend, data, and infrastructure answer to a single accountable group." },
  { id: "P-04", t: "We ship in tight, reviewed loops.", d: "Small, registered increments over big-bang releases." },
  { id: "P-05", t: "If it runs in production, it is observed.", d: "We design for visibility and reliability from day one." },
  { id: "P-06", t: "Performance is a feature.", d: "Speed under real load is part of the product, never an afterthought." },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-36 sm:py-44">
      <Container>
        <div className="relative pt-4">
          <RuleDraw />
          <span className="mono-coord absolute -top-1 left-0 flex gap-2 bg-background pr-4">
            <span className="text-accent">§04</span>
            <span>Philosophy</span>
          </span>
        </div>

        <blockquote className="mt-16 max-w-4xl text-balance text-[length:var(--text-headline)] font-semibold leading-[1.06] tracking-[-0.02em] text-foreground">
          <MaskLines
            lines={[
              "Clarity is not a style.",
              <span key="2" className="text-muted">
                It is the result of structure made visible.
              </span>,
            ]}
          />
        </blockquote>

        <RegisterGroup className="mt-24 grid gap-x-12 sm:grid-cols-2">
          {principles.map((p) => (
            <RegisterChild key={p.id}>
              <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-rule py-7">
                <span className="mono-coord text-accent">{p.id}</span>
                <div>
                  <h3 className="font-medium text-foreground">{p.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.d}
                  </p>
                </div>
              </div>
            </RegisterChild>
          ))}
        </RegisterGroup>
      </Container>
    </section>
  );
}
