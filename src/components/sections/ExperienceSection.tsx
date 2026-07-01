import { siteImages } from "@/lib/coffee-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ImagePanel } from "@/components/ui/ImagePanel";

const amenities = [
  "Wi-Fi rápido",
  "Ambiente confortável",
  "Atendimento rápido",
  "Espaço para trabalhar",
];

export function ExperienceSection() {
  return (
    <section id="ambiente" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Collage de imagens */}
        <MotionReveal className="order-2 lg:order-1">
          <div className="relative grid grid-cols-5 grid-rows-6 gap-4">
            <div className="col-span-3 row-span-6">
              <ImagePanel
                src={siteImages.ambiancePrimary}
                alt="Salão da Coffeetown com mesas de madeira, luz natural e clima acolhedor"
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 30vw, 55vw"
              />
            </div>
            <div className="col-span-2 col-start-4 row-span-3 row-start-2">
              <ImagePanel
                src={siteImages.ambianceSecondary}
                alt="Mesa com café e notebook em um canto tranquilo da casa"
                aspect="aspect-square"
                sizes="(min-width: 1024px) 20vw, 40vw"
              />
            </div>
            <div className="col-span-2 col-start-4 row-span-2 row-start-5 flex items-center rounded-3xl bg-graphite p-6">
              <p className="font-display text-lg leading-snug text-cream">
                30&nbsp;min a 4&nbsp;h
                <span className="mt-1 block text-sm font-light text-cream/60">
                  o tempo que cada um quiser ficar
                </span>
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <MotionReveal>
            <SectionLabel>O ambiente</SectionLabel>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-tight text-cream sm:text-5xl">
              O tipo de lugar onde
              <br />
              uma pausa vira encontro.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-cream/70">
              Tem quem venha para um café rápido. Tem quem abra o notebook. Tem
              quem sente para um brunch longo. A Coffeetown funciona porque
              acompanha o tempo de cada pessoa.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {amenities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
