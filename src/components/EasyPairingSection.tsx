import { Wrench, Zap, Smartphone, Rocket, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const EasyPairingSection = () => {
  const features = [
    {
      icon: Wrench,
      title: "Simplifies installation process",
      description: "Reduces complexity and setup time"
    },
    {
      icon: Zap,
      title: "Solves technical impossibilities",
      description: "Overcomes infrastructure limitations"
    },
    {
      icon: Smartphone,
      title: '"Cuts the cable" in inverter-meter connection',
      description: "Eliminates need for physical cabling"
    },
    {
      icon: Rocket,
      title: "Activates all REEF Connect benefits",
      description: "Full access to functionalities"
    },
    {
      icon: Clock,
      title: "Configuration in minutes, not hours",
      description: "Ultra-fast implementation process"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#d6ffe5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-5xl mb-6"
            style={{ color: '#01534f' }}
          >
            <span
              className="inline-block px-4 py-2 rounded-xl mr-4"
              style={{
                backgroundColor: '#0adaea',
                color: '#ffffff',
                transform: 'rotate(-2deg)',
                boxShadow: '0 8px 25px rgba(10, 218, 234, 0.3)'
              }}
            >
              Easy Pairing
            </span>
            <br className="block lg:hidden" />
            REEF's Most Revolutionary Feature
          </h2>

          <p
            className="text-xl lg:text-2xl mb-12"
            style={{ color: '#0adaea' }}
          >
            Wireless Installation, No Complications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-reef-background rounded-[20px] p-8 shadow-lg border border-reef-secondary/30 animate-fade-in-up animate-scale-hover">
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#0adaea' }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="text-lg mb-2"
                        style={{ color: '#01534f' }}
                      >
                        {feature.title}
                      </h4>
                      <p style={{ color: '#000000' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzU4NzM2NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Easy Pairing Technology"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div
              className="absolute top-4 left-4 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#01534f',
                color: '#ffffff'
              }}
            >
              ⚡ Easy Pairing
            </div>
          </div>
        </div>

        {/* Installation Revolution CTA */}
        <div className="bg-gradient-to-r from-reef-primary to-reef-secondary rounded-2xl p-8 md:p-12 text-reef-background shadow-2xl mb-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🔧 ⚡ Installation Revolution
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              With Easy Pairing, transform a complex installation into a simple and fast process
            </p>
            <div className="flex flex-col items-center gap-4">
               <Button
                 variant="secondary"
                 size="lg"
                 className="px-12 py-6 text-xl bg-reef-background text-reef-primary hover:bg-reef-background/90 font-bold"
               >
                 See Easy Pairing in Action
               </Button>

               {/* Countdown and Event Info */}
               <div className="text-center mt-4">
                 <div className="text-sm opacity-75 mb-2">
                   Coming to Enlit Fair 2025
                 </div>
                 <div className="text-lg font-semibold mb-1">
                   📅 18-20 November 2025
                 </div>
                 <div className="text-sm opacity-90">
                   {(() => {
                     const eventDate = new Date('2025-11-18');
                     const today = new Date();
                     const diffTime = eventDate.getTime() - today.getTime();
                     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                     if (diffDays > 0) {
                       return `⏰ ${diffDays} days to go!`;
                     } else if (diffDays === 0) {
                       return '🎉 Today is the day!';
                     } else {
                       return '✨ Event concluded';
                     }
                   })()}
                 </div>
               </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default EasyPairingSection;
