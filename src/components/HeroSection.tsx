import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-sel.png";

const HeroSection = () => {
  return (
    <section className="relative md:pt-[175px] md:pb-[100px] pt-24 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="REEF Energy Management - Connected equipment"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-reef-background via-reef-background/95 to-reef-accent/30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="animate-fade-in-up">
          <span className="text-white text-2xl text-left font-[500]">Present at Enlit Fair 18-20 November 2025</span>
          <h1 className="reef-hero-title mb-6 max-w-7xl text-left mt-4">
            <span className="reef-highlight">The Scalable Edge Cloud Core {" "}</span>
             for Distributed Energy Resource Integration and Control
          </h1>

          <p className="text-xl md:text-2xl text-white text-left text-muted-foreground mb-8 max-w-7xl leading-relaxed font-semibold tracking-[0.54px]">
            For Utilities, EPCs and OEMs looking to better connect assets, streamline installations, and orchestrate residential DER portfolios, REEF delivers all this powered by SEL Platform’s edge-cloud technology
          </p>


              <div className="flex justify-center">
                <Button
                  onClick={() => {
                    scrollTo({ top: document.getElementById("schedule-demo").offsetTop, behavior: 'smooth' });
                  }}
                  variant="default"
                  size="lg"
                  className="px-12 py-6 text-xl bg-reef-primary text-white mt-4"
                >
                  Schedule your Demo here!
                </Button>
              </div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-reef-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-reef-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
