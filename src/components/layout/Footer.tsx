import { coffeetown, units, type Unit } from "@/lib/coffee-data";
import { CTAS } from "@/lib/constants";

const footerLinks = [
  { label: "Menu", href: CTAS.menu.href, external: false },
  { label: "Delivery", href: CTAS.delivery.href, external: false },
  { label: "Unidades", href: "#localizacao", external: false },
  { label: "Instagram", href: CTAS.instagram.href, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_0.9fr]">
          {/* Marca */}
          <div>
            <div className="flex flex-col leading-none text-cream">
              <span className="font-display text-3xl font-semibold tracking-tight">
                Coffeetown
              </span>
              <span className="mt-1.5 text-xs font-medium uppercase tracking-[0.5em] text-copper">
                Salvador
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/60">
              Café, brunch, confeitaria e drinks em dois bistrôs acolhedores em
              Salvador. Para cafés rápidos, brunchs longos e conversas sem pressa.
            </p>
            <a
              href={coffeetown.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-cream/80 transition-colors hover:text-copper"
            >
              {coffeetown.instagram}
            </a>
          </div>

          {/* Unidades */}
          {units.map((unit) => (
            <UnitBlock key={unit.id} unit={unit} />
          ))}

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-cream/40">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="transition-colors hover:text-copper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {coffeetown.name} · Vitória &amp; Pituba.
          </p>
          <p className="max-w-xl leading-relaxed sm:text-right">
            Informações de horário, cardápio e disponibilidade podem mudar.
            Consulte os canais oficiais antes de visitar ou fazer pedido.
          </p>
        </div>
      </div>
    </footer>
  );
}

function UnitBlock({ unit }: { unit: Unit }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-cream/40">
        {unit.name}
      </h3>
      <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-cream/70">
        <p>{unit.address}</p>
        <p>
          <a
            href={unit.phoneHref}
            className="transition-colors hover:text-copper"
          >
            {unit.phone}
          </a>
        </p>
        <p className="text-cream/50">Todos os dias · até 21h30</p>
      </address>
    </div>
  );
}
