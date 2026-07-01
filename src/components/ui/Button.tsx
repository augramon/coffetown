import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Abre em nova aba (links externos). */
  external?: boolean;
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-copper text-ink hover:bg-cream hover:text-ink border border-copper hover:border-cream",
  secondary:
    "border border-cream/25 text-cream hover:border-cream hover:bg-cream/5",
  ghost: "text-cream/80 hover:text-cream",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * CTA base — renderiza uma âncora para funcionar com #hash, tel: e links
 * externos de forma uniforme.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
