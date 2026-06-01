import { Container } from "@/components/layout/container";
import { RuleDraw } from "@/components/motion/rule-draw";
import { IndexCount } from "@/components/motion/index-count";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative py-20">
      <Container>
        <div className="flex items-center justify-between">
          <span className="mono-coord">Track record</span>
          <span className="mono-coord">2021 — 2026</span>
        </div>
        <RuleDraw className="mt-3" />

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border-r border-rule px-1 py-7 last:border-r-0"
            >
              {/* axis tick */}
              <span className="absolute left-0 top-0 h-2.5 w-px bg-rule-strong" />
              <div className="text-gradient-accent font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
                <IndexCount value={stat.value} />
              </div>
              <div className="mono-coord mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
