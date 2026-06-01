import Image from "next/image";
import { cn } from "@dattam/ui/cn";

/**
 * A registered product frame — real screenshot dimensioned like a plate:
 * hairline border, corner registration marks, a mono coordinate caption.
 * No browser chrome, no glow.
 */
export function ProjectShot({
  src,
  siteUrl,
  caption,
  priority = false,
  className,
}: {
  src: string;
  siteUrl: string;
  /** mono caption shown bottom-right, e.g. "01 — ASSETLY". Defaults to siteUrl. */
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "reg-mark relative rounded-[var(--radius-plate)] border border-rule bg-surface/30 p-2",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-white">
        <Image
          src={src}
          alt={`${siteUrl} — product screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="mono-coord mt-2 flex items-center justify-between px-1">
        <span>{siteUrl}</span>
        <span className="text-faint">{caption ?? "SCREEN 01"}</span>
      </figcaption>
    </figure>
  );
}
