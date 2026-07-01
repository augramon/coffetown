import { units, type Unit } from "@/lib/coffee-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <MotionReveal>
            <SectionLabel>Nossas unidades</SectionLabel>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Duas casas em Salvador.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-cream/70">
              A origem na Vitória e a nova casa na Pituba — mesma cozinha, mesmo
              cuidado, dois bairros para escolher.
            </p>
          </MotionReveal>
        </div>

        {/* Cards das unidades */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {units.map((unit, i) => (
            <MotionReveal key={unit.id} delay={i * 0.08} y={28}>
              <UnitCard unit={unit} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnitCard({ unit }: { unit: Unit }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-graphite">
      {/* Mapa */}
      <div className="border-b border-cream/10">
        <iframe
          src={unit.mapEmbed}
          title={`Mapa da Coffeetown Salvador — ${unit.name} (${unit.address})`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[16/9] w-full grayscale-[0.2] contrast-[1.05]"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-medium text-cream">
              {unit.name}
            </h3>
            <p className="mt-1 text-sm text-cream/60">{unit.tagline}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-copper/40 px-3 py-1.5 text-sm font-medium text-cream">
            <StarIcon />
            {unit.rating}
            <span className="text-cream/50">({unit.reviewsCount})</span>
          </span>
        </div>

        {/* Endereço + info */}
        <div className="mt-6 space-y-1 text-cream/80">
          <p className="text-base font-light leading-relaxed">{unit.address}</p>
          {unit.addressDetail ? (
            <p className="text-sm text-cream/55">{unit.addressDetail}</p>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cream/60">
          <span>{unit.hours}</span>
          {unit.priceRange ? (
            <>
              <span className="text-caramel">·</span>
              <span>{unit.priceRange}</span>
            </>
          ) : null}
        </div>

        {/* Serviços */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {unit.services.map((s) => (
            <li
              key={s}
              className="rounded-full bg-cream/[0.06] px-3 py-1.5 text-xs text-cream/75"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Selos especiais */}
        {unit.badges ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {unit.badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-copper/30 px-3 py-1.5 text-xs font-medium text-copper"
              >
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Ações */}
        <div className="mt-7 flex flex-col gap-3 pt-1 sm:flex-row">
          <a
            href={unit.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream"
          >
            Como chegar
          </a>
          <a
            href={unit.phoneHref}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/5"
          >
            Ligar · {unit.phone}
          </a>
        </div>
      </div>
    </article>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#BE5719" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />
    </svg>
  );
}
