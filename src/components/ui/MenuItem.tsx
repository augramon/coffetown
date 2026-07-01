import Image from "next/image";
import type { MenuItem as MenuItemType } from "@/lib/coffee-data";

/** Card visual de destaque do menu — imagem editorial + nome + descrição. */
export function MenuItem({
  item,
  priority = false,
}: {
  item: MenuItemType;
  priority?: boolean;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl bg-graphite">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-coffee to-graphite" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl font-medium text-cream">
          {item.name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-cream/70">
          {item.description}
        </p>
      </figcaption>
    </figure>
  );
}
