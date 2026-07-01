import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { coffeetown, units } from "@/lib/coffee-data";
import { SITE_URL } from "@/lib/constants";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

/* Tipografia editorial — display serif + corpo geométrico (sem Inter/Roboto). */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Coffeetown Salvador — Café, Brunch e Bistrô | Vitória e Pituba",
    template: "%s · Coffeetown Salvador",
  },
  description:
    "Coffeetown Salvador: café, brunch, bolos, croissants, drinks, Wi-Fi e ambiente acolhedor. Duas unidades em Salvador — Vitória (Av. Sete de Setembro) e Pituba (Rua Amazonas).",
  keywords: [
    "Coffeetown Salvador",
    "Coffeetown Vitória",
    "Coffeetown Pituba",
    "cafeteria em Salvador",
    "café em Vitória Salvador",
    "café na Pituba Salvador",
    "brunch em Salvador",
    "bistrô em Salvador",
    "café com Wi-Fi em Salvador",
    "cafeteria Avenida Sete de Setembro",
    "cafeteria Rua Amazonas Pituba",
    "bolos e cafés em Salvador",
    "cold brew Salvador",
    "croissant Salvador",
  ],
  authors: [{ name: "Coffeetown Salvador" }],
  creator: "Coffeetown Salvador",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Coffeetown Salvador",
    title: "Coffeetown Salvador — Café, Brunch e Bistrô | Vitória e Pituba",
    description:
      "Dois bistrôs urbanos e acolhedores em Salvador — Vitória e Pituba. Café, brunch, confeitaria e drinks para qualquer hora do dia.",
    // A imagem é fornecida por src/app/opengraph-image.tsx (convenção do Next).
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffeetown Salvador — Vitória e Pituba",
    description:
      "Café, brunch, bolos e drinks em dois bistrôs acolhedores em Salvador.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#0C1014",
  colorScheme: "dark",
};

/* Dados estruturados para SEO local — uma entrada por unidade (Google Rich Results). */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": units.map((unit) => ({
    "@type": "CafeOrCoffeeShop",
    name: `${coffeetown.name} — ${unit.name}`,
    image: `${SITE_URL}/opengraph-image`,
    url: SITE_URL,
    telephone: unit.phone,
    priceRange: "$$",
    servesCuisine: ["Café", "Brunch", "Confeitaria", "Bistrô"],
    address: {
      "@type": "PostalAddress",
      streetAddress: unit.streetAddress,
      addressLocality: "Salvador",
      addressRegion: "BA",
      postalCode: unit.postalCode,
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: unit.rating,
      reviewCount: unit.reviewsCount.replace(/\./g, ""),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:30",
      },
    ],
    sameAs: [coffeetown.instagramUrl],
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
