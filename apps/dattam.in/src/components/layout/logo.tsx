import { siteConfig } from "@/lib/site";
import { cn } from "@dattam/ui/cn";
import Image from "next/image";

export function Logo({
  className,
  variant = "mark",
}: {
  className?: string;
  /** mark = icon only (header), full = full logo with text (footer) */
  variant?: "mark" | "full";
}) {
  if (variant === "full") {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={120}
          height={120}
          className="h-28 w-auto"
          unoptimized
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/logo-mark.png"
        alt={siteConfig.name}
        width={324}
        height={219}
        className="block h-6 w-auto"
        unoptimized
      />
      <span className="text-base font-semibold pt-1 text-foreground">
        Dattam LABS
      </span>
    </span>
  );
}
