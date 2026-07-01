import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { AllDayDiningSection } from "@/components/sections/AllDayDiningSection";
import { MenuHighlightsSection } from "@/components/sections/MenuHighlightsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { OrdersSection } from "@/components/sections/OrdersSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LuxuryDivider } from "@/components/ui/LuxuryDivider";

export default function Home() {
  return (
    <>
      {/* Skip link para navegação por teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-copper focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <HeroSection />
        <ManifestoSection />
        <AllDayDiningSection />
        <MenuHighlightsSection />
        <LuxuryDivider />
        <ExperienceSection />
        <SocialProofSection />
        <LocationSection />
        <OrdersSection />
        <InstagramSection />
      </main>

      <Footer />
    </>
  );
}
