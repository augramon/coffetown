import {
  units,
  socialProofStats,
  reviews,
  goodForTags,
  type Review,
} from "@/lib/coffee-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function SocialProofSection() {
  return (
    <section className="grain relative overflow-hidden bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Topo: nota das duas unidades */}
        <div className="flex flex-col items-center text-center">
          <MotionReveal>
            <SectionLabel className="justify-center">
              Quem senta, volta
            </SectionLabel>
          </MotionReveal>

          <MotionReveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
              {units.map((unit) => (
                <div
                  key={unit.id}
                  className="flex items-end gap-4 rounded-3xl border border-cream/10 bg-ink/40 px-8 py-6"
                >
                  <span className="font-display text-6xl font-medium leading-none text-cream sm:text-7xl">
                    {unit.rating}
                  </span>
                  <div className="mb-1.5 flex flex-col items-start gap-1 text-left">
                    <Stars decorative />
                    <span className="text-sm font-medium text-copper">
                      {unit.name}
                    </span>
                    <span className="text-xs text-cream/55">
                      {unit.reviewsCount} avaliações
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>

        {/* Avaliações reais */}
        <MotionReveal>
          <p className="mt-20 text-center font-display text-2xl font-medium italic text-cream/85 sm:text-3xl">
            O que dizem quem já sentou com a gente.
          </p>
        </MotionReveal>
      </div>

      {/* Marquee infinito das avaliações (full-bleed, pausa no hover) */}
      <div className="marquee mt-12 py-2">
        <ul className="marquee-track">
          {[...reviews, ...reviews].map((review, i) => (
            <li
              key={i}
              className="mr-5 w-[300px] shrink-0 sm:w-[340px]"
              aria-hidden={i >= reviews.length}
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Métricas + tags */}
        <div className="mt-16 flex flex-col gap-10 border-t border-cream/10 pt-12 lg:flex-row lg:items-center lg:justify-between">
          <MotionReveal>
            <dl className="flex flex-wrap gap-x-12 gap-y-6">
              {socialProofStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-medium text-copper">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-cream/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ul className="flex flex-wrap gap-2.5">
              {goodForTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-cream/[0.06] px-4 py-2 text-sm text-cream/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-cream/10 bg-ink/40 p-7">
      <Stars size={15} rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-base font-light leading-relaxed text-cream/85">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-cream/10 pt-5">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper/15 font-display text-sm font-medium text-copper"
        >
          {initials(review.author)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-cream">{review.author}</span>
          <span className="text-xs text-cream/45">{review.date}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Stars({
  size = 16,
  rating = 5,
  decorative = false,
}: {
  size?: number;
  rating?: number;
  decorative?: boolean;
}) {
  return (
    <div
      className="flex gap-0.5"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": `${rating} de 5 estrelas` })}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#BE5719"
          aria-hidden
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}
