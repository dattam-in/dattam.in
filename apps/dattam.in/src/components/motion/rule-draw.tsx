"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@dattam/ui/cn";

const ease = [0.16, 1, 0.3, 1] as const;

/** A hairline rule that draws itself in from its origin. */
export function RuleDraw({
  orientation = "horizontal",
  className,
  delay = 0,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const horizontal = orientation === "horizontal";
  return (
    <motion.div
      aria-hidden
      className={cn(horizontal ? "h-px w-full" : "w-px", "bg-rule", className)}
      style={{ transformOrigin: horizontal ? "left center" : "center top" }}
      initial={reduce ? { opacity: 0 } : { scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0 }}
      whileInView={reduce ? { opacity: 1 } : { scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    />
  );
}

/** Oversized type revealed line-by-line behind clip masks. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.1,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay },
        },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden pb-[0.08em]", className)}>
          <motion.span
            className={cn("block", lineClassName)}
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "110%" },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.85, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
