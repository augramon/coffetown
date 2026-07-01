import { menuHighlights, menuCategories } from "@/lib/coffee-data";
import { CTAS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MenuItem } from "@/components/ui/MenuItem";

export function MenuHighlightsSection() {
  return (
    <section id="menu" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <MotionReveal>
            <SectionLabel>Do balcão</SectionLabel>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Feitos para ficar
              <br />
              na memória.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-cream/70">
              Uma seleção do que sai da nossa cozinha e do nosso balcão. Entre um
              espresso e um brunch, Salvador desacelera um pouco.
            </p>
          </MotionReveal>
        </div>

        {/* Grade de destaques */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuHighlights.map((item, i) => (
            <MotionReveal key={item.name} delay={(i % 4) * 0.06} y={28}>
              <MenuItem item={item} priority={i < 4} />
            </MotionReveal>
          ))}
        </div>

        {/* Listas editoriais por categoria */}
        <div className="mt-20 grid gap-x-14 gap-y-12 border-t border-cream/10 pt-14 sm:grid-cols-2">
          {menuCategories.map((cat) => (
            <MotionReveal key={cat.id}>
              <div>
                <h3 className="font-display text-lg font-medium uppercase tracking-[0.14em] text-copper">
                  {cat.label}
                </h3>
                <ul className="mt-5 space-y-4">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-0.5 border-b border-cream/[0.06] pb-4 last:border-0"
                    >
                      <span className="font-display text-lg text-cream">
                        {item.name}
                      </span>
                      <span className="text-sm leading-snug text-cream/60">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* CTA */}
        <MotionReveal>
          <div className="mt-16 flex justify-center">
            <a
              href={CTAS.menu.href}
              className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-base font-medium text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/5"
            >
              Ver cardápio completo
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
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
