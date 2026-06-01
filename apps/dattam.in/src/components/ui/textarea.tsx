import * as React from "react";
import { cn } from "@dattam/ui/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-32 w-full resize-none rounded-xl border border-border-strong bg-surface/50 px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-faint",
          "focus:border-accent/60 focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
