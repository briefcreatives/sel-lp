import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EasyPairingSection from "@/components/EasyPairingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import HowEasyPairingWorksSection from "@/components/HowEasyPairingWorksSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowEasyPairingWorksSection />
      <IntegrationsSection />
      <WhoWeAreSection />
      {/* <SolutionSection /> */}
      {/* <EasyPairingSection /> */}

      {/* <IntelligenceSection />
      <AboutSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
