import { cn } from "@dattam/ui/cn";
import { RuleDraw, MaskLines } from "@/components/motion/rule-draw";

interface SectionHeadingProps {
  /** Section coordinate, e.g. "§01". */
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

/**
 * Left-aligned, registered section header: a drawing-style register rule with a
 * coordinate label, then an asymmetric title / description split.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative pt-4">
        <RuleDraw />
        {(index || eyebrow) && (
          <span className="mono-coord absolute -top-1 left-0 flex items-center gap-2 bg-background pr-4">
            {index && <span className="text-accent">{index}</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </span>
        )}
      </div>

      <div className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2 className="text-balance text-[length:var(--text-headline)] font-semibold leading-[1.02] tracking-[-0.02em] text-foreground lg:col-span-8">
          <MaskLines lines={[title]} />
        </h2>
        {description && (
          <p className="max-w-[42ch] self-end text-pretty leading-relaxed text-muted-foreground lg:col-span-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
