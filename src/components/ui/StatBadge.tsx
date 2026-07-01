import { cn } from "@/lib/utils";

/** Selo compacto usado no hero (avaliação, reviews, localização, horário). */
export function StatBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-2 text-sm text-cream/85 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
