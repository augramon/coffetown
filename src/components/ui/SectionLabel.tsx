import { cn } from "@/lib/utils";

/** Etiqueta editorial de seção — pequena, espaçada, com traço em cobre. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-sand",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-copper" />
      {children}
    </span>
  );
}
