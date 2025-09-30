import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EasyPairingSection from "@/components/EasyPairingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      {/* <SolutionSection /> */}
      <EasyPairingSection />
      <IntegrationsSection />
      {/* <IntelligenceSection />
      <AboutSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
