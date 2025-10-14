import { motion } from 'motion/react';
import { Thermometer, Car, Battery } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import easyPairingImage from '@/assets/reef_featured_image.png';

const IntegrationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const algorithms = [
    {
      icon: Thermometer,
      title: "Cloud services",
    },
    {
      icon: Car,
      title: "Algorithms",
    },
    {
      icon: Battery,
      title: "Product features",
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How Easy Pairing Works Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl mb-9 text-[#01534f] font-[500]"
          >
           Technology Under SEL Platform (Features)
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-black mx-auto leading-relaxed text-left"
          >
            With REEF you have access to a scalable Energy Management Platform, designed to accelerate the development of new energy solutions for Energy Transition, joining Data and Electrons Management tointegrate intelligence, control and to solve multiple practical implementation issues.
          </motion.p>
        </motion.div>

        <div className="mb-24 flex flex-col md:flex-row gap-14 justify-center items-center">
          <div className="flex-1">
            <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] mb-6">Hardware</h3>
            <div className="bg-[#D6FFE5] rounded-[5px] p-6 text-center mb-6">
              <p className="text-reef-primary text-[24px] font-semibold tracking-[0.72px]">Key features</p>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-[18px] font-[500] leading-[26px] tracking-[0.56px]">
              <li>The systems stays up to date</li>
              <li>Robustness against network outages</li>
              <li>Compact design and flexible installation</li>
              <li>High security standards</li>
              <li>Compatible with REEF Actuators for local integration</li>
            </ul>
          </div>

          <div className="flex-1">
             <div className="relative">
            <ImageWithFallback
              src={easyPairingImage}
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
        </div>

        {/* Algoritmos Cloud */}
        <div className="mb-16">
          <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] text-center mb-16">
            Software
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {algorithms.map((algorithm, index) => {
              const IconComponent = algorithm.icon;
              return (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow" style={{ backgroundColor: '#d6ffe5' }}>
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#01534f' }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4
                        className="text-lg"
                        style={{ color: '#01534f' }}
                      >
                        {algorithm.title}
                      </h4>

                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-12 lg:gap-16"
        >

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl mb-8 text-[#01534f]">Interfaces</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">Asset Management Portal</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">Commissioning Portal</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">User Web APP</span>
              </div>
            </div>
          </motion.div>


          <motion.div variants={itemVariants}>
            <h3 className="text-2xl mb-8 text-[#01534f]">Use Cases</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">Energy and Power Optimization for DHW</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">Smart Charging and Load Balancing on EV</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">Battery Optimized Control</span>
              </div>
            </div>
          </motion.div>


          <motion.div variants={itemVariants}>
            <h3 className="text-2xl mb-8 text-[#01534f]">OEM Integrations</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">3 DHW Manufacturers</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">4 EV Charging Manufacturers</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">3 PV and Battery Inverter Manufacturers</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
