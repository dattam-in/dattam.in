import * as React from "react";
import { cn } from "@dattam/ui/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  dot?: boolean;
}

export function Badge({ className, dot = false, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur",
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
