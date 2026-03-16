import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CredentialsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
