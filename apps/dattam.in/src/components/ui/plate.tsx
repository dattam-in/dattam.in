import * as React from "react";
import { cn } from "@dattam/ui/cn";

/**
 * A "registered plate" — the Datum Grid surface. Sharp drafting radius, hairline
 * rule border, corner registration crosses, an optional mono index. Hover
 * selects (border + index brighten) rather than lifts or glows.
 */
export function Plate({
  index,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { index?: string }) {
  return (
    <div
      className={cn(
        "group reg-mark relative rounded-[var(--radius-plate)] border border-rule bg-surface/30 transition-colors duration-300 hover:border-rule-strong",
        className,
      )}
      {...props}
    >
      {index && (
        <span className="mono-coord absolute left-4 top-4 transition-colors duration-300 group-hover:text-accent">
          {index}
        </span>
      )}
      {children}
    </div>
  );
}
