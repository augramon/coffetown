# Coffeetown Salvador — Vitória

Site institucional premium (one-page) da **Coffeetown Salvador**, unidade
Vitória. Café, brunch, confeitaria e drinks — direção visual _Warm Editorial
Bistro_.

Construído com foco em valor percebido alto: tipografia editorial, paleta
contida, motion discreto, mobile desenhado, SEO local e acessibilidade.

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens em `@theme`, dentro de `globals.css`)
- **Motion** (Framer Motion) — animações de scroll/hover
- **Lenis** — smooth scroll (desligado automaticamente com `prefers-reduced-motion`)
- **next/font** — Fraunces (display) + Manrope (corpo)
- **next/og** — imagem Open Graph gerada em build

---

## Como rodar

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento → http://localhost:3000
npm run build    # build de produção
npm run start    # sobe o build de produção
npm run lint     # checagem de lint
```

Requer Node 18.18+ (recomendado Node 20+).

---

## Onde editar o conteúdo

> **Regra de ouro:** quase todo o conteúdo vem de **um único arquivo**.

### `src/lib/coffee-data.ts` — fonte única de verdade

| O que mudar | Onde |
|-------------|------|
| Nome, Instagram, links de pedido (marca) | objeto `coffeetown` |
| **Unidades** (Vitória e Pituba): endereço, telefone, nota, avaliações, horário, preço, serviços, mapa | array `units` |
| Itens de café | `coffeeItems` |
| Itens de brunch | `brunchItems` |
| Bolos e tortas | `cakeItems` |
| Bebidas / happy hour | `otherItems` |
| Destaques com foto (vitrine do menu) | `menuHighlights` |
| Blocos do "All Day Dining" | `experiencePoints` |
| Métricas de prova social | `socialProofStats` |
| Frases das avaliações | `reviewHighlights` |
| Tags "bom para" | `goodForTags` |
| **Imagens** (hero, ambiente, galeria) | `siteImages` |

### `src/lib/constants.ts`

- `SITE_URL` — troque pela URL final ao publicar (usada em SEO/canonical/OG).
- `NAV_ITEMS` — itens do menu de navegação.
- `CTAS` — rótulos e destinos dos botões de ação (menu, delivery, retirada,
  rota, ligar, Instagram).

> Os links de **delivery/retirada/menu** estão como âncoras/placeholders
> (`#pedidos`, `#menu`). Troque em `coffeetown` (`deliveryUrl`, `pickupUrl`,
> `menuUrl`) pelos links oficiais quando confirmados.

---

## Imagens

As fotos atuais são **placeholders premium** (Unsplash), com direção visual
coerente (tons quentes, café, madeira, creme). Todas centralizadas em
`siteImages` e nos arrays de menu (`image`).

Para usar fotos reais:

1. Coloque os arquivos em `public/images/…`.
2. Troque as URLs em `src/lib/coffee-data.ts` por caminhos locais
   (ex.: `/images/coffeetown-cake.jpg`).
3. Se remover todas as URLs remotas, o bloco `images.remotePatterns` em
   `next.config.ts` pode ser apagado.

Formato recomendado: **WebP/AVIF**, proporção conforme a seção (o `next/image`
cuida de otimização, lazy-loading e tamanhos responsivos).

---

## Sistema de design

Tokens em `src/app/globals.css` (`@theme`) → viram utilitários Tailwind
(`bg-ink`, `text-cream`, `text-copper`, …).

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` | `#0C1014` | fundo principal |
| `graphite` | `#202327` | fundo secundário |
| `coffee` | `#513C25` | marrom café |
| `caramel` | `#7D6130` | acento premium |
| `copper` | `#BE5719` | acento principal (CTAs) |
| `latte` | `#AB7C58` | neutro quente |
| `cream` | `#EBDAC4` | texto claro |
| `sand` | `#C6A78E` | texto secundário |

**Tipografia:** `font-display` = Fraunces · corpo (padrão) = Manrope.

---

## Estrutura

```text
src/
  app/
    layout.tsx            # fontes, SEO local, JSON-LD, smooth scroll
    page.tsx              # composição da one-page
    globals.css           # tokens de cor + base
    opengraph-image.tsx   # imagem OG/Twitter gerada em build
  components/
    layout/               # Header, Footer
    sections/             # Hero, Manifesto, AllDayDining, MenuHighlights,
                          # Experience, SocialProof, Location, Orders, Instagram
    ui/                   # Button, SectionLabel, StatBadge, MotionReveal,
                          # MenuItem, ImagePanel, LuxuryDivider, SmoothScroll
  lib/
    coffee-data.ts        # ← conteúdo do site (edite aqui)
    constants.ts          # URL, navegação, CTAs
    motion.ts             # tokens/variantes de animação
    utils.ts              # helper cn()
```

---

## Acessibilidade & performance

- Contraste alto (creme sobre grafite/ink), foco visível em tudo que é focável.
- HTML semântico, headings em ordem, skip link ("Pular para o conteúdo").
- `prefers-reduced-motion` respeitado (CSS global + Lenis desativado).
- `next/image` com `sizes`, `priority` no hero e lazy-loading no restante.
- Fontes via `next/font` (self-host, `display: swap`, sem layout shift).
- SEO local: metadata + Open Graph + Twitter + **JSON-LD `CafeOrCoffeeShop`**
  (endereço, telefone, nota, horário).

Ao publicar, atualize `SITE_URL` em `src/lib/constants.ts`.

---

## Observação

Informações de horário, cardápio e disponibilidade podem mudar. Consulte os
canais oficiais antes de visitar ou fazer pedido.
