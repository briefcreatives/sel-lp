import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-energy-management.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="REEF Energy Management - Connected equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-reef-background via-reef-background/95 to-reef-accent/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <div className="animate-fade-in-up">

          <span className="text-primary text-xl mb-2 font-semibold"> Present at Enlit Fair 18-20 November 2025</span>

          <h1 className="reef-hero-title mb-6 max-w-4xl mx-auto">
            REEF: The Definitive Solution for{" "}
            <span className="reef-highlight">Distributed Energy Management</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Integrate and control any energy asset - solar panels, batteries, heat pumps
            and EV chargers - regardless of manufacturer, with the revolutionary{" "}
            <span className="reef-highlight">Easy Pairing</span> functionality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => {
                scrollTo({ top: document.getElementById("schedule-demo").offsetTop, behavior: 'smooth' });
              }}
              size="lg"
              className="px-8 py-4 text-xl font-semibold animate-glow-hover animate-scale-hover bg-reef-primary hover:bg-reef-primary/90 text-white"
            >
              Schedule Your Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-reef-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-reef-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
