import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Button } from "@/components/ui/button";

const WhoWeAreSection = () => {
  return (
  <div className="py-12 md:py-16 md:mb-20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Image */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden max-w-[500px]">
            <ImageWithFallback
              src="/sel_home_1.webp"
              alt="Smart Energy team collaboration"
              className="w-full h-auto object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
          </div>
        </div>

        {/* Right Content - Text */}
        <div className="order-1 lg:order-2">
          <div className="text-sm font-semibold text-reef-secondary mb-4 uppercase tracking-wider">
            WHO WE ARE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-reef-primary mb-6">
            Smart Energy: collaborators for the future of energy
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            At Smart Energy, we embody core values that drive our mission in the energy sector: innovation in integrating user adoption into tech development, collaborative efforts to shape the future of downstream energy, promotion of renewable energy sources for climate resilience, and a commitment to integrity and reliability in all operations. These values inspire us to lead with purpose towards a sustainable and innovative energy future.
          </p>

            <Button
                variant="default"
                size="lg"
                className="px-8 py-4"
                onClick={() => window.open('https://www.smartenergylab.pt/who-we-are/', '_blank')}
              >
               Discovery more here
              </Button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default WhoWeAreSection
