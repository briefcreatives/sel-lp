import { TrendingUp, AlertTriangle, Zap, Car, Sun, Battery, ArrowLeftRight, HandHeart, Wifi, Cloud, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const ProblemSection = () => {
  const marketStats = [
    { icon: Sun, label: "PV Systems", value: "9 Millions" },
    { icon: Battery, label: "Storage Units", value: "1.4 Millions" },
    { icon: Zap, label: "Heat Pumps", value: "3 Millions" },
    { icon: Car, label: "Electric Vehicles", value: "40 Millions" }
  ];

  const benefits = [
    {
      icon: ArrowLeftRight,
      title: "Universal Compatibility",
      description: "Seamlessly manage any energy resource in one platform"
    },
    {
      icon: HandHeart,
      title: "Easy Setup",
      description: "Hassle-free installation that saves time and money"
    },
    {
      icon: Wifi,
      title: "Always Connected",
      description: "Reliable communication with embedded 4G and access points"
    },
    {
      icon: Cloud,
      title: "Cloud Provider Independence",
      description: "Break free from equipment manufacturer fees and restrictions"
    },
    {
      icon: Lightbulb,
      title: "Local Intelligence, Cloud Control",
      description: "Smart local control with cloud-driven optimization"
    },
    {
      icon: Smartphone,
      title: "Expand Digital Services",
      description: "Meet growing customer needs with ready-to-use interfaces and integration APIs"
    }
  ];

  return (
    <section className="py-20 bg-background">
      {/* <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reef-section-title">
            Prosumers Market is Rapidly Eolving
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2 ">
            <TrendingUp className="reef-feature-icon text-reef-secondary" />
            <span className="text-4xl md:text-5xl font-bold reef-gradient-text">
              €400 Billion
            </span>
          </div>
          <p className="text-xl text-muted-foreground">By 2030, it will installed annually</p>
        </div> */}

      {/* Market Statistics */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {marketStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="reef-card text-center animate-fade-in-up rounded-[30px]">
                <IconComponent className="reef-feature-icon mx-auto mb-4" />
                <div className="reef-stat-number">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div> */}

      {/* </div> */}

      <div className="container mx-auto px-6">

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3
            className="text-2xl lg:text-3xl text-center mb-10"
            style={{ color: '#01534f' }}
          >
            Why Choose REEF
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: '#d6ffe5' }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: '#0adaea' }}
                      />
                    </div>
                    <div>
                      <h4
                        className="text-lg mb-2"
                        style={{ color: '#01534f' }}
                      >
                        {benefit.title}
                      </h4>
                      <p style={{ color: '#000000' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => {
              scrollTo({ top: document.getElementById("schedule-demo").offsetTop, behavior: 'smooth' });
            }}
              size = "lg"
              className = "px-8 py-4 text-lg font-semibold animate-glow-hover animate-scale-hover bg-reef-primary hover:bg-reef-primary/90 text-white"
                >
                Schedule call here!
            </Button>
      </div>


    </div>

      {/* Who We Are Section - Full Width Background */ }
  <div className="mt-20 py-12 md:py-16 md:mb-20">
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
        </div>
      </div>
    </div>
  </div>


    </section >
  );
};

export default ProblemSection;
