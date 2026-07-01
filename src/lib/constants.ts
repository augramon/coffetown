import { coffeetown, units } from "@/lib/coffee-data";

/** URL canônica do site (ajuste ao publicar). */
export const SITE_URL = "https://coffeetownsalvador.com.br";

/** Navegação principal — âncoras da one-page. */
export const NAV_ITEMS = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Menu", href: "#menu" },
  { label: "Brunch", href: "#brunch" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Unidades", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

/** Ações de conversão reutilizadas em botões/seções. */
export const CTAS = {
  menu: { label: "Ver cardápio", href: coffeetown.menuUrl },
  delivery: { label: "Pedir delivery", href: coffeetown.deliveryUrl },
  pickup: { label: "Pedir retirada", href: coffeetown.pickupUrl },
  // Com duas unidades, "como chegar" leva à seção de unidades para escolher.
  route: { label: "Ver unidades", href: "#localizacao" },
  call: { label: "Ligar agora", href: units[0].phoneHref },
  instagram: { label: "Abrir Instagram", href: coffeetown.instagramUrl },
} as const;
