import { cn } from "@/lib/utils";

/** Divisória editorial com um grão de café ao centro. */
export function LuxuryDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl items-center gap-5 px-5 sm:px-8",
        className,
      )}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cream/15" />
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-copper">
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 4c-2 3-2 13 0 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cream/15" />
    </div>
  );
}
