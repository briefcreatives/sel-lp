import { Mail, Globe, MapPin, Calendar, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { logos } from '@/assets/logos';
import logoFooter from '@/assets/sel-logo-footer.png';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const Footer = () => {
  return (
    <footer className="bg-reef-primary text-reef-background py-16">
      <div className="container mx-auto px-6">
      <div className="max-w-[385px] flex flex-col">

         <ImageWithFallback
              src={logoFooter}
              alt="Logo Smart Energy Lab"
              className="object-cover max-w-[180px]"
            />

        <span className="my-10">Rua Camilo Castelo Branco, nº44, 5th Floor, 1050-045, Lisboa</span>
        <span className="mb-2">info@smartenergylab.com</span>
          <a
              href="https://www.linkedin.com/company/smartenergylab/"
              target="_blank"
              className="text-reef-background/60 hover:text-reef-secondary transition-colors mb-12"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-9 h-8 bg-[#d6ffe5] text-2xl text-[#01534f] p-[5px] rounded-[5px]" />
            </a>
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


        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-reef-background/20">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">

            <a
              href="#"
              className="text-reef-background/60 hover:text-reef-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>


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
