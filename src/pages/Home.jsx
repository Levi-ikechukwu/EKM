import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </div>
  );
}
