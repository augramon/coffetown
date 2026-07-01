/* ==========================================================================
   Fonte única de verdade da Coffeetown Salvador — Unidade Vitória.
   Edite AQUI telefone, endereço, links e itens do menu. Nada de dados
   espalhados pelos componentes.
   ========================================================================== */

/** Dados de marca (comuns às duas unidades). */
export const coffeetown = {
  name: "Coffeetown Salvador",
  type: "Bistro / All Day Dining",
  city: "Salvador - BA",
  instagram: "@coffeetownsalvador",
  instagramUrl: "https://instagram.com/coffeetownsalvador",
  // Links de ação de marca — troque pelos oficiais quando confirmados.
  menuUrl: "#menu",
  deliveryUrl: "#pedidos",
  pickupUrl: "#pedidos",
} as const;

export type Unit = {
  id: string;
  name: string;
  tagline: string;
  address: string;
  addressDetail?: string;
  streetAddress: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  rating: string;
  reviewsCount: string;
  hours: string;
  priceRange?: string;
  services: string[];
  badges?: string[];
  mapsUrl: string;
  mapEmbed: string;
};

/** As duas casas da Coffeetown em Salvador. */
export const units: Unit[] = [
  {
    id: "vitoria",
    name: "Vitória",
    tagline: "A casa-origem, na Sete de Setembro.",
    address: "Av. Sete de Setembro, 1755 - Vitória, Salvador - BA, 40080-002",
    streetAddress: "Av. Sete de Setembro, 1755",
    postalCode: "40080-002",
    phone: "(71) 3565-1325",
    phoneHref: "tel:+557135651325",
    rating: "4.6",
    reviewsCount: "5.314",
    hours: "Aberto · fecha às 21h30",
    services: ["Retirada", "Delivery", "Consumo no local"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Coffeetown%20Salvador%20Av.%20Sete%20de%20Setembro%201755%20Vit%C3%B3ria%20Salvador",
    mapEmbed:
      "https://www.google.com/maps?q=Av.%20Sete%20de%20Setembro%2C%201755%20-%20Vit%C3%B3ria%2C%20Salvador%20-%20BA%2C%2040080-002&output=embed",
  },
  {
    id: "pituba",
    name: "Pituba",
    tagline: "No Gourmet, dentro da Villa San Luigi.",
    address: "R. Amazonas, 1111 - Gourmet 01 - Pituba, Salvador - BA, 41830-380",
    addressDetail: "Térreo · Villa San Luigi",
    streetAddress: "R. Amazonas, 1111 - Gourmet 01",
    postalCode: "41830-380",
    phone: "(71) 3329-6817",
    phoneHref: "tel:+557133296817",
    rating: "4.8",
    reviewsCount: "3.349",
    hours: "Aberto · fecha às 21h30",
    priceRange: "R$ 40–80 por pessoa",
    services: [
      "Pedido online",
      "Consumo no local",
      "Retirada no carro",
      "Delivery sem contato",
    ],
    badges: ["LGBTQ+ friendly", "Negócio de mulheres"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Coffeetown%20Salvador%20R.%20Amazonas%201111%20Pituba%20Salvador",
    mapEmbed:
      "https://www.google.com/maps?q=R.%20Amazonas%2C%201111%20-%20Pituba%2C%20Salvador%20-%20BA%2C%2041830-380&output=embed",
  },
];

export type MenuItem = {
  name: string;
  description: string;
  /** Imagem opcional (placeholder premium — troque por foto real). */
  image?: string;
  featured?: boolean;
};

/* --------------------------------------------------------------------------
   Placeholders premium (Unsplash). Direção: tons quentes, café, madeira,
   creme e caramelo. Substitua pelas fotos editoriais reais da casa.
   -------------------------------------------------------------------------- */
const IMG = {
  cake: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
  croissant:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80",
  sandwich:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
  mocaccino:
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=80",
  waffle:
    "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=80",
  redVelvet:
    "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1000&q=80",
  coldBrew:
    "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=1000&q=80",
  cappuccino:
    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1000&q=80",
} as const;

/** Cafés — a base da casa. */
export const coffeeItems: MenuItem[] = [
  {
    name: "Mocaccino",
    description: "Espresso, chocolate e leite vaporizado em equilíbrio aveludado.",
    image: IMG.mocaccino,
    featured: true,
  },
  {
    name: "Flat White",
    description: "Dose dupla e microespuma fina, para quem gosta de café com presença.",
  },
  {
    name: "Cold Brew",
    description: "Extração lenta a frio. Encorpado, macio e feito para o calor de Salvador.",
    image: IMG.coldBrew,
    featured: true,
  },
  {
    name: "Café Sweet Coffee",
    description: "Nosso doce da casa em forma de café — indulgente na medida certa.",
  },
  {
    name: "Cappuccino da Casa",
    description: "Receita da Coffeetown, cremoso e reconfortante do começo ao fim.",
    image: IMG.cappuccino,
    featured: true,
  },
];

/** Brunch — o que enche a mesa de manhã e tarde. */
export const brunchItems: MenuItem[] = [
  {
    name: "Breakfast Sandwich",
    description: "Pão macio, ovo e recheio quente para começar o dia com vontade.",
    image: IMG.sandwich,
    featured: true,
  },
  {
    name: "Croissant",
    description: "Folhado amanteigado, dourado e leve — clássico de padaria francesa.",
    image: IMG.croissant,
    featured: true,
  },
  {
    name: "Waffle com frutas e Nutella",
    description: "Waffle quentinho, frutas frescas e Nutella para dividir (ou não).",
    image: IMG.waffle,
    featured: true,
  },
];

/** Confeitaria — a vitrine de bolos e tortas. */
export const cakeItems: MenuItem[] = [
  {
    name: "Coffeetown Cake",
    description: "O bolo-assinatura da casa. A razão de muita gente voltar.",
    image: IMG.cake,
    featured: true,
  },
  {
    name: "Torta Red Velvet",
    description: "Camadas aveludadas e frosting de cream cheese na medida.",
    image: IMG.redVelvet,
    featured: true,
  },
  {
    name: "Carrot Cake",
    description: "Bolo de cenoura alto com cobertura generosa de chocolate.",
  },
  {
    name: "Cheese Cake",
    description: "Base crocante, creme denso e um toque de acidez para equilibrar.",
  },
  {
    name: "Torta de Maçã",
    description: "Apple pie morna, canela e aquele aroma de forno de casa.",
  },
  {
    name: "Torta Cookie de Nutella",
    description: "Massa de cookie e recheio de Nutella para os dias sem culpa.",
  },
  {
    name: "Cinnamon Roll",
    description: "Rolo de canela com frosting de cream cheese, servido morno.",
  },
  {
    name: "Bolo de Cenoura com Chocolate",
    description: "O brasileiríssimo, com cobertura cremosa de chocolate.",
  },
];

/** Bebidas e outros — o fim de tarde e o happy hour. */
export const otherItems: MenuItem[] = [
  {
    name: "Suco de Morango",
    description: "Fruta batida na hora, docinho e refrescante.",
  },
  {
    name: "Great Cocktails",
    description: "Coquetelaria caprichada para o happy hour ganhar ritmo.",
  },
  {
    name: "Happy-hour Food",
    description: "Petiscos pensados para acompanhar drink e boa conversa.",
  },
];

/** Destaques visuais — cross-categoria, para a vitrine editorial do menu. */
export const menuHighlights: MenuItem[] = [
  cakeItems[0], // Coffeetown Cake
  brunchItems[1], // Croissant
  brunchItems[0], // Breakfast Sandwich
  coffeeItems[0], // Mocaccino
  brunchItems[2], // Waffle
  cakeItems[1], // Red Velvet
  coffeeItems[2], // Cold Brew
  coffeeItems[4], // Cappuccino da Casa
];

/** Categorias organizadas para renderização editorial. */
export const menuCategories = [
  { id: "cafes", label: "Cafés", items: coffeeItems },
  { id: "brunch", label: "Brunch", items: brunchItems },
  { id: "confeitaria", label: "Confeitaria", items: cakeItems },
  { id: "bebidas", label: "Bebidas & Happy Hour", items: otherItems },
] as const;

/** Pontos da experiência / All Day Dining. */
export const experiencePoints = [
  {
    title: "Morning Coffee",
    description:
      "O primeiro café do dia, com croissant quente e a casa ainda acordando.",
  },
  {
    title: "Brunch & Cakes",
    description:
      "Waffles, sanduíches e uma vitrine de bolos e tortas para a mesa longa.",
  },
  {
    title: "Cocktails & Late Hours",
    description:
      "Quando a tarde cai, o balcão vira happy hour com drinks e petiscos.",
  },
] as const;

/** Métricas de prova social (marca, somando as duas unidades). */
export const socialProofStats = [
  { value: "8.663", label: "avaliações somadas no Google" },
  { value: "2", label: "unidades em Salvador" },
  { value: "30min–4h", label: "de permanência típica" },
] as const;

/** Frases baseadas no resumo das avaliações (sem depoimentos inventados). */
export const reviewHighlights = [
  "Ambiente acolhedor, atendimento rápido, cafés e comidas deliciosos.",
  "Estilo brunch, bom Wi-Fi e ambiente confortável.",
  "Atendimento atencioso, ambiente agradável e boas opções de café e doces.",
] as const;

export type Review = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

/** Avaliações reais de clientes (Google) — todas 5 estrelas. */
export const reviews: Review[] = [
  {
    author: "Wally Passos",
    date: "1 semana atrás",
    rating: 5,
    text: "Ambiente bonito, agradável e muito acolhedor. Atendente Laiane muito gentil, educada e proficiente. Atendimento excelente! Amei o lugar e super recomendo.",
  },
  {
    author: "Raíne Santana",
    date: "1 mês atrás",
    rating: 5,
    text: "Maravilhosa, ambiente agradável e aconchegante, cheio de estilo, que nos faz viajar. Pratos leves e saborosos na medida certa! Senti falta apenas de opções para intolerantes à lactose, mas acredito que em breve incluirão no cardápio.",
  },
  {
    author: "Ester Lopes",
    date: "3 semanas atrás",
    rating: 5,
    text: "Ambiente aconchegante, bem silencioso e refrigerado, funcionários muito gentis e solícitos. A comida não demorou muito e o garçom Robson é uma pessoa excepcional. Recomendo de olhos fechados!",
  },
  {
    author: "Suelen Luz",
    date: "2 semanas atrás",
    rating: 5,
    text: "Não moro no Brasil e foi muito especial poder tomar um café tão bom aqui em Salvador. Já é a segunda vez que venho ao Coffeetown e a experiência foi ótima novamente: café excelente, ambiente agradável e atendimento atencioso. Com certeza voltarei sempre que estiver visitando a terrinha.",
  },
  {
    author: "Michelle Macêdo",
    date: "1 mês atrás",
    rating: 5,
    text: "Lugar climatizado e muito agradável. Cardápio variado para vários gostos, inclusive vegetariano.",
  },
];

/** Tags "bom para" derivadas do resumo das avaliações. */
export const goodForTags = [
  "Brunch",
  "Trabalhar com Wi-Fi",
  "Encontros",
  "Café & sobremesas",
  "Happy hour",
] as const;

/* --------------------------------------------------------------------------
   Imagens de ambiente e seções (placeholders premium — trocar por fotos
   reais da casa). Tudo centralizado para facilitar a substituição.
   -------------------------------------------------------------------------- */
export const siteImages = {
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80",
  ambiancePrimary:
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80",
  ambianceSecondary:
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80",
  allDay: {
    morning:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80",
    brunch:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    cocktails:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
  },
  instagram: [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=600&q=80",
  ],
} as const;
