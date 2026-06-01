"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@dattam/ui/cn";

/**
 * Counts a numeric value up while a tick lands on the axis. Preserves any
 * prefix/suffix (e.g. "<", "%", "ms", "k+"). Non-numeric values render as-is.
 */
export function IndexCount({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const match = String(value).match(/^(\D*)(\d*\.?\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]!) : NaN;
  const suffix = match?.[3] ?? "";
  const decimals = match && match[2]!.includes(".") ? 1 : 0;

  const [display, setDisplay] = useState(reduce || isNaN(target) ? target : 0);

  useEffect(() => {
    if (!inView || isNaN(target) || reduce) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  if (isNaN(target)) {
    return (
      <span ref={ref} className={cn("tabular-nums", className)}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
