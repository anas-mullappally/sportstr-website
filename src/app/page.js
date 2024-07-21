import AcademyBanner from "@/components/AcademyBanner";
import AdvantageSection from "@/components/AdvantageSection";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import FreeDemoBanner from "@/components/FreeDemoBanner";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="bg-main-gradient">
        {/* <HeroSection /> */}
        <AcademyBanner />
        <AdvantageSection />
        <Features />
        <FreeDemoBanner />
        <FaqSection />
        <ContactUs/>
      </div>
    </>
  );
}
