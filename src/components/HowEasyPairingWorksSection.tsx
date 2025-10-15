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
            className="flex flex-wrap justify-center items-center gap-8 md:gap-28"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#01534f' }}
              >
                1
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Connect REEF</h4>
              <p className="text-blac] text-[16px] leading-[24px] tracking-[0.52px]">Install the REEF device at the desired location</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#01534f' }}
              >
                2
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Activate Easy Pairing</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Configure wireless communication via app</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#01534f' }}
              >
                3
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>System Active</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">All equipment connected and operational</p>
            </motion.div>

             <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#01534f' }}
              >
                1
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Connect REEF</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Install the REEF device at the desired location</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#01534f' }}
              >
                2
              </div>
              <h4 className="font-semibold text-lg mb-2" style={{ color: '#01534f' }}>Activate Easy Pairing</h4>
              <p className="text-black text-[16px] leading-[24px] tracking-[0.52px]">Configure wireless communication via app</p>
            </motion.div>
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
};

export default IntegrationsSection;
