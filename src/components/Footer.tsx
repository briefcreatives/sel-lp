import { Mail, Globe, MapPin, Calendar, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-reef-primary text-reef-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Smart Energy Lab</h3>
            <p className="text-reef-background/80 mb-6 text-lg leading-relaxed">
              Pioneer in intelligent energy management. We develop innovative solutions that
              simplify the integration of distributed energy assets for a more sustainable future.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-reef-secondary" />
                <span>pedro.almeida@smartenergylab.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-reef-secondary" />
                <span>www.smartenergylab.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-reef-secondary" />
                <span>Enlit Fair 2025 - Don't miss it!</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-reef-background/80">
              <li>
                <a href="#reef" className="hover:text-reef-secondary transition-colors">
                  REEF Energy Management
                </a>
              </li>
              <li>
                <a href="#easy-pairing" className="hover:text-reef-secondary transition-colors">
                  Easy Pairing
                </a>
              </li>
              <li>
                <a href="#algoritmos" className="hover:text-reef-secondary transition-colors">
                  Intelligent Algorithms
                </a>
              </li>
              <li>
                <a href="#integracao" className="hover:text-reef-secondary transition-colors">
                  OEM Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-reef-background/80">
              <li>
                <a href="#about" className="hover:text-reef-secondary transition-colors">
                  About Smart Energy Lab
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-reef-secondary transition-colors">
                  Request Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-reef-secondary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-reef-secondary transition-colors">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enlit Section */}
        {/* <div className="bg-reef-secondary/10 rounded-2xl p-8 mb-12 border border-reef-secondary/30">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-reef-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Find Us at Enlit Fair 2025</h3>
            <p className="text-reef-background/90 mb-6 text-lg">
              See the REEF Energy Management live and experience Easy Pairing first-hand
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-reef-secondary text-reef-primary hover:bg-reef-secondary/90"
            >
              Schedule Fair Meeting
            </Button>
          </div>
        </div> */}

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-reef-background/20">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-reef-background/60 hover:text-reef-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-reef-background/60 hover:text-reef-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-reef-background/60 text-sm">
              © 2025 Smart Energy Lab. All rights reserved.
            </p>
            <p className="text-reef-background/60 text-sm mt-1">
              REEF Energy Management - Patented Technology
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-reef-secondary font-semibold text-lg">
            🚀 Transform your energy operation today
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
