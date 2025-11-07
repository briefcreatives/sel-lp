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
          <h3 className="text-2xl md:text-3xl font-[500] text-reef-primary mb-6">
            A dynamic team shaping a green energy future at Smart Energy Lab
          </h3>
          <p className="text-[#00100F] text-[18px] mb-8 leading-relaxed">
            Smart Energy LAB is an organization for developing any new product, service, or process that accelerates the business of companies offering New Energy Downstream solutions. We do it by combining three levers of acceleration of the end-user energy transition - Client adoption, Transactional cost reduction and Technology adaptation for delivery – and boosting a highly qualified team with competencies in Business, Customer Experience and Technology.
<br /><br />
 Smart Energy Lab has been investing and solving problems for energy companies in three focus areas: EV charging, EMS to implement complex use cases and flexibility offerings.
          </p>

            <Button
                variant="default"
                size="lg"
                className="px-8 text-[20px] py-4 bg-[#0ADAEA] text-black hover:text-white"
                onClick={() => window.open('https://www.smartenergylab.pt/who-we-are/', '_blank')}
              >
               Discover more about the team here
              </Button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default WhoWeAreSection
