"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

/**
 * Signature interaction: a live coordinate readout on the hero plane. Two
 * spring-tracked guide rules follow the pointer; a mono readout shows the
 * normalized x/y. Purely decorative (aria-hidden), additive, and fully removed
 * under reduced-motion or on touch (no pointer → never activates).
 */
export function HeroCoordinate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 40 });
  const sy = useSpring(my, { stiffness: 300, damping: 40 });
  const [active, setActive] = useState(false);
  const [coord, setCoord] = useState("x:0.00 y:0.00");

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set(x);
    my.set(y);
    setCoord(`x:${(x / r.width).toFixed(2)} y:${(y / r.height).toFixed(2)}`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      onMouseEnter={() => !reduce && setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative"
    >
      {children}

      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{ opacity: active ? 1 : 0 }}
        >
          <motion.div
            style={{ x: sx }}
            className="absolute inset-y-0 left-0 w-px bg-rule-strong"
          />
          <motion.div
            style={{ y: sy }}
            className="absolute inset-x-0 top-0 h-px bg-rule-strong"
          />
          <motion.span
            style={{ x: sx, y: sy }}
            className="mono-coord absolute left-0 top-0 ml-2 mt-2 text-foreground"
          >
            {coord}
          </motion.span>
        </div>
      )}
    </div>
  );
}
