import { Building2, Target, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Leading Company",
      description: "Pioneer in innovative solutions for distributed energy resources management"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Simplify the integration and optimization of energy assets for all market players"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Solutions developed for the European market with international expansion"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Cutting-edge technology with exclusive features like Easy Pairing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
             <h2 className="reef-section-title text-left">
               Smart Energy Lab: <span className="text-reef-primary">Pioneer in Intelligent Energy Management</span>
             </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Smart Energy Lab is a leading company in innovative solutions for distributed energy resources management. 
              Our mission is to simplify the integration and optimization of energy assets, making the energy transition 
              accessible and efficient for everyone.
            </p>

            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-reef-secondary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-reef-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-1">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4 animate-glow-hover"
              >
                Know Our Story
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="px-8 py-4"
                onClick={() => window.open('https://smartenergylab.pt', '_blank')}
              >
                Visit smartenergylab.pt
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="reef-accent-section rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Numbers That Make a Difference
              </h3>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-reef-secondary mb-2">10+</div>
                  <p className="text-muted-foreground">OEM Integrations</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-reef-secondary mb-2">100%</div>
                  <p className="text-muted-foreground">Compatibility</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-reef-secondary mb-2">24/7</div>
                  <p className="text-muted-foreground">Monitoring</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-reef-secondary mb-2">90%</div>
                  <p className="text-muted-foreground">Installation Time Reduction</p>
                </div>
              </div>

              <div className="p-6 bg-reef-background rounded-lg border border-reef-secondary/30">
                <p className="text-reef-secondary font-semibold mb-2">Patented Technology</p>
                <p className="text-muted-foreground text-sm">
                  Easy Pairing and other proprietary algorithms developed internally
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12">
            Our Values and Commitments
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="reef-card rounded-[20px]">
              <div className="w-16 h-16 bg-reef-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-reef-secondary" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Constant Innovation</h4>
              <p className="text-muted-foreground">
                Continuous development of technologies that simplify the complex world of distributed energy
              </p>
            </div>
             <div className="reef-card rounded-[20px]">
              <div className="w-16 h-16 bg-reef-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-reef-secondary" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Sustainability</h4>
              <p className="text-muted-foreground">
                Commitment to a cleaner and more efficient energy future for everyone
              </p>
            </div>
            <div className="reef-card rounded-[20px]">
              <div className="w-16 h-16 bg-reef-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-reef-secondary" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Technical Excellence</h4>
              <p className="text-muted-foreground">
                High standards of quality and reliability in all our solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;