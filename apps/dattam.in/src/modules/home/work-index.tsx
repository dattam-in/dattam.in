import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RuleDraw } from "@/components/motion/rule-draw";
import { RegisterGroup, RegisterChild } from "@/components/motion/register-in";

const rows = [
  { slug: "assetly", name: "Assetly", year: "2026", tag: "SaaS", x: "x:01" },
  { slug: "cr-atlas", name: "CRAVIS.AI", year: "2026", tag: "AI · Data", x: "x:02" },
  { slug: "eras", name: "ERAS", year: "2026", tag: "Gov", x: "x:03" },
];

export function WorkIndex() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <span className="mono-coord">Selected work</span>
        <span className="mono-coord">03</span>
      </div>
      <RuleDraw className="mt-3" />

      <RegisterGroup className="mt-1">
        {rows.map((r) => (
          <RegisterChild key={r.slug}>
            <Link
              href={`/projects/${r.slug}`}
              className="group block border-b border-rule py-4 transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <span className="mono-coord text-faint transition-colors group-hover:text-accent">
                  {r.x}
                </span>
                <span className="text-lg font-medium text-foreground">
                  {r.name}
                </span>
                <ArrowUpRight className="ml-auto size-4 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
              <div className="mono-coord mt-1.5 flex gap-2.5">
                <span>{r.year}</span>
                <span className="text-rule-strong">/</span>
                <span>{r.tag}</span>
              </div>
            </Link>
          </RegisterChild>
        ))}
      </RegisterGroup>
    </div>
  );
}
