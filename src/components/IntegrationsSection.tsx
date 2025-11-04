import { motion } from 'motion/react';
import { Thermometer, Car, Battery } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import easyPairingImage from '@/assets/reef_featured_image.png';
import keyFeaturesImage from '@/assets/l-controllers.svg';
import cloudServicesImage from '@/assets/c-services.png';
import algorithmsImage from '@/assets/algorithms_1.svg';
import productFeaturesImage from '@/assets/p-features.png';
import arrow1 from '@/assets/arrow_1.svg';
import arrow2 from '@/assets/arrow_2.svg';

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
           Explore SEL Platform’s Capabilities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-black mx-auto leading-relaxed text-center"
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
              ⚡ SEL Controller
            </div>
          </div>
          </div>
        </div>

       <div className="flex gap-9 items-center md:items-start justify-center flex-col lg:flex-row">
            <div className="min-w-[340px] flex flex-col">
            <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] text-center">Ultimate compact device</h3>
            <span className="mb-8 text-center">Cutting edge technology</span>
            <motion.div variants={itemVariants}>
            <div className="space-y-4 bg-reef-primary rounded-xl p-6 text-white flex flex-col">
              <div className="flex items-center space-x-4">
                    <div
                      className="rounded-full flex-shrink-0"
                    >
                      <ImageWithFallback src={keyFeaturesImage} className=" text-white w-9 h-9" />
                    </div>
                    <div>
                      <h4
                        className="text-xl font-[600]"
                        style={{ color: '#FFFFFF' }}
                      >
                        Local Controllers
                      </h4>

                    </div>
                  </div>
                  <div className="w-full h-[2px] bg-white mb-5 rounded-lg pt-0 mt-0"></div>
                   <span className="font-[600] text-[18px]">Key features</span>
              <div className="flex items-start">

                <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[rgba(255,255,255,0.50)] mr-2 flex-shrink-0">
                      <img src={arrow2} alt="" className="w-2 h-2" />
                    </div>
                <span className="text-white text-[16px] leading-relaxed font-[500]">
                  The system stays up to date
                </span>
              </div>

              <div className="flex items-start">
                <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[rgba(255,255,255,0.50)] mr-2 flex-shrink-0">
                      <img src={arrow2} alt="" className="w-2 h-2" />
                    </div>
                <span className="text-white text-[16px] leading-relaxed font-[500]">
                  Robustness against network outages
                </span>
              </div>

              <div className="flex items-start">
                <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[rgba(255,255,255,0.50)] mr-2 flex-shrink-0">
                      <img src={arrow2} alt="" className="w-2 h-2" />
                    </div>
                <span className="text-white text-[16px] leading-relaxed font-[500]">
                  Compact design and flexible installation
                </span>
              </div>

              <div className="flex items-start">
                <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[rgba(255,255,255,0.50)] mr-2 flex-shrink-0">
                      <img src={arrow2} alt="" className="w-2 h-2" />
                    </div>
                <span className="text-white text-[16px] leading-relaxed font-[500]">
                  High security standards
                </span>
              </div>

              <div className="flex items-start">
                <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[rgba(255,255,255,0.50)] mr-2 flex-shrink-0">
                      <img src={arrow2} alt="" className="w-2 h-2" />
                    </div>
                <span className="text-white text-[16px] leading-relaxed font-[500]">
                  Compatible with REEF Actuators for local integration
                </span>
              </div>
            </div>
          </motion.div>

          </div>

         <div className="md:mb-16 mb-2 flex flex-col">
          <h3 className="text-reef-primary text-[26px] font-[500] tracking-[0.52px] text-center">
            Integrated Intelligence and Advance Algorithms
          </h3>
          <span className="mb-8 text-center">Cutting edge technology with intuitive interfaces and optimized algorithms for maximum efficiency</span>
          <div className="grid md:grid-cols-3 gap-3 mb-6 md:mb-0">
            {/* Card 1: Interfaces */}
            <Card
              className="p-6 text-black flex flex-col items-start min-h-[407px] border border-[#76DAD2] rounded-[20px] bg-white max-w-[381px] w-full"
            >
              <div className="flex items-center space-x-4 mb-5">
                <div className="rounded-full flex-shrink-0">
                  <ImageWithFallback src={cloudServicesImage} className="text-white w-[33px] h-[39px]" />
                </div>
                <div>
                  <h4 className="text-xl font-[600]" style={{ color: '#005751' }}>
                    Cloud Services
                  </h4>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#76DBD3] mb-5 rounded-lg"></div>
              <span className="font-[600] text-[18px] mb-4">Interfaces</span>
              <div className="space-y-1 w-full">
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">Asset Management Portal</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">Commissioning Portal</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">User Web APP</span>
                </div>
              </div>
            </Card>

            {/* Card 2: Use Cases */}
            <Card
              className="p-6 text-black flex flex-col items-start min-h-[407px] border border-[#76DAD2] rounded-[20px] bg-white max-w-[381px] w-full"
            >
              <div className="flex items-center space-x-4 mb-5">
                <div className="rounded-full flex-shrink-0">
                  <ImageWithFallback src={algorithmsImage} className="text-white w-9 h-9" />
                </div>
                <div>
                  <h4 className="text-xl font-[600]" style={{ color: '#005751' }}>
                   Algorithms
                  </h4>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#76DBD3] mb-5 rounded-lg"></div>
              <span className="font-[600] text-[18px] mb-4">Use Cases</span>
              <div className="space-y-1 w-full">
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">Energy and Power Optimization for DHW</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">Smart Charging and Load Balancing on EV</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">Battery Optimized Control</span>
                </div>
              </div>
            </Card>

            {/* Card 3: OEM Integrations */}
            <Card
              className="p-6 text-black flex flex-col items-start min-h-[407px] border border-[#76DAD2] rounded-[20px] bg-white max-w-[381px] w-full"
            >
              <div className="flex items-center space-x-4 mb-5">
                <div className="rounded-full flex-shrink-0">
                  <ImageWithFallback src={productFeaturesImage} className="text-white w-[38px] h-[35px]" />
                </div>
                <div>
                  <h4 className="text-xl font-[600]" style={{ color: '#005751' }}>
                   Product features
                  </h4>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#76DBD3] mb-5 rounded-lg"></div>
              <span className="font-[600] text-[18px] mb-4">OEM Integration</span>
              <div className="space-y-1 w-full">
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">DHW Manufacturers</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">EV Charging Manufacturers</span>
                </div>
                <div className="flex items-start mt-1">
                  <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                  <span className="text-black text-[16px] leading-relaxed font-[500]">PV and Battery Inverter Manufacturers</span>
                </div>
              </div>
            </Card>
          </div>
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
                   See what it can do for you
                </Button>
              </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
