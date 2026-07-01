import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders premium enquanto não há fotos reais da casa.
    // Ao trocar por imagens locais em /public, este bloco pode sair.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
