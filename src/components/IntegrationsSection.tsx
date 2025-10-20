import { motion } from 'motion/react';
import { Thermometer, Car, Battery } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import easyPairingImage from '@/assets/reef_featured_image.png';
import keyFeaturesImage from '@/assets/key-features.svg';
import cloudServicesImage from '@/assets/cloud-services.svg';
import algorithmsImage from '@/assets/algorithms.svg';
import productFeaturesImage from '@/assets/product-features.svg';

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
      icon: cloudServicesImage,
      title: "Cloud services",
    },
    {
      icon: algorithmsImage,
      title: "Algorithms",
    },
    {
      icon: productFeaturesImage,
      title: "Product features",
    },
  ];

  return (
    <div className="md:py-24 pt-10 pb-1 bg-white">
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


          <div className="">
             <div className="relative">
            <ImageWithFallback
              src={easyPairingImage}
              alt="Easy Pairing Technology"
              className="w-[560px] h-[500px] object-cover rounded-2xl shadow-xl"
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

       <div className="flex gap-9 items-start justify-start flex-col lg:flex-row">
            <div className="min-w-[340px]">
            <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] mb-4 md:mb-14">1. Ultimate compact device</h3>
              <Card  className="p-4 hover:shadow-lg transition-shadow mb-6" style={{ backgroundColor: '#d6ffe5' }}>
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#01534f' }}
                    >
                      <ImageWithFallback src={keyFeaturesImage} className=" text-white w-8 h-8" />
                    </div>
                    <div>
                      <h4
                        className="text-lg"
                        style={{ color: '#01534f' }}
                      >
                        Key features
                      </h4>

                    </div>
                  </div>
                </Card>

            <motion.div variants={itemVariants}>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">
                  The system stays up to date
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">
                  Robustness against network outages
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">
                  Compact design and flexible installation
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">
                  High security standards
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">
                  Compatible with REEF Actuators for local integration
                </span>
              </div>
            </div>
          </motion.div>

          </div>

         <div className="md:mb-16 mb-2 flex flex-col">
          <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] text-left">
            2. Integrated Intelligence and Advance Algorithms
          </h3>
          <span className="mb-8">Cutting edge technology with intuitive interfaces and optimized algorithms for maximum efficiency</span>
          <div className="grid md:grid-cols-3 gap-8 mb-6 md:mb-0">
             {algorithms.map((algorithm, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-lg transition-shadow md:mb-6"
              style={{ backgroundColor: '#d6ffe5' }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="p-4 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: '#01534f' }}
                >
                  <img
                    src={algorithm.icon}
                    alt={algorithm.title}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="text-lg" style={{ color: '#01534f' }}>
                    {algorithm.title}
                  </h4>
                </div>
              </div>
            </Card>
          ))}
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
                <span className="text-black text-lg leading-relaxed">DHW Manufacturers</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">EV Charging Manufacturers</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-black text-lg leading-relaxed">PV and Battery Inverter Manufacturers</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>

       </div>


         <div className="mx-auto flex justify-center">
                <Button
                  onClick={() => {
                    scrollTo({ top: document.getElementById("schedule-demo").offsetTop, behavior: 'smooth' });
                  }}
                  variant="default"
                  size="lg"
                  className="px-12 py-6 text-xl bg-reef-primary text-white mt-4"
                >
                   Book your demo
                </Button>
              </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
