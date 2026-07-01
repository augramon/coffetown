"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_ITEMS, CTAS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EASE_EDITORIAL } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-cream/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:py-5">
        {/* Wordmark */}
        <a href="#top" className="flex flex-col leading-none text-cream">
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Coffeetown
          </span>
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.42em] text-copper">
            Salvador
          </span>
        </a>

        {/* Nav desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-cream/75 transition-colors hover:text-cream"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + toggle mobile */}
        <div className="flex items-center gap-3">
          <a
            href={CTAS.menu.href}
            className="hidden rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream sm:inline-flex"
          >
            {CTAS.menu.label}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Navegação mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
            className="fixed inset-0 top-0 z-40 flex h-dvh flex-col bg-ink/98 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_EDITORIAL,
                    delay: 0.06 * i + 0.1,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream/10 py-4 font-display text-3xl font-medium text-cream"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href={CTAS.menu.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-copper px-6 py-4 text-center text-base font-medium text-ink"
              >
                {CTAS.menu.label}
              </a>
              <a
                href={CTAS.route.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-cream/25 px-6 py-4 text-center text-base font-medium text-cream"
              >
                {CTAS.route.label}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
