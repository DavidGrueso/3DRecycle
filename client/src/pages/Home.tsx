import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import SpecificationsSection from "@/components/SpecificationsSection";
import BuySection from "@/components/BuySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <ImpactSection />
        <GallerySection />
        <SpecificationsSection />
        <BuySection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
