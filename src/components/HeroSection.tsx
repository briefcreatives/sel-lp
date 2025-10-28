import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/bg-hero-sel.png";
import reefVideo from "@/assets/reef-video.mp4";
import logoReef from '@/assets/reef-black.png';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const HeroSection = () => {
  return (
    <section className="relative md:pt-[150px] md:pb-[150px] pt-24 pb-20 flex items-center md:min-h-[90vh] justify-center mt-[63px]">
      <div className="absolute p-5 bg-[#0CC6DE] z-40 w-full top-[-64px] overflow-hidden flex items-start justify-center">
        <div className="w-full flex justify-center">
          <div className="marquee-track">
            <span
              className="block whitespace-nowrap text-black text-[16px] font-[500] marquee-text"
              style={{ display: 'inline-block', minWidth: '100vw', textAlign: 'center' }}
            >
              Enlit 2025 18-20 November visit our booth 5.D63 and check our sessions Smart Homes: Catalysts for Renewable Energy Integration, on the 18 th and Energy 4.0 Technologies: IIoT and Cloud on the 19th
            </span>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          src={reefVideo}
        >
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-reef-background via-reef-background/95 to-reef-accent/30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-end">
        <div className="animate-fade-in-up flex flex-col items-start">
            <div>
           <ImageWithFallback
              src={logoReef}
              alt="Logo REEF Energy Management"
              className="object-cover max-w-[180px]"
            />
        </div>

          <p className="text-xl md:text-2xl text-black text-left mb-8 max-w-7xl leading-relaxed font-[500] tracking-[0.54px] mt-[26px]">
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
