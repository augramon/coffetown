import type { Variants, Transition } from "motion/react";

/**
 * Motion tokens — movimento discreto e "artesanal".
 * Curva editorial (ease-out suave) reutilizada em toda a experiência.
 */
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const transitionSoft: Transition = {
  duration: 0.8,
  ease: EASE_EDITORIAL,
};

/** Reveal padrão: sobe alguns pixels e revela opacidade. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSoft,
  },
};

/** Apenas opacidade — para elementos que não devem deslocar. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: EASE_EDITORIAL } },
};

/** Container que escalona a entrada dos filhos. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Viewport compartilhado: dispara uma vez, um pouco antes de entrar. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
