import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/bg-hero-sel.png";

const HeroSection = () => {
  return (
    <section className="relative md:pt-[150px] md:pb-[150px] pt-24 pb-20 flex items-center md:min-h-[60vh] justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center">
        <div className="animate-fade-in-up flex flex-col items-start">
          <span className="text-black text-2xl text-left font-[500]">Present at Enlit Fair 18-20 November 2025</span>
          <h1 className="text-reef-primary reef-hero-title mb-6 max-w-7xl text-left mt-4">
            REEF Energy Management
          </h1>

          <p className="text-xl md:text-2xl text-black text-left mb-8 max-w-7xl leading-relaxed font-[500] tracking-[0.54px]">
            The Scalable Edge cloud core for distributed Energy<br /> Resource Integration and Control
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
