import { cn } from "@dattam/ui/cn";

/**
 * The core motif: a 1px hairline rule with an origin cross-tick and an optional
 * factual coordinate label. Horizontal = baseline rule under a heading;
 * vertical = a section rail.
 */
export function DatumRule({
  orientation = "horizontal",
  label,
  className,
}: {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
}) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden
        className={cn("relative w-px self-stretch bg-rule", className)}
      >
        {/* origin tick */}
        <span className="absolute -left-[5px] top-0 h-px w-[11px] bg-rule-strong" />
        {label && (
          <span
            className="mono-coord absolute left-3 top-0 origin-top-left rotate-90 whitespace-nowrap"
            style={{ transformOrigin: "left top" }}
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div aria-hidden className={cn("relative h-px w-full bg-rule", className)}>
      {/* origin tick */}
      <span className="absolute left-0 -top-[5px] h-[11px] w-px bg-rule-strong" />
      {label && (
        <span className="mono-coord absolute left-3 -top-2 bg-background pr-2">
          {label}
        </span>
      )}
    </div>
  );
}
