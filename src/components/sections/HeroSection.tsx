"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { coffeetown, units } from "@/lib/coffee-data";
import { CTAS } from "@/lib/constants";
import { EASE_EDITORIAL, staggerContainer, revealUp } from "@/lib/motion";
import { StatBadge } from "@/components/ui/StatBadge";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax leve — a imagem sobe devagar enquanto o conteúdo rola.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh items-end overflow-hidden"
    >
      {/* Fundo com parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-20 scale-110">
        <Image
          src={HERO_IMAGE}
          alt="Balcão da Coffeetown com café coado, xícara com crema e madeira em luz quente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradientes para legibilidade e atmosfera */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30"
      />
      <div className="absolute inset-0 -z-10 bg-ink/25" />

      {/* Conteúdo */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:pb-28"
      >
        <motion.p
          variants={revealUp}
          className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-copper"
        >
          Vitória &amp; Pituba · {coffeetown.city}
        </motion.p>

        <motion.h1
          variants={revealUp}
          className="max-w-4xl font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Café, brunch e{" "}
          <span className="italic text-latte">momentos sem pressa</span> em
          Salvador.
        </motion.h1>

        <motion.p
          variants={revealUp}
          className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/80"
        >
          Um bistrô caloroso, para o dia todo, em Salvador — café, bolo, brunch,
          cocktails e conversas que ficam um pouco mais.
        </motion.p>

        {/* Badges */}
        <motion.div
          variants={revealUp}
          className="mt-9 flex flex-wrap items-center gap-2.5"
        >
          <StatBadge>
            <PinIcon />
            Duas unidades em Salvador
          </StatBadge>
          {units.map((u) => (
            <StatBadge key={u.id}>
              <StarIcon />
              <span className="font-medium text-cream">{u.rating}</span>
              <span className="text-cream/60">· {u.name}</span>
            </StatBadge>
          ))}
          <StatBadge>
            <ClockIcon />
            Aberto até 21h30
          </StatBadge>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={revealUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={CTAS.menu.href}
            className="inline-flex items-center justify-center rounded-full bg-copper px-8 py-4 text-base font-medium text-ink transition-colors duration-300 hover:bg-cream"
          >
            {CTAS.menu.label}
          </a>
          <a
            href={CTAS.route.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-base font-medium text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/5"
          >
            {CTAS.route.label}
            <ArrowIcon />
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: EASE_EDITORIAL }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <span className="h-2 w-px animate-pulse bg-cream/60" />
        </span>
      </motion.div>
    </section>
  );
}

/* --- ícones inline (sem lib, sem emoji) --- */
function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#BE5719" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function ArrowIcon() {
  return (
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
  );
}
