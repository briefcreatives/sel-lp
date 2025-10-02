import { motion } from 'motion/react';
import { Thermometer, Car, Battery } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: '#01534f' }}
          >
            How Easy Pairing Works
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#0adaea' }}
              >
                1
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Connect REEF</h4>
              <p className="text-gray-600">Install the REEF device at the desired location</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#0adaea' }}
              >
                2
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Activate Easy Pairing</h4>
              <p className="text-gray-600">Configure wireless communication via app</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#0adaea' }}
              >
                3
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>System Active</h4>
              <p className="text-gray-600">All equipment connected and operational</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl mb-6 text-[#01534f]"
          >
            Integrated Intelligence and Advanced Algorithms
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-black max-w-3xl mx-auto leading-relaxed"
          >
            Cutting-edge technology with intuitive interfaces and optimized algorithms for maximum efficiency
          </motion.p>
        </motion.div>

        {/* Algoritmos Cloud */}
        <div className="mb-16">
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

        {/* Bottom Section with Stats */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-20 pt-12 border-t border-[#01534f] border-opacity-20"
        > */}
        {/* <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl mb-4 text-[#01534f]">Comprehensive Ecosystem Coverage</h3>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Our extensive partner network ensures seamless integration with industry-leading equipment and systems
            </p>
          </motion.div> */}

        {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl text-[#0adaea] mb-2">10+</div>
              <div className="text-black text-lg">OEM Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#0adaea] mb-2">3</div>
              <div className="text-black text-lg">Management Interfaces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#0adaea] mb-2">5+</div>
              <div className="text-black text-lg">Optimization Use Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#0adaea] mb-2">100%</div>
              <div className="text-black text-lg">System Compatibility</div>
            </div>
          </motion.div> */}
        {/* </motion.div> */}

        {/* CTA */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Ready to integrate REEF with your existing energy infrastructure?
            Discover how our comprehensive ecosystem transforms energy management.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0adaea] text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300"
          >
            Explore Integration Options
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default IntegrationsSection;
