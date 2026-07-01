"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PARAGRAPH =
  "Mais que uma cafeteria, a Coffeetown é um espaço para pausar o dia, encontrar pessoas, abrir o notebook, dividir um brunch ou simplesmente ficar mais um pouco.";

const words = PARAGRAPH.split(" ");

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });

  return (
    <section id="manifesto" className="bg-ink py-28 sm:py-40">
      <div ref={ref} className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel>Nossa proposta</SectionLabel>

        <p className="mt-8 flex flex-wrap font-display text-3xl font-medium leading-[1.28] tracking-tight sm:text-4xl lg:text-[2.9rem] lg:leading-[1.24]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>

        <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-cream/70">
          Café, confeitaria, comida e ambiente se encontram em uma experiência
          pensada para qualquer hora do dia.
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // Palavras acendem do café apagado ao creme conforme a seção entra.
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] text-cream">
      {children}
    </motion.span>
  );
}
