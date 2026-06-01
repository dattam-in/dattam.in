import { cn } from "@dattam/ui/cn";

/** Full-bleed engineering grid that fades toward the edges. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid mask-radial-faded opacity-70",
        className,
      )}
    />
  );
}

/**
 * Deprecated under "The Datum Grid" identity — depth now comes from hairlines,
 * whitespace, and oversized type, not glow. Kept as a no-op so existing imports
 * don't break; renders nothing.
 */
export function GlowOrb(_props: { className?: string; color?: string }) {
  void _props;
  return null;
}

/** Subtle film grain overlay. */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.025] mix-blend-soft-light"
    />
  );
}

/** Thin gradient hairline divider. */
export function Hairline({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-linear-to-r from-transparent via-border-strong to-transparent",
        className,
      )}
    />
  );
}
