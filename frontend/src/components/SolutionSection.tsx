import { CheckCircle, Wifi, Shield, Cpu, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    { icon: CheckCircle, title: "Universal Compatibility", description: "Any manufacturer, any equipment" },
    { icon: Smartphone, title: "Simplified Configuration", description: "Quick and intuitive setup" },
    { icon: Wifi, title: "Always Connected", description: "Integrated 4G for constant connectivity" },
    { icon: Shield, title: "Cloud Vendor Independence", description: "Full control of your data" },
    { icon: Cpu, title: "Local Intelligence + Cloud Control", description: "Best of both worlds" },
    { icon: Cloud, title: "Digital Services Expansion", description: "Scalable platform for new services" }
  ];

  return (
    <section className="py-20 reef-accent-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reef-section-title">
            REEF: The Edge Cloud Solution That{" "}
            <span className="reef-highlight">Revolutionizes Energy Management</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Specially developed for energy retailers, ESCOs and EPCs
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-reef-background rounded-[20px] p-8 shadow-lg animate-fade-in-up animate-scale-hover border border-reef-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      ✅ {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Highlight */}
        <div className="bg-reef-background rounded-[20px] p-8 md:p-12 shadow-xl border border-reef-secondary/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Advanced Edge Cloud Technology
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                We combine intelligent local processing with centralized cloud control,
                ensuring optimized performance and maximum reliability.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-reef-secondary/10 text-reef-secondary rounded-full text-sm font-medium">
                  Edge Computing
                </span>
                <span className="px-4 py-2 bg-reef-secondary/10 text-reef-secondary rounded-full text-sm font-medium">
                  Cloud Integration
                </span>
                <span className="px-4 py-2 bg-reef-secondary/10 text-reef-secondary rounded-full text-sm font-medium">
                  4G Connectivity
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-reef-primary to-reef-secondary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-24 h-24 text-reef-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="px-8 py-4 text-lg animate-glow-hover"
          >
            Request a Technical Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
