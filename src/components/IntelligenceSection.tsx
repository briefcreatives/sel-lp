import { Brain, Settings, Users, Zap, Car, Battery, Shield, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const IntelligenceSection = () => {
  const features = [
    { icon: Settings, title: "Asset management portal", description: "Centralized control of all equipment" },
    { icon: Users, title: "Commissioning portal", description: "Simplified configuration for technicians" },
    { icon: Brain, title: "Web app for users", description: "Intuitive interface for end users" }
  ];

  const algorithms = [
    { 
      icon: Zap, 
      title: "Energy and power optimization for DHW",
      description: "Intelligent algorithms for water heating"
    },
    { 
      icon: Car, 
      title: "Smart charging and EV load balancing",
      description: "Optimized electric vehicle charging management"
    },
    { 
      icon: Battery, 
      title: "Optimized battery control",
      description: "Maximizing battery life and efficiency"
    }
  ];

  const integrations = [
    { category: "DHW", count: "3 manufacturers", icon: Zap },
    { category: "EV Charging", count: "4 manufacturers", icon: Car },
    { category: "PV/Battery Inverters", count: "3 manufacturers", icon: Battery }
  ];

  const techFeatures = [
    { 
      icon: Shield, 
      title: "Perfect Connectivity",
      description: "Inverter-cloud connection, control via OEM API or local Modbus"
    },
    { 
      icon: Battery, 
      title: "Robustness",
      description: "Several days of offline operation without data loss"
    },
    { 
      icon: RefreshCw, 
      title: "OTA Updates",
      description: "Always updated with latest use cases"
    },
    { 
      icon: Shield, 
      title: "Security",
      description: "High-level encryption and authentication"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="reef-section-title">
            Smart Energy: <span className="text-reef-primary">collaborators for the future of energy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology with intuitive interfaces and optimized algorithms for maximum efficiency
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                   <div key={index} className="reef-card text-left rounded-[20px]">
                    <IconComponent className="w-8 h-8 text-reef-secondary mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-primary">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">Cloud Algorithms</h3>
            <div className="space-y-6">
              {algorithms.map((algorithm, index) => {
                const IconComponent = algorithm.icon;
                return (
                   <div key={index} className="reef-card text-left rounded-[20px]">
                    <IconComponent className="w-8 h-8 text-reef-secondary mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-primary">{algorithm.title}</h4>
                    <p className="text-muted-foreground text-sm">{algorithm.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">OEM Integrations</h3>
            <div className="space-y-6">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <div key={index} className="reef-card text-left rounded-[20px]">
                    <IconComponent className="w-8 h-8 text-reef-secondary mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-primary">{integration.category}</h4>
                    <Badge variant="secondary" className="bg-reef-secondary/10 text-reef-secondary">
                      {integration.count}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="reef-accent-section rounded-[20px] p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
            Advanced Technical Characteristics
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-reef-secondary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-reef-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Installation Options */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-primary mb-6">Flexible Installation</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["DIN rail", "Wall", "Table", "Magnetic"].map((option, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-reef-secondary border-reef-secondary/30">
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;