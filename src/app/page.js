import AcademyBanner from "@/components/AcademyBanner";
import AdvantageSection from "@/components/AdvantageSection";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="bg-main-gradient">
        <HeroSection />
        <AcademyBanner />
        <AdvantageSection />
        <Features />
        <FaqSection />
      </div>
    </>
  );
}
