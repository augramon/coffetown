import { experiencePoints, siteImages } from "@/lib/coffee-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ImagePanel } from "@/components/ui/ImagePanel";

const blockImages = [
  siteImages.allDay.morning,
  siteImages.allDay.brunch,
  siteImages.allDay.cocktails,
];

export function AllDayDiningSection() {
  return (
    <section id="experiencia" className="bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <MotionReveal>
              <SectionLabel>All day dining</SectionLabel>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
                Um bistrô urbano
                <br />
                para qualquer hora.
              </h2>
            </MotionReveal>
          </div>
          <MotionReveal delay={0.1}>
            <p className="text-lg font-light leading-relaxed text-cream/70">
              Do primeiro café do dia ao último drink antes de ir embora, a
              Coffeetown foi pensada para acompanhar diferentes ritmos: trabalho,
              pausa, encontro, celebração e fome boa.
            </p>
          </MotionReveal>
        </div>

        {/* Três blocos */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {experiencePoints.map((point, i) => (
            <MotionReveal
              key={point.title}
              delay={i * 0.08}
              y={28}
              // Âncora "Brunch" do menu → bloco central.
            >
              <article
                id={i === 1 ? "brunch" : undefined}
                className="flex h-full flex-col"
              >
                <ImagePanel
                  src={blockImages[i]}
                  alt={point.title}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 768px) 33vw, 90vw"
                />
                <div className="mt-5">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-copper">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-cream">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base font-light leading-relaxed text-cream/65">
                    {point.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
