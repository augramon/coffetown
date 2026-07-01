import Image from "next/image";
import { coffeetown, siteImages } from "@/lib/coffee-data";
import { CTAS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function InstagramSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <MotionReveal>
              <SectionLabel>No Instagram</SectionLabel>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
                Um pouco da casa,
                <br />
                todo dia.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <p className="mt-5 text-lg font-light leading-relaxed text-cream/70">
                Acompanhe novidades, pratos, cafés do dia e momentos da casa pelo
                Instagram.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.1}>
            <a
              href={CTAS.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-copper px-7 py-3.5 text-base font-medium text-ink transition-colors duration-300 hover:bg-cream"
            >
              <InstagramIcon />
              {coffeetown.instagram}
            </a>
          </MotionReveal>
        </div>

        {/* Galeria mockada */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {siteImages.instagram.map((src, i) => (
            <MotionReveal key={src} delay={(i % 6) * 0.05} y={22}>
              <a
                href={CTAS.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${coffeetown.instagram} no Instagram`}
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-graphite"
              >
                <Image
                  src={src}
                  alt="Publicação da Coffeetown no Instagram"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
              </a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
