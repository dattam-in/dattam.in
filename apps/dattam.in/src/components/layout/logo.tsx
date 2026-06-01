import { cn } from "@dattam/ui/cn";
import { siteConfig } from "@/lib/site";

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-8"
          aria-hidden
        >
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="9"
            stroke="url(#dg)"
            strokeWidth="1.5"
          />
          <path
            d="M10 9h6.5c4 0 7 3 7 7s-3 7-7 7H10V9Z"
            stroke="url(#dg)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="2.4" fill="var(--color-accent)" />
          <defs>
            <linearGradient id="dg" x1="2" y1="2" x2="30" y2="30">
              <stop stopColor="var(--color-accent)" />
              <stop offset="1" stopColor="var(--color-cyan)" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
