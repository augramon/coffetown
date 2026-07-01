import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Classe de proporção Tailwind, ex.: "aspect-[4/5]". */
  aspect?: string;
  /** Legenda opcional sobreposta. */
  caption?: string;
};

/** Painel de imagem editorial — cantos arredondados, hover suave, legenda. */
export function ImagePanel({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 90vw",
  priority = false,
  aspect = "aspect-[4/5]",
  caption,
}: ImagePanelProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-graphite",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      {caption ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <figcaption className="absolute bottom-0 left-0 p-6 text-sm font-medium tracking-wide text-cream/90">
            {caption}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
