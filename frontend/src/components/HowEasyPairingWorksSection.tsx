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


  return (
    <div className="py-24 bg-[#EAFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How Easy Pairing Works Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-[500] text-center mb-12"
            style={{ color: '#01534f' }}
          >
            How Easy Pairing Works
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-start gap-8 md:gap-28"
          >
            <motion.div variants={itemVariants} className="text-center max-w-80">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-reef-primary font-semibold text-xl"
                style={{ backgroundColor: '#76DBD3' }}
              >
                1
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Installation</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Mount the controller next to the battery</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center max-w-80">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-reef-primary font-semibold text-xl"
                style={{ backgroundColor: '#76DBD3' }}
              >
                2
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Easy Pairing</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Install one actuator on the battery side and another inside the mains meter. Pair both
actuators by pressing each pairing button for 5 seconds</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center max-w-80">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-reef-primary font-semibold text-xl"
                style={{ backgroundColor: '#76DBD3' }}
              >
                3
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Multi-Asset</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">For additional flexible assets, such as EV chargers, heat pumps, or others, install extra
actuators next to each new asset</p>
            </motion.div>

             <motion.div variants={itemVariants} className="text-center max-w-80">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-reef-primary font-semibold text-xl"
                style={{ backgroundColor: '#76DBD3' }}
              >
                4
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Configuration</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Configure and commission the system using the Commissioning Manager</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center max-w-80">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-reef-primary font-semibold text-xl"
                style={{ backgroundColor: '#76DBD3' }}
              >
                5
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Activation Successful</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Check your correct device LEDs status. Your system is ready and
operational</p>
            </motion.div>
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
};

export default IntegrationsSection;
