import AcademyBanner from "@/components/AcademyBanner";
import AdvantageSection from "@/components/AdvantageSection";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import Features from "@/components/Features";
import FreeDemoBanner from "@/components/FreeDemoBanner";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        {/* <AcademyBanner /> */}
        <Partners />

        <div className="bg-mid-gradient">
          <AdvantageSection />
          <Features />
          <TestimonialCarousel />
          <FreeDemoBanner />
          <FaqSection />
        </div>
        <ContactUs />
      </div>
    </>
  );
}
