import { Mail, Globe, MapPin, Calendar, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { logos } from '@/assets/logos';
import logoFooter from '@/assets/sel-logo-footer.png';
import logoReef from '@/assets/reef-energy-management.png';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const Footer = () => {
  return (
    <footer className="bg-reef-primary text-reef-background py-16">
      <div className="container mx-auto px-6">
      <div className="flex justify-between items-center mb-12">

        <div className="flex flex-wrap justify-center items-center gap-10">
          <div>
            <a href="https://www.smartenergylab.pt/">
              <ImageWithFallback
                src={logoFooter}
                alt="Logo Smart Energy Lab"
                className="object-cover max-w-[180px]"
              />
            </a>
          </div>

        </div>

        <div className="max-w-[377px] flex flex-col justify-center items-start gap-4">
          <a
              href="https://www.linkedin.com/company/smartenergylab/"
              target="_blank"
              className="text-reef-background/60 hover:text-reef-secondary transition-colors mb-12 ml-auto"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-9 h-8 bg-[#d6ffe5] text-2xl text-[#01534f] p-[5px] rounded-[5px]" />
            </a>
          <a
          target="_blank"
          href="https://www.google.com/maps/dir//R.+Camilo+Castelo+Branco+44+5th+floor,+1050-045+Lisboa/@38.7262467,-9.2309905,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x61e8bbf4dd28c6d5:0xe90fd57eb27511ea!2m2!1d-9.1485895!2d38.7262756?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">Rua Camilo Castelo Branco, nº44, 5th Floor, 1050-045, Lisboa</a>
        <a href="mailto:info@smartenergylab.com">info@smartenergylab.com</a>

        </div>
      </div>
        {/* Logos Swiper */}
        <div className="w-full flex justify-center mb-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full px-12"
          >
            {logos.map((logo, idx) => (
              <SwiperSlide key={idx} style={{ maxWidth: 160, width: 160, display: 'flex', justifyContent: 'center' }}>
                <img src={logo.src} alt={logo.alt} style={{ height: '30px' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-[#d6ffe5] text-lg">
           Copyright © 2025 Smart energy lab | All Rights Reserved | <a href="#" className="text-reef-secondary">Privacy & Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
