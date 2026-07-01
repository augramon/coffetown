import { units } from "@/lib/coffee-data";
import { CTAS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function OrdersSection() {
  return (
    <section id="contato" className="bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <MotionReveal>
            <SectionLabel>Pedidos & atendimento</SectionLabel>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
              Também para levar.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="mt-5 text-lg font-light leading-relaxed text-cream/70">
              Prefere em casa ou pra buscar no balcão? A Coffeetown atende dos dois
              jeitos — é só escolher.
            </p>
          </MotionReveal>
        </div>

        {/* Dois cards de ação */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <MotionReveal y={26}>
            <OrderCard
              step="Retirada"
              title="Peça e busque no balcão"
              description="Faça o pedido e retire quentinho, sem espera."
              cta={CTAS.pickup}
            />
          </MotionReveal>
          <MotionReveal delay={0.08} y={26}>
            <OrderCard
              step="Delivery"
              title="Receba onde você estiver"
              description="Delivery até 21h15 na Vitória e entrega sem contato na Pituba."
              cta={CTAS.delivery}
            />
          </MotionReveal>
        </div>

        {/* Barra de contato — uma por unidade */}
        <MotionReveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="flex items-center justify-between gap-4 rounded-3xl border border-cream/10 bg-ink/40 p-6 sm:p-7"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
                    {unit.name}
                  </p>
                  <a
                    href={unit.phoneHref}
                    className="font-display text-xl font-medium text-cream transition-colors hover:text-copper sm:text-2xl"
                  >
                    {unit.phone}
                  </a>
                </div>
                <a
                  href={unit.phoneHref}
                  aria-label={`Ligar para a unidade ${unit.name}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream"
                >
                  Ligar
                </a>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function OrderCard({
  step,
  title,
  description,
  cta,
}: {
  step: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-cream/10 bg-ink/40 p-8">
      <span className="text-xs font-medium uppercase tracking-[0.24em] text-copper">
        {step}
      </span>
      <h3 className="mt-3 font-display text-2xl font-medium text-cream">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-base font-light leading-relaxed text-cream/65">
        {description}
      </p>
      <a
        href={cta.href}
        className="group mt-6 inline-flex items-center gap-2 text-base font-medium text-cream"
      >
        {cta.label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="text-copper transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
