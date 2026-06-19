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
        {/* Dark-navy logo for light backgrounds */}
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={120}
          height={120}
          className="h-28 w-auto dark:hidden"
          unoptimized
        />
        {/* Light-blue tinted variant for dark backgrounds */}
        <Image
          src="/logo-dark.png"
          alt={siteConfig.name}
          width={120}
          height={120}
          className="hidden h-28 w-auto dark:block"
          unoptimized
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* Brand-blue mark for light backgrounds */}
      <Image
        src="/logo-mark.png"
        alt={siteConfig.name}
        width={324}
        height={219}
        className="block h-6 w-auto dark:hidden"
        unoptimized
      />
      {/* Light-blue tinted mark for dark backgrounds */}
      <Image
        src="/logo-mark-dark.png"
        alt={siteConfig.name}
        width={324}
        height={219}
        className="hidden h-6 w-auto dark:block"
        unoptimized
      />
      <span className="text-base font-semibold pt-1 text-foreground">
        Dattam LABS
      </span>
    </span>
  );
}
