"use client";

import { motion } from "motion/react";
import { EASE_EDITORIAL, viewportOnce } from "@/lib/motion";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Atraso em segundos para escalonar entradas. */
  delay?: number;
  /** Deslocamento vertical inicial (px). 0 = apenas fade. */
  y?: number;
  as?: "div" | "li" | "span";
};

/**
 * Reveal on-scroll discreto. Dispara uma vez e respeita reduced-motion via CSS
 * global (as transições ficam ~instantâneas nesse modo).
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: MotionRevealProps) {
  const initial = { opacity: 0, y };
  const whileInView = { opacity: 1, y: 0 };
  const transition = { duration: 0.8, ease: EASE_EDITORIAL, delay };

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial={initial}
        whileInView={whileInView}
        viewport={viewportOnce}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  if (as === "span") {
    return (
      <motion.span
        className={className}
        initial={initial}
        whileInView={whileInView}
        viewport={viewportOnce}
        transition={transition}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewportOnce}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
